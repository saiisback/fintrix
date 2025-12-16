"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
    RiLineChartLine,
    RiArrowUpLine,
    RiArrowDownLine,
    RiTimeLine,
    RiAlertLine,
    RiCheckboxCircleLine,
    RiCloseCircleLine,
    RiLightbulbLine,
    RiBarChartLine,
    RiPieChartLine,
    RiTrophyLine,
    RiFireLine,
    RiEmotionLine,
    RiCalendarLine,
    RiExchangeLine,
} from "react-icons/ri";

// Mock data for trade insights
const tradeStats = {
    totalTrades: 156,
    winRate: 62.8,
    avgProfit: 3.45,
    avgLoss: -2.12,
    profitFactor: 1.78,
    largestWin: 12450,
    largestLoss: -4320,
    avgHoldingTime: "2h 34m",
    tradingDays: 45,
    bestDay: "Tuesday",
    bestTime: "10:00 - 11:00 AM",
};

const recentTrades = [
    { id: 1, symbol: "RELIANCE", type: "BUY", entry: 2445.50, exit: 2478.30, pnl: 3280, pnlPercent: 1.34, date: "Dec 16", time: "10:15 AM", holdingTime: "1h 45m", status: "win" },
    { id: 2, symbol: "TCS", type: "SELL", entry: 3890.20, exit: 3845.60, pnl: -2230, pnlPercent: -1.15, date: "Dec 15", time: "2:30 PM", holdingTime: "3h 20m", status: "loss" },
    { id: 3, symbol: "HDFCBANK", type: "BUY", entry: 1665.30, exit: 1692.80, pnl: 2750, pnlPercent: 1.65, date: "Dec 15", time: "9:45 AM", holdingTime: "45m", status: "win" },
    { id: 4, symbol: "INFY", type: "BUY", entry: 1572.80, exit: 1598.40, pnl: 2560, pnlPercent: 1.63, date: "Dec 14", time: "11:00 AM", holdingTime: "2h 15m", status: "win" },
    { id: 5, symbol: "ICICIBANK", type: "SELL", entry: 1228.40, exit: 1195.20, pnl: -1660, pnlPercent: -2.70, date: "Dec 14", time: "3:15 PM", holdingTime: "1h 30m", status: "loss" },
];

const behaviorPatterns = [
    {
        id: 1,
        type: "strength",
        title: "Strong Entry Timing",
        description: "Your entries during 10-11 AM show 78% win rate, above your average.",
        insight: "Continue trading during your peak performance hours.",
        icon: RiCheckboxCircleLine,
        color: "#28a745",
    },
    {
        id: 2,
        type: "weakness",
        title: "Premature Exits",
        description: "You're exiting 23% of winning trades too early, leaving profits on the table.",
        insight: "Consider using trailing stop losses instead of fixed targets.",
        icon: RiAlertLine,
        color: "#f59e0b",
    },
    {
        id: 3,
        type: "weakness",
        title: "Overtrading on Fridays",
        description: "Your Friday trades have only 45% win rate compared to 65% on other days.",
        insight: "Reduce position sizes or avoid trading on Fridays.",
        icon: RiCloseCircleLine,
        color: "#dc2626",
    },
    {
        id: 4,
        type: "strength",
        title: "Good Risk Management",
        description: "Your average loss is smaller than average profit (1:1.6 ratio).",
        insight: "Keep maintaining this disciplined approach to losses.",
        icon: RiCheckboxCircleLine,
        color: "#28a745",
    },
];

const weeklyBreakdown = [
    { day: "Mon", trades: 8, winRate: 75, pnl: 4560 },
    { day: "Tue", trades: 12, winRate: 83, pnl: 8920 },
    { day: "Wed", trades: 10, winRate: 60, pnl: 2340 },
    { day: "Thu", trades: 9, winRate: 67, pnl: 3780 },
    { day: "Fri", trades: 7, winRate: 43, pnl: -2100 },
];

const emotionalIndicators = [
    { category: "Calm Trades", percentage: 68, description: "Trades within your plan", color: "#28a745" },
    { category: "FOMO Trades", percentage: 15, description: "Chasing after missed moves", color: "#f59e0b" },
    { category: "Revenge Trades", percentage: 12, description: "After a loss, quick re-entry", color: "#dc2626" },
    { category: "Impulsive Trades", percentage: 5, description: "No clear setup or plan", color: "#8b5cf6" },
];

export default function TradeInsightsPage() {
    const [selectedPeriod, setSelectedPeriod] = useState("week");

    const formatCurrency = (value: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Trade Insights</h1>
                        <p className="text-[#6b7280] mt-1">Understand your trading patterns and improve your decisions</p>
                    </div>
                    <div className="flex gap-2">
                        {["week", "month", "all"].map((period) => (
                            <Button
                                key={period}
                                variant={selectedPeriod === period ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedPeriod(period)}
                                className={selectedPeriod === period ? "bg-[#0063b3]" : ""}
                            >
                                {period === "week" ? "This Week" : period === "month" ? "This Month" : "All Time"}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#0063b3]/10 flex items-center justify-center">
                                    <RiExchangeLine className="w-5 h-5 text-[#0063b3]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-[#222222]">{tradeStats.totalTrades}</p>
                                    <p className="text-sm text-[#6b7280]">Total Trades</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#28a745]/10 flex items-center justify-center">
                                    <RiTrophyLine className="w-5 h-5 text-[#28a745]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-[#28a745]">{tradeStats.winRate}%</p>
                                    <p className="text-sm text-[#6b7280]">Win Rate</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                                    <RiBarChartLine className="w-5 h-5 text-[#8b5cf6]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-[#222222]">{tradeStats.profitFactor}</p>
                                    <p className="text-sm text-[#6b7280]">Profit Factor</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center">
                                    <RiTimeLine className="w-5 h-5 text-[#f59e0b]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-[#222222]">{tradeStats.avgHoldingTime}</p>
                                    <p className="text-sm text-[#6b7280]">Avg Hold Time</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Behavior Patterns */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <RiLightbulbLine className="w-5 h-5 text-[#f59e0b]" />
                                    Behavior Patterns
                                </CardTitle>
                                <CardDescription>AI-analyzed patterns in your trading behavior</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {behaviorPatterns.map((pattern) => (
                                        <div
                                            key={pattern.id}
                                            className="p-4 rounded-lg border border-[#e5e7eb] hover:border-[#0063b3]/30 transition-colors"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                                    style={{ backgroundColor: `${pattern.color}15` }}
                                                >
                                                    <pattern.icon className="w-5 h-5" style={{ color: pattern.color }} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-semibold text-[#222222]">{pattern.title}</h4>
                                                        <Badge
                                                            className="text-xs"
                                                            style={{
                                                                backgroundColor: `${pattern.color}15`,
                                                                color: pattern.color
                                                            }}
                                                        >
                                                            {pattern.type === "strength" ? "Strength" : "Needs Work"}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-[#6b7280] mt-1">{pattern.description}</p>
                                                    <div className="mt-2 p-2 bg-[#f4f4f4] rounded text-sm">
                                                        <span className="font-medium text-[#0063b3]">💡 Insight: </span>
                                                        {pattern.insight}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Trades Analysis */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Recent Trades</CardTitle>
                                <CardDescription>Your latest trades with performance breakdown</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {recentTrades.map((trade) => (
                                        <div
                                            key={trade.id}
                                            className="flex items-center justify-between p-3 rounded-lg border border-[#e5e7eb]"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${trade.status === "win" ? "bg-[#28a745]/10" : "bg-[#dc2626]/10"
                                                    }`}>
                                                    {trade.status === "win" ? (
                                                        <RiArrowUpLine className="w-5 h-5 text-[#28a745]" />
                                                    ) : (
                                                        <RiArrowDownLine className="w-5 h-5 text-[#dc2626]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-[#222222]">{trade.symbol}</span>
                                                        <Badge variant="secondary" className="text-xs">{trade.type}</Badge>
                                                    </div>
                                                    <p className="text-xs text-[#6b7280]">
                                                        {trade.date} • {trade.time} • Held {trade.holdingTime}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className={`font-bold ${trade.pnl >= 0 ? "text-[#28a745]" : "text-[#dc2626]"}`}>
                                                    {trade.pnl >= 0 ? "+" : ""}{formatCurrency(trade.pnl)}
                                                </p>
                                                <p className={`text-xs ${trade.pnlPercent >= 0 ? "text-[#28a745]" : "text-[#dc2626]"}`}>
                                                    {trade.pnlPercent >= 0 ? "+" : ""}{trade.pnlPercent}%
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-6">
                        {/* Win/Loss Breakdown */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">Performance Breakdown</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-[#6b7280]">Win Rate</span>
                                            <span className="font-medium text-[#28a745]">{tradeStats.winRate}%</span>
                                        </div>
                                        <Progress value={tradeStats.winRate} className="h-2" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-[#28a745]/10 rounded-lg text-center">
                                            <p className="text-lg font-bold text-[#28a745]">+{tradeStats.avgProfit}%</p>
                                            <p className="text-xs text-[#6b7280]">Avg Win</p>
                                        </div>
                                        <div className="p-3 bg-[#dc2626]/10 rounded-lg text-center">
                                            <p className="text-lg font-bold text-[#dc2626]">{tradeStats.avgLoss}%</p>
                                            <p className="text-xs text-[#6b7280]">Avg Loss</p>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-[#e5e7eb]">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#6b7280]">Largest Win</span>
                                            <span className="font-medium text-[#28a745]">{formatCurrency(tradeStats.largestWin)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-2">
                                            <span className="text-[#6b7280]">Largest Loss</span>
                                            <span className="font-medium text-[#dc2626]">{formatCurrency(tradeStats.largestLoss)}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Best Trading Times */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <RiFireLine className="w-5 h-5 text-[#f59e0b]" />
                                    Your Best Times
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="p-3 bg-[#f4f4f4] rounded-lg">
                                        <p className="text-sm text-[#6b7280]">Best Day</p>
                                        <p className="font-semibold text-[#222222]">{tradeStats.bestDay}</p>
                                    </div>
                                    <div className="p-3 bg-[#f4f4f4] rounded-lg">
                                        <p className="text-sm text-[#6b7280]">Peak Hours</p>
                                        <p className="font-semibold text-[#222222]">{tradeStats.bestTime}</p>
                                    </div>
                                    <div className="p-3 bg-[#f4f4f4] rounded-lg">
                                        <p className="text-sm text-[#6b7280]">Trading Days</p>
                                        <p className="font-semibold text-[#222222]">{tradeStats.tradingDays} days</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emotional Trading */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <RiEmotionLine className="w-5 h-5 text-[#8b5cf6]" />
                                    Trade Quality
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {emotionalIndicators.map((indicator) => (
                                        <div key={indicator.category}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-[#222222]">{indicator.category}</span>
                                                <span className="font-medium" style={{ color: indicator.color }}>
                                                    {indicator.percentage}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-[#f4f4f4] rounded-full h-2">
                                                <div
                                                    className="h-2 rounded-full transition-all"
                                                    style={{
                                                        width: `${indicator.percentage}%`,
                                                        backgroundColor: indicator.color
                                                    }}
                                                />
                                            </div>
                                            <p className="text-xs text-[#6b7280] mt-1">{indicator.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Weekly Breakdown */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <RiCalendarLine className="w-5 h-5 text-[#0063b3]" />
                                    Weekly Breakdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {weeklyBreakdown.map((day) => (
                                        <div key={day.day} className="flex items-center justify-between p-2 rounded-lg hover:bg-[#f4f4f4] transition-colors">
                                            <div className="flex items-center gap-3">
                                                <span className="w-8 font-medium text-[#222222]">{day.day}</span>
                                                <span className="text-xs text-[#6b7280]">{day.trades} trades</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Badge
                                                    className="text-xs"
                                                    style={{
                                                        backgroundColor: day.winRate >= 60 ? "#28a74515" : day.winRate >= 50 ? "#f59e0b15" : "#dc262615",
                                                        color: day.winRate >= 60 ? "#28a745" : day.winRate >= 50 ? "#f59e0b" : "#dc2626"
                                                    }}
                                                >
                                                    {day.winRate}%
                                                </Badge>
                                                <span className={`text-sm font-medium ${day.pnl >= 0 ? "text-[#28a745]" : "text-[#dc2626]"}`}>
                                                    {day.pnl >= 0 ? "+" : ""}{formatCurrency(day.pnl)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
