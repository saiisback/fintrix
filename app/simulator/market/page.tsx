"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiArrowUpLine,
    RiArrowDownLine,
    RiRefreshLine,
    RiExternalLinkLine,
} from "react-icons/ri";
import { stocks, sectorPerformance } from "@/lib/mock-data";

const marketIndices = [
    { name: "NIFTY 50", value: 24856.50, change: 156.20, changePercent: 0.63 },
    { name: "SENSEX", value: 81789.30, change: 478.60, changePercent: 0.59 },
    { name: "BANK NIFTY", value: 52234.80, change: -123.45, changePercent: -0.24 },
    { name: "NIFTY IT", value: 38456.20, change: 234.10, changePercent: 0.61 },
];

const topGainers = stocks.filter((s) => s.changePercent > 0).sort((a, b) => b.changePercent - a.changePercent).slice(0, 5);
const topLosers = stocks.filter((s) => s.changePercent < 0).sort((a, b) => a.changePercent - b.changePercent).slice(0, 5);

export default function MarketPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Market Data</h1>
                        <p className="text-[#6b7280] mt-1">Live market overview and analysis</p>
                    </div>
                    <Button variant="outline">
                        <RiRefreshLine className="w-4 h-4 mr-2" />
                        Refresh
                    </Button>
                </div>

                {/* Market Indices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {marketIndices.map((index) => (
                        <Card key={index.name} className="border-0 shadow-sm">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-[#6b7280]">{index.name}</p>
                                    {index.changePercent >= 0 ? (
                                        <RiArrowUpLine className="w-5 h-5 text-[#28a745]" />
                                    ) : (
                                        <RiArrowDownLine className="w-5 h-5 text-red-500" />
                                    )}
                                </div>
                                <p className="text-2xl font-bold text-[#222222] mt-1">
                                    {new Intl.NumberFormat("en-IN").format(index.value)}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`text-sm ${index.changePercent >= 0 ? "text-[#28a745]" : "text-red-500"}`}>
                                        {index.change >= 0 ? "+" : ""}{index.change.toFixed(2)}
                                    </span>
                                    <Badge className={`${index.changePercent >= 0 ? "bg-[#28a745]" : "bg-red-500"} text-white text-xs`}>
                                        {index.changePercent >= 0 ? "+" : ""}{index.changePercent.toFixed(2)}%
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Tabs defaultValue="dashboard" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="dashboard">Live Dashboard</TabsTrigger>
                        <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
                        <TabsTrigger value="sectors">Sector Performance</TabsTrigger>
                        <TabsTrigger value="movers">Gainers/Losers</TabsTrigger>
                    </TabsList>

                    <TabsContent value="dashboard">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <Card className="border-0 shadow-sm lg:col-span-2">
                                <CardHeader>
                                    <CardTitle>Market Overview</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-[#e5e7eb]">
                                                    <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Symbol</th>
                                                    <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Company</th>
                                                    <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Price</th>
                                                    <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Change</th>
                                                    <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Volume</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {stocks.slice(0, 10).map((stock) => (
                                                    <tr key={stock.symbol} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                                        <td className="py-3 px-4 font-semibold text-[#222222]">{stock.symbol}</td>
                                                        <td className="py-3 px-4 text-[#6b7280]">{stock.name}</td>
                                                        <td className="py-3 px-4 text-right font-medium text-[#222222]">
                                                            {stock.price.toFixed(2)}
                                                        </td>
                                                        <td className="py-3 px-4 text-right">
                                                            <div className="flex items-center justify-end gap-2">
                                                                {stock.changePercent >= 0 ? (
                                                                    <RiArrowUpLine className="w-4 h-4 text-[#28a745]" />
                                                                ) : (
                                                                    <RiArrowDownLine className="w-4 h-4 text-red-500" />
                                                                )}
                                                                <Badge
                                                                    className={`${stock.changePercent >= 0 ? "bg-[#28a745]" : "bg-red-500"
                                                                        } text-white`}
                                                                >
                                                                    {stock.changePercent >= 0 ? "+" : ""}
                                                                    {stock.changePercent.toFixed(2)}%
                                                                </Badge>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4 text-right text-[#6b7280]">
                                                            {(stock.volume / 1000000).toFixed(2)}M
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="space-y-6">
                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Market Stats</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <span className="text-[#6b7280]">Advances</span>
                                                <span className="font-medium text-[#28a745]">1,245</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#6b7280]">Declines</span>
                                                <span className="font-medium text-red-500">856</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#6b7280]">Unchanged</span>
                                                <span className="font-medium text-[#222222]">124</span>
                                            </div>
                                            <div className="h-2 bg-[#e5e7eb] rounded-full overflow-hidden flex">
                                                <div className="h-full bg-[#28a745]" style={{ width: "56%" }} />
                                                <div className="h-full bg-red-500" style={{ width: "38%" }} />
                                                <div className="h-full bg-[#6b7280]" style={{ width: "6%" }} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">FII/DII Activity</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="p-3 bg-[#28a745]/10 rounded-lg">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-[#6b7280]">FII</span>
                                                    <Badge className="bg-[#28a745] text-white">+2,345 Cr</Badge>
                                                </div>
                                            </div>
                                            <div className="p-3 bg-[#28a745]/10 rounded-lg">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-[#6b7280]">DII</span>
                                                    <Badge className="bg-[#28a745] text-white">+1,567 Cr</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="heatmap">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Market Heatmap</CardTitle>
                                <CardDescription>Visual representation of stock performance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
                                    {stocks.map((stock) => (
                                        <div
                                            key={stock.symbol}
                                            className={`p-3 rounded-lg text-center cursor-pointer transition-transform hover:scale-105 ${stock.changePercent >= 1.5
                                                    ? "bg-[#166534] text-white"
                                                    : stock.changePercent >= 0.5
                                                        ? "bg-[#22c55e] text-white"
                                                        : stock.changePercent >= 0
                                                            ? "bg-[#86efac] text-[#222222]"
                                                            : stock.changePercent >= -0.5
                                                                ? "bg-[#fca5a5] text-[#222222]"
                                                                : stock.changePercent >= -1.5
                                                                    ? "bg-[#ef4444] text-white"
                                                                    : "bg-[#991b1b] text-white"
                                                }`}
                                        >
                                            <p className="text-xs font-bold">{stock.symbol}</p>
                                            <p className="text-sm font-medium mt-1">
                                                {stock.changePercent >= 0 ? "+" : ""}
                                                {stock.changePercent.toFixed(1)}%
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="sectors">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Sector Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {sectorPerformance.map((sector) => (
                                        <div
                                            key={sector.sector}
                                            className={`p-4 rounded-lg border ${sector.change >= 0 ? "border-[#28a745]/30" : "border-red-500/30"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-semibold text-[#222222]">{sector.sector}</h4>
                                                <Badge
                                                    className={`${sector.change >= 0 ? "bg-[#28a745]" : "bg-red-500"} text-white`}
                                                >
                                                    {sector.change >= 0 ? "+" : ""}
                                                    {sector.change.toFixed(1)}%
                                                </Badge>
                                            </div>
                                            <div className="mt-3 space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-[#6b7280]">Top Gainer</span>
                                                    <span className="text-[#28a745] font-medium">{sector.topGainer}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#6b7280]">Top Loser</span>
                                                    <span className="text-red-500 font-medium">{sector.topLoser}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="movers">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <RiArrowUpLine className="w-5 h-5 text-[#28a745]" />
                                        <CardTitle>Top Gainers</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {topGainers.map((stock, idx) => (
                                            <div
                                                key={stock.symbol}
                                                className="flex items-center justify-between p-3 rounded-lg bg-[#28a745]/5"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="w-6 h-6 bg-[#28a745] text-white rounded-full flex items-center justify-center text-xs font-bold">
                                                        {idx + 1}
                                                    </span>
                                                    <div>
                                                        <p className="font-semibold text-[#222222]">{stock.symbol}</p>
                                                        <p className="text-xs text-[#6b7280]">{stock.name}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium text-[#222222]">{stock.price.toFixed(2)}</p>
                                                    <Badge className="bg-[#28a745] text-white">
                                                        +{stock.changePercent.toFixed(2)}%
                                                    </Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <RiArrowDownLine className="w-5 h-5 text-red-500" />
                                        <CardTitle>Top Losers</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {topLosers.map((stock, idx) => (
                                            <div
                                                key={stock.symbol}
                                                className="flex items-center justify-between p-3 rounded-lg bg-red-500/5"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                                        {idx + 1}
                                                    </span>
                                                    <div>
                                                        <p className="font-semibold text-[#222222]">{stock.symbol}</p>
                                                        <p className="text-xs text-[#6b7280]">{stock.name}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium text-[#222222]">{stock.price.toFixed(2)}</p>
                                                    <Badge className="bg-red-500 text-white">
                                                        {stock.changePercent.toFixed(2)}%
                                                    </Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
