"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    RiArrowUpLine,
    RiArrowDownLine,
    RiArrowRightLine,
    RiBookOpenLine,
    RiTrophyLine,
    RiFireLine,
    RiLineChartLine,
    RiStockLine,
    RiMedalLine,
    RiLightbulbLine,
    RiPlayCircleLine,
    RiCheckboxCircleLine,
} from "react-icons/ri";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import Link from "next/link";
import {
    currentUser,
    courses,
    holdings,
    trades,
    dailyChallenges,
    achievements,
    portfolioPerformanceData,
    learningProgressData,
    leaderboard,
} from "@/lib/mock-data";

export default function DashboardPage() {
    const activeCourses = courses.filter((c) => c.progress > 0 && c.progress < 100).slice(0, 3);
    const recentTrades = trades.slice(0, 5);
    const earnedBadges = achievements.filter((a) => a.earned).slice(0, 4);
    const userRank = leaderboard.find((l) => l.isCurrentUser);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Welcome Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">
                            Welcome back, {currentUser.name.split(" ")[0]}!
                        </h1>
                        <p className="text-[#6b7280] mt-1">
                            Here&apos;s what&apos;s happening with your learning and trading today.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button asChild className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                            <Link href="/courses">
                                <RiPlayCircleLine className="w-4 h-4 mr-2" />
                                Continue Learning
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/simulator">
                                <RiStockLine className="w-4 h-4 mr-2" />
                                Start Trading
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Portfolio Value</p>
                                    <p className="text-2xl font-bold text-[#222222]">
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                            maximumFractionDigits: 0,
                                        }).format(currentUser.portfolioValue)}
                                    </p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <RiArrowUpLine className="w-4 h-4 text-[#28a745]" />
                                        <span className="text-sm font-medium text-[#28a745]">
                                            +{currentUser.totalProfitLossPercent}%
                                        </span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                    <RiLineChartLine className="w-6 h-6 text-[#0063b3]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">XP Earned</p>
                                    <p className="text-2xl font-bold text-[#222222]">
                                        {currentUser.xp.toLocaleString()}
                                    </p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-sm text-[#6b7280]">Rank #{userRank?.rank}</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-[#28a745]/10 rounded-xl flex items-center justify-center">
                                    <RiTrophyLine className="w-6 h-6 text-[#28a745]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Learning Streak</p>
                                    <p className="text-2xl font-bold text-[#222222]">{currentUser.streak} Days</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <RiFireLine className="w-4 h-4 text-orange-500" />
                                        <span className="text-sm text-[#6b7280]">Keep it up!</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                    <RiFireLine className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Courses Completed</p>
                                    <p className="text-2xl font-bold text-[#222222]">{currentUser.completedCourses}</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-sm text-[#6b7280]">{currentUser.certificatesEarned} Certificates</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                    <RiBookOpenLine className="w-6 h-6 text-purple-500" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Portfolio Performance */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg">Portfolio Performance</CardTitle>
                                    <CardDescription>Your virtual portfolio growth</CardDescription>
                                </div>
                                <Badge className="bg-[#28a745] text-white">
                                    +{currentUser.totalProfitLossPercent}% All Time
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={portfolioPerformanceData}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0063b3" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#0063b3" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <YAxis
                                            tick={{ fill: "#6b7280", fontSize: 12 }}
                                            tickFormatter={(value) => `${(value / 100000).toFixed(0)}L`}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "#222222",
                                                border: "none",
                                                borderRadius: "8px",
                                                color: "#fff",
                                            }}
                                            formatter={(value: number) => [
                                                new Intl.NumberFormat("en-IN", {
                                                    style: "currency",
                                                    currency: "INR",
                                                    maximumFractionDigits: 0,
                                                }).format(value),
                                                "Value",
                                            ]}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#0063b3"
                                            strokeWidth={2}
                                            fill="url(#colorValue)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Learning Progress */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg">Learning Progress</CardTitle>
                                    <CardDescription>Hours spent learning this month</CardDescription>
                                </div>
                                <Badge variant="outline">39 hours total</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={learningProgressData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="week" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "#222222",
                                                border: "none",
                                                borderRadius: "8px",
                                                color: "#fff",
                                            }}
                                            formatter={(value: number) => [`${value} hours`, "Time Spent"]}
                                        />
                                        <Bar dataKey="hours" fill="#0063b3" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Active Courses & Daily Challenges */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Continue Learning */}
                    <Card className="border-0 shadow-sm lg:col-span-2">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Continue Learning</CardTitle>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/courses" className="text-[#0063b3]">
                                        View All
                                        <RiArrowRightLine className="w-4 h-4 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {activeCourses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#f4f4f4] transition-colors"
                                    >
                                        <div className="w-16 h-16 bg-[#0063b3]/10 rounded-lg flex items-center justify-center shrink-0">
                                            <RiBookOpenLine className="w-8 h-8 text-[#0063b3]" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-[#222222] truncate">{course.title}</h4>
                                            <p className="text-sm text-[#6b7280]">{course.instructor}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <Progress value={course.progress} className="h-2 flex-1" />
                                                <span className="text-sm font-medium text-[#0063b3]">{course.progress}%</span>
                                            </div>
                                        </div>
                                        <Button size="sm" className="bg-[#0063b3] hover:bg-[#0063b3]/90 shrink-0">
                                            Resume
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Daily Challenges */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Daily Challenges</CardTitle>
                                <Badge className="bg-[#0063b3]">{dailyChallenges.filter(c => c.completed).length}/{dailyChallenges.length}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {dailyChallenges.map((challenge) => (
                                    <div
                                        key={challenge.id}
                                        className={`p-3 rounded-lg border ${challenge.completed ? "bg-[#e9f7ef] border-[#28a745]/30" : "border-[#e5e7eb]"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex items-start gap-2">
                                                <div
                                                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${challenge.completed ? "bg-[#28a745]" : "border-2 border-[#e5e7eb]"
                                                        }`}
                                                >
                                                    {challenge.completed && (
                                                        <RiCheckboxCircleLine className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className={`text-sm font-medium ${challenge.completed ? "text-[#28a745]" : "text-[#222222]"}`}>
                                                        {challenge.title}
                                                    </p>
                                                    <p className="text-xs text-[#6b7280]">+{challenge.reward} XP</p>
                                                </div>
                                            </div>
                                            {!challenge.completed && (
                                                <span className="text-xs text-[#6b7280]">
                                                    {challenge.progress}/{challenge.total}
                                                </span>
                                            )}
                                        </div>
                                        {!challenge.completed && (
                                            <Progress
                                                value={(challenge.progress / challenge.total) * 100}
                                                className="h-1.5 mt-2"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Holdings & Recent Trades */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Holdings */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Top Holdings</CardTitle>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/simulator/portfolio" className="text-[#0063b3]">
                                        View Portfolio
                                        <RiArrowRightLine className="w-4 h-4 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {holdings.slice(0, 4).map((holding) => (
                                    <div
                                        key={holding.symbol}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f4f4f4] transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">
                                                    {holding.symbol.slice(0, 2)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#222222]">{holding.symbol}</p>
                                                <p className="text-sm text-[#6b7280]">{holding.qty} shares</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-[#222222]">
                                                {new Intl.NumberFormat("en-IN", {
                                                    style: "currency",
                                                    currency: "INR",
                                                    maximumFractionDigits: 0,
                                                }).format(holding.current)}
                                            </p>
                                            <p
                                                className={`text-sm flex items-center justify-end gap-1 ${holding.pnl >= 0 ? "text-[#28a745]" : "text-red-500"
                                                    }`}
                                            >
                                                {holding.pnl >= 0 ? (
                                                    <RiArrowUpLine className="w-3 h-3" />
                                                ) : (
                                                    <RiArrowDownLine className="w-3 h-3" />
                                                )}
                                                {holding.pnlPercent.toFixed(2)}%
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Trades */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Recent Trades</CardTitle>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/simulator/analysis" className="text-[#0063b3]">
                                        View All
                                        <RiArrowRightLine className="w-4 h-4 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentTrades.map((trade) => (
                                    <div
                                        key={trade.id}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f4f4f4] transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${trade.type === "BUY" ? "bg-[#28a745]/10" : "bg-red-500/10"
                                                    }`}
                                            >
                                                {trade.type === "BUY" ? (
                                                    <RiArrowUpLine className="w-5 h-5 text-[#28a745]" />
                                                ) : (
                                                    <RiArrowDownLine className="w-5 h-5 text-red-500" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#222222]">
                                                    {trade.type} {trade.symbol}
                                                </p>
                                                <p className="text-sm text-[#6b7280]">{trade.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-[#222222]">
                                                {trade.qty} @ {trade.price.toFixed(2)}
                                            </p>
                                            <p className="text-sm text-[#6b7280]">
                                                {new Intl.NumberFormat("en-IN", {
                                                    style: "currency",
                                                    currency: "INR",
                                                    maximumFractionDigits: 0,
                                                }).format(trade.total)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Achievements & Recommendations */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Achievements */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Recent Achievements</CardTitle>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/gamification/achievements" className="text-[#0063b3]">
                                        View All
                                        <RiArrowRightLine className="w-4 h-4 ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                                {earnedBadges.map((badge) => (
                                    <div
                                        key={badge.id}
                                        className="p-3 rounded-lg bg-[#f4f4f4] text-center"
                                    >
                                        <div className="w-10 h-10 mx-auto bg-[#0063b3]/10 rounded-full flex items-center justify-center mb-2">
                                            <RiMedalLine className="w-5 h-5 text-[#0063b3]" />
                                        </div>
                                        <p className="text-sm font-medium text-[#222222]">{badge.name}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* AI Recommendations */}
                    <Card className="border-0 shadow-sm lg:col-span-2">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-2">
                                <RiLightbulbLine className="w-5 h-5 text-[#0063b3]" />
                                <CardTitle className="text-lg">AI Recommendations</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="p-4 rounded-lg bg-[#0063b3]/5 border border-[#0063b3]/20">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#0063b3] rounded-lg flex items-center justify-center shrink-0">
                                            <RiLightbulbLine className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Diversification Opportunity</p>
                                            <p className="text-sm text-[#6b7280] mt-1">
                                                Your portfolio is heavily weighted in Banking (31.5%). Consider adding positions
                                                in Healthcare or Consumer sectors to reduce sector-specific risk.
                                            </p>
                                            <Button size="sm" variant="outline" className="mt-3">
                                                Explore Healthcare Stocks
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#28a745]/5 border border-[#28a745]/20">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#28a745] rounded-lg flex items-center justify-center shrink-0">
                                            <RiBookOpenLine className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Course Suggestion</p>
                                            <p className="text-sm text-[#6b7280] mt-1">
                                                Based on your trading patterns, the &quot;Risk Management Fundamentals&quot; course
                                                would help improve your position sizing and reduce drawdowns.
                                            </p>
                                            <Button size="sm" variant="outline" className="mt-3">
                                                Start Course
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
