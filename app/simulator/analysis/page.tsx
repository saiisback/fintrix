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
    RiSearchLine,
    RiErrorWarningLine,
    RiCheckboxCircleLine,
    RiPriceTag3Line,
} from "react-icons/ri";
import { trades } from "@/lib/mock-data";

const tradeAnalysis = [
    {
        id: "T001",
        symbol: "RELIANCE",
        type: "BUY",
        entryPrice: 2445.50,
        exitPrice: 2520.00,
        qty: 10,
        pnl: 745,
        pnlPercent: 3.05,
        holdingDays: 5,
        entryQuality: "Good",
        exitQuality: "Excellent",
        reason: "Breakout above resistance",
        tags: ["breakout", "momentum"],
        mistakes: [],
    },
    {
        id: "T002",
        symbol: "TCS",
        type: "BUY",
        entryPrice: 3750.00,
        exitPrice: 3680.00,
        qty: 5,
        pnl: -350,
        pnlPercent: -1.87,
        holdingDays: 3,
        entryQuality: "Poor",
        exitQuality: "Good",
        reason: "Sector rotation play",
        tags: ["sector-play"],
        mistakes: ["Entered against trend", "Ignored support level"],
    },
    {
        id: "T003",
        symbol: "HDFCBANK",
        type: "BUY",
        entryPrice: 1665.30,
        exitPrice: 1720.00,
        qty: 20,
        pnl: 1094,
        pnlPercent: 3.28,
        holdingDays: 7,
        entryQuality: "Excellent",
        exitQuality: "Good",
        reason: "Cup and handle pattern",
        tags: ["pattern", "banking"],
        mistakes: [],
    },
];

const mistakeCategories = [
    { name: "Early Entry", count: 8, percentage: 25 },
    { name: "Late Exit", count: 6, percentage: 18.75 },
    { name: "Ignored Stop Loss", count: 5, percentage: 15.63 },
    { name: "FOMO Trading", count: 4, percentage: 12.5 },
    { name: "Overtrading", count: 4, percentage: 12.5 },
    { name: "Against Trend", count: 3, percentage: 9.38 },
    { name: "Position Too Large", count: 2, percentage: 6.25 },
];

const reasonTags = [
    { name: "Breakout", count: 15, winRate: 73 },
    { name: "Support Bounce", count: 12, winRate: 67 },
    { name: "Momentum", count: 10, winRate: 60 },
    { name: "Pattern", count: 8, winRate: 75 },
    { name: "Sector Play", count: 6, winRate: 50 },
    { name: "News Based", count: 5, winRate: 40 },
    { name: "FOMO", count: 4, winRate: 25 },
];

export default function TradeAnalysisPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Trade Analysis</h1>
                    <p className="text-[#6b7280] mt-1">Review your trades and improve your strategy</p>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">Total Trades</p>
                            <p className="text-2xl font-bold text-[#222222]">156</p>
                            <p className="text-sm text-[#6b7280] mt-1">Last 30 days: 24</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">Win Rate</p>
                            <p className="text-2xl font-bold text-[#28a745]">68.4%</p>
                            <p className="text-sm text-[#28a745] mt-1">+2.4% vs last month</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">Avg Profit/Trade</p>
                            <p className="text-2xl font-bold text-[#28a745]">+1,245</p>
                            <p className="text-sm text-[#6b7280] mt-1">Risk:Reward 1:2.3</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">Common Mistake</p>
                            <p className="text-2xl font-bold text-[#222222]">Early Entry</p>
                            <p className="text-sm text-red-500 mt-1">25% of losing trades</p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="details" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="details">Trade Details</TabsTrigger>
                        <TabsTrigger value="mistakes">Mistake Review</TabsTrigger>
                        <TabsTrigger value="tags">Reason Tagging</TabsTrigger>
                    </TabsList>

                    <TabsContent value="details">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Trade Details</CardTitle>
                                <CardDescription>Detailed breakdown of your recent trades</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {tradeAnalysis.map((trade) => (
                                        <div
                                            key={trade.id}
                                            className="p-4 rounded-lg border border-[#e5e7eb] hover:border-[#0063b3]/30 transition-colors"
                                        >
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${trade.pnl >= 0 ? "bg-[#28a745]/10" : "bg-red-500/10"
                                                            }`}
                                                    >
                                                        {trade.pnl >= 0 ? (
                                                            <RiArrowUpLine className="w-6 h-6 text-[#28a745]" />
                                                        ) : (
                                                            <RiArrowDownLine className="w-6 h-6 text-red-500" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h4 className="font-semibold text-[#222222]">{trade.symbol}</h4>
                                                            <Badge className={`${trade.type === "BUY" ? "bg-[#28a745]" : "bg-red-500"} text-white`}>
                                                                {trade.type}
                                                            </Badge>
                                                        </div>
                                                        <p className="text-sm text-[#6b7280]">
                                                            {trade.qty} shares | Held for {trade.holdingDays} days
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-4 lg:gap-8">
                                                    <div className="text-center">
                                                        <p className="text-xs text-[#6b7280]">Entry</p>
                                                        <p className="font-medium text-[#222222]">{trade.entryPrice.toFixed(2)}</p>
                                                        <Badge
                                                            variant="outline"
                                                            className={`text-xs mt-1 ${trade.entryQuality === "Excellent"
                                                                    ? "text-[#28a745] border-[#28a745]"
                                                                    : trade.entryQuality === "Good"
                                                                        ? "text-[#0063b3] border-[#0063b3]"
                                                                        : "text-red-500 border-red-500"
                                                                }`}
                                                        >
                                                            {trade.entryQuality}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-xs text-[#6b7280]">Exit</p>
                                                        <p className="font-medium text-[#222222]">{trade.exitPrice.toFixed(2)}</p>
                                                        <Badge
                                                            variant="outline"
                                                            className={`text-xs mt-1 ${trade.exitQuality === "Excellent"
                                                                    ? "text-[#28a745] border-[#28a745]"
                                                                    : trade.exitQuality === "Good"
                                                                        ? "text-[#0063b3] border-[#0063b3]"
                                                                        : "text-red-500 border-red-500"
                                                                }`}
                                                        >
                                                            {trade.exitQuality}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-xs text-[#6b7280]">P&L</p>
                                                        <p className={`font-bold ${trade.pnl >= 0 ? "text-[#28a745]" : "text-red-500"}`}>
                                                            {trade.pnl >= 0 ? "+" : ""}
                                                            {new Intl.NumberFormat("en-IN").format(trade.pnl)}
                                                        </p>
                                                        <Badge className={`mt-1 ${trade.pnl >= 0 ? "bg-[#28a745]" : "bg-red-500"} text-white text-xs`}>
                                                            {trade.pnl >= 0 ? "+" : ""}{trade.pnlPercent.toFixed(2)}%
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                                                <div className="flex flex-wrap items-center gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <RiPriceTag3Line className="w-4 h-4 text-[#6b7280]" />
                                                        <span className="text-sm text-[#6b7280]">Reason:</span>
                                                        <span className="text-sm text-[#222222]">{trade.reason}</span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        {trade.tags.map((tag) => (
                                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                {trade.mistakes.length > 0 && (
                                                    <div className="mt-3 p-3 bg-red-50 rounded-lg">
                                                        <div className="flex items-center gap-2 text-red-600">
                                                            <RiErrorWarningLine className="w-4 h-4" />
                                                            <span className="text-sm font-medium">Mistakes Identified:</span>
                                                        </div>
                                                        <ul className="mt-2 space-y-1">
                                                            {trade.mistakes.map((mistake, idx) => (
                                                                <li key={idx} className="text-sm text-red-600 flex items-center gap-2">
                                                                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                                                                    {mistake}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="mistakes">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Common Mistakes</CardTitle>
                                    <CardDescription>Analyzed from your losing trades</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {mistakeCategories.map((mistake) => (
                                            <div key={mistake.name} className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium text-[#222222]">{mistake.name}</span>
                                                    <span className="text-sm text-[#6b7280]">{mistake.count} trades ({mistake.percentage}%)</span>
                                                </div>
                                                <div className="w-full h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-red-500 rounded-full"
                                                        style={{ width: `${mistake.percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Improvement Suggestions</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-[#0063b3]/5 rounded-lg border border-[#0063b3]/20">
                                            <h4 className="font-medium text-[#222222]">Wait for Confirmation</h4>
                                            <p className="text-sm text-[#6b7280] mt-1">
                                                Your early entries are causing 25% of losses. Wait for the second candle to close
                                                above resistance before entering breakout trades.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-[#28a745]/5 rounded-lg border border-[#28a745]/20">
                                            <h4 className="font-medium text-[#222222]">Use Trailing Stop Loss</h4>
                                            <p className="text-sm text-[#6b7280] mt-1">
                                                Late exits are reducing your profits. Implement a trailing stop loss at 2-3%
                                                below the high after 5% profit is achieved.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-[#f59e0b]/5 rounded-lg border border-[#f59e0b]/20">
                                            <h4 className="font-medium text-[#222222]">Limit Daily Trades</h4>
                                            <p className="text-sm text-[#6b7280] mt-1">
                                                Overtrading appears in your losing days. Set a maximum of 3 trades per day
                                                and stick to it.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="tags">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Strategy Performance by Reason</CardTitle>
                                <CardDescription>See which strategies work best for you</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {reasonTags.map((tag) => (
                                        <div
                                            key={tag.name}
                                            className={`p-4 rounded-lg border ${tag.winRate >= 60
                                                    ? "border-[#28a745]/30 bg-[#28a745]/5"
                                                    : tag.winRate >= 40
                                                        ? "border-[#f59e0b]/30 bg-[#f59e0b]/5"
                                                        : "border-red-500/30 bg-red-500/5"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-medium text-[#222222]">{tag.name}</h4>
                                                <Badge
                                                    className={`${tag.winRate >= 60
                                                            ? "bg-[#28a745]"
                                                            : tag.winRate >= 40
                                                                ? "bg-[#f59e0b]"
                                                                : "bg-red-500"
                                                        } text-white`}
                                                >
                                                    {tag.winRate}% Win
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-[#6b7280] mt-2">{tag.count} trades</p>
                                            <div className="flex items-center gap-2 mt-3">
                                                {tag.winRate >= 60 ? (
                                                    <RiCheckboxCircleLine className="w-4 h-4 text-[#28a745]" />
                                                ) : (
                                                    <RiErrorWarningLine className="w-4 h-4 text-[#f59e0b]" />
                                                )}
                                                <span className="text-xs text-[#6b7280]">
                                                    {tag.winRate >= 60
                                                        ? "Keep using this strategy"
                                                        : tag.winRate >= 40
                                                            ? "Needs improvement"
                                                            : "Avoid this strategy"}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
