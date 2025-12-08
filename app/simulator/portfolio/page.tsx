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
    RiPieChartLine,
    RiWalletLine,
    RiDownloadLine,
} from "react-icons/ri";
import {
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { holdings, portfolioAllocation, portfolioPerformanceData, currentUser } from "@/lib/mock-data";

const COLORS = ["#0063b3", "#28a745", "#8b5cf6", "#f59e0b", "#6b7280"];

export default function PortfolioPage() {
    const totalInvested = holdings.reduce((acc, h) => acc + h.invested, 0);
    const totalCurrent = holdings.reduce((acc, h) => acc + h.current, 0);
    const totalPnL = totalCurrent - totalInvested;
    const totalPnLPercent = ((totalPnL / totalInvested) * 100).toFixed(2);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Portfolio</h1>
                        <p className="text-[#6b7280] mt-1">Track your holdings and performance</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline">
                            <RiDownloadLine className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Total Value</p>
                                    <p className="text-2xl font-bold text-[#222222]">
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                            maximumFractionDigits: 0,
                                        }).format(currentUser.portfolioValue)}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                    <RiWalletLine className="w-6 h-6 text-[#0063b3]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Invested Amount</p>
                                    <p className="text-2xl font-bold text-[#222222]">
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                            maximumFractionDigits: 0,
                                        }).format(totalInvested)}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-[#6b7280]/10 rounded-xl flex items-center justify-center">
                                    <RiPieChartLine className="w-6 h-6 text-[#6b7280]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Total P&L</p>
                                    <p className={`text-2xl font-bold ${totalPnL >= 0 ? "text-[#28a745]" : "text-red-500"}`}>
                                        {totalPnL >= 0 ? "+" : ""}
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                            maximumFractionDigits: 0,
                                        }).format(totalPnL)}
                                    </p>
                                </div>
                                <div
                                    className={`w-12 h-12 ${totalPnL >= 0 ? "bg-[#28a745]/10" : "bg-red-500/10"
                                        } rounded-xl flex items-center justify-center`}
                                >
                                    {totalPnL >= 0 ? (
                                        <RiArrowUpLine className="w-6 h-6 text-[#28a745]" />
                                    ) : (
                                        <RiArrowDownLine className="w-6 h-6 text-red-500" />
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Returns</p>
                                    <p className={`text-2xl font-bold ${totalPnL >= 0 ? "text-[#28a745]" : "text-red-500"}`}>
                                        {totalPnL >= 0 ? "+" : ""}
                                        {totalPnLPercent}%
                                    </p>
                                </div>
                                <Badge className={`${totalPnL >= 0 ? "bg-[#28a745]" : "bg-red-500"} text-white`}>
                                    All Time
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="holdings" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="holdings">Holdings</TabsTrigger>
                        <TabsTrigger value="pnl">P&L Dashboard</TabsTrigger>
                        <TabsTrigger value="allocation">Allocation</TabsTrigger>
                        <TabsTrigger value="returns">Return Analytics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="holdings">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Your Holdings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-[#e5e7eb]">
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Symbol</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Company</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Qty</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Avg Price</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">LTP</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Invested</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Current</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">P&L</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Returns</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {holdings.map((holding) => (
                                                <tr key={holding.symbol} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                                    <td className="py-4 px-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center">
                                                                <span className="text-white text-xs font-bold">
                                                                    {holding.symbol.slice(0, 2)}
                                                                </span>
                                                            </div>
                                                            <span className="font-semibold text-[#222222]">{holding.symbol}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 text-[#6b7280]">{holding.name}</td>
                                                    <td className="py-4 px-4 text-right text-[#222222]">{holding.qty}</td>
                                                    <td className="py-4 px-4 text-right text-[#222222]">{holding.avgPrice.toFixed(2)}</td>
                                                    <td className="py-4 px-4 text-right text-[#222222]">{holding.currentPrice.toFixed(2)}</td>
                                                    <td className="py-4 px-4 text-right text-[#222222]">
                                                        {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(holding.invested)}
                                                    </td>
                                                    <td className="py-4 px-4 text-right text-[#222222]">
                                                        {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(holding.current)}
                                                    </td>
                                                    <td className={`py-4 px-4 text-right font-medium ${holding.pnl >= 0 ? "text-[#28a745]" : "text-red-500"}`}>
                                                        {holding.pnl >= 0 ? "+" : ""}
                                                        {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(holding.pnl)}
                                                    </td>
                                                    <td className="py-4 px-4 text-right">
                                                        <Badge className={`${holding.pnlPercent >= 0 ? "bg-[#28a745]" : "bg-red-500"} text-white`}>
                                                            {holding.pnlPercent >= 0 ? "+" : ""}
                                                            {holding.pnlPercent.toFixed(2)}%
                                                        </Badge>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="pnl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>P&L by Stock</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {holdings.map((holding) => (
                                            <div key={holding.symbol} className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-[#222222] rounded flex items-center justify-center">
                                                        <span className="text-white text-xs font-bold">{holding.symbol.slice(0, 2)}</span>
                                                    </div>
                                                    <span className="font-medium text-[#222222]">{holding.symbol}</span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-24 h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full ${holding.pnl >= 0 ? "bg-[#28a745]" : "bg-red-500"}`}
                                                            style={{ width: `${Math.min(holding.pnlPercent * 5, 100)}%` }}
                                                        />
                                                    </div>
                                                    <span className={`font-medium w-16 text-right ${holding.pnl >= 0 ? "text-[#28a745]" : "text-red-500"}`}>
                                                        {holding.pnlPercent >= 0 ? "+" : ""}{holding.pnlPercent.toFixed(2)}%
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>P&L Trend</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={portfolioPerformanceData}>
                                                <defs>
                                                    <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#28a745" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="#28a745" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                                <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} tickFormatter={(v) => `${((v - 1000000) / 1000).toFixed(0)}K`} />
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: "8px", color: "#fff" }}
                                                    formatter={(value: number) => [`P&L: +${((value - 1000000) / 1000).toFixed(1)}K`, ""]}
                                                />
                                                <Area type="monotone" dataKey="value" stroke="#28a745" strokeWidth={2} fill="url(#pnlGradient)" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="allocation">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Sector Allocation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-72">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={portfolioAllocation}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={60}
                                                    outerRadius={100}
                                                    paddingAngle={2}
                                                    dataKey="value"
                                                >
                                                    {portfolioAllocation.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: "8px", color: "#fff" }}
                                                    formatter={(value: number) => [
                                                        new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value),
                                                        "",
                                                    ]}
                                                />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Allocation Breakdown</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {portfolioAllocation.map((item, idx) => (
                                            <div key={item.sector} className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                                                        <span className="font-medium text-[#222222]">{item.sector}</span>
                                                    </div>
                                                    <span className="text-[#6b7280]">{item.percentage}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full"
                                                        style={{ width: `${item.percentage}%`, backgroundColor: COLORS[idx] }}
                                                    />
                                                </div>
                                                <p className="text-sm text-[#6b7280]">
                                                    {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(item.value)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="returns">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Return Analytics</CardTitle>
                                <CardDescription>Performance over time</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={portfolioPerformanceData}>
                                            <defs>
                                                <linearGradient id="returnGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#0063b3" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#0063b3" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                            <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                            <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} tickFormatter={(v) => `${(v / 100000).toFixed(0)}L`} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: "8px", color: "#fff" }}
                                                formatter={(value: number) => [
                                                    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value),
                                                    "Portfolio Value",
                                                ]}
                                            />
                                            <Area type="monotone" dataKey="value" stroke="#0063b3" strokeWidth={2} fill="url(#returnGradient)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#e5e7eb]">
                                    <div className="text-center">
                                        <p className="text-sm text-[#6b7280]">1 Month</p>
                                        <p className="text-xl font-bold text-[#28a745]">+2.4%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-[#6b7280]">3 Months</p>
                                        <p className="text-xl font-bold text-[#28a745]">+6.8%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-[#6b7280]">6 Months</p>
                                        <p className="text-xl font-bold text-[#28a745]">+11.2%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-[#6b7280]">1 Year</p>
                                        <p className="text-xl font-bold text-[#28a745]">+15.7%</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
