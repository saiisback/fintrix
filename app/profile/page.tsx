"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiUserLine,
    RiTrophyLine,
    RiMedalLine,
    RiFireLine,
    RiBookOpenLine,
    RiLineChartLine,
    RiStarLine,
    RiEditLine,
} from "react-icons/ri";
import Link from "next/link";
import { currentUser, achievements } from "@/lib/mock-data";

export default function ProfilePage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Profile Header */}
                <Card className="border-0 shadow-sm overflow-hidden">
                    <div className="h-32 bg-gradient-to-r from-[#0063b3] to-[#004080]" />
                    <CardContent className="relative pb-6">
                        <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-16">
                            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                                <AvatarImage src={currentUser.avatar} />
                                <AvatarFallback className="bg-[#0063b3] text-white text-3xl">
                                    {currentUser.name.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 md:pb-2">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-[#222222]">{currentUser.name}</h1>
                                        <p className="text-[#6b7280]">{currentUser.college}</p>
                                        <p className="text-sm text-[#6b7280] mt-1">Joined November 2024</p>
                                    </div>
                                    <Button asChild variant="outline">
                                        <Link href="/settings">
                                            <RiEditLine className="w-4 h-4 mr-2" />
                                            Edit Profile
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 text-center">
                            <RiStarLine className="w-8 h-8 text-[#f59e0b] mx-auto mb-2" />
                            <p className="text-2xl font-bold text-[#222222]">{currentUser.xp.toLocaleString()}</p>
                            <p className="text-sm text-[#6b7280]">Total XP</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 text-center">
                            <RiFireLine className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-[#222222]">{currentUser.streak}</p>
                            <p className="text-sm text-[#6b7280]">Day Streak</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 text-center">
                            <RiTrophyLine className="w-8 h-8 text-[#0063b3] mx-auto mb-2" />
                            <p className="text-2xl font-bold text-[#222222]">#156</p>
                            <p className="text-sm text-[#6b7280]">Global Rank</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 text-center">
                            <RiMedalLine className="w-8 h-8 text-[#28a745] mx-auto mb-2" />
                            <p className="text-2xl font-bold text-[#222222]">5</p>
                            <p className="text-sm text-[#6b7280]">Certificates</p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="achievements">Achievements</TabsTrigger>
                        <TabsTrigger value="activity">Activity</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Learning Progress */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <RiBookOpenLine className="w-5 h-5 text-[#0063b3]" />
                                        Learning Progress
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between text-sm mb-2">
                                            <span className="text-[#6b7280]">Overall Progress</span>
                                            <span className="font-medium text-[#222222]">{currentUser.learningProgress}%</span>
                                        </div>
                                        <Progress value={currentUser.learningProgress} className="h-3" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#222222]">5</p>
                                            <p className="text-sm text-[#6b7280]">Courses Completed</p>
                                        </div>
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#222222]">3</p>
                                            <p className="text-sm text-[#6b7280]">In Progress</p>
                                        </div>
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#222222]">24</p>
                                            <p className="text-sm text-[#6b7280]">Quizzes Passed</p>
                                        </div>
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#222222]">82%</p>
                                            <p className="text-sm text-[#6b7280]">Avg Score</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Trading Stats */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <RiLineChartLine className="w-5 h-5 text-[#28a745]" />
                                        Trading Stats
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-[#28a745]/5 rounded-lg">
                                        <span className="text-[#6b7280]">Total P&L</span>
                                        <span className="text-xl font-bold text-[#28a745]">
                                            +{currentUser.totalProfitLossPercent}%
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#222222]">156</p>
                                            <p className="text-sm text-[#6b7280]">Total Trades</p>
                                        </div>
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#28a745]">68%</p>
                                            <p className="text-sm text-[#6b7280]">Win Rate</p>
                                        </div>
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#222222]">₹12.4L</p>
                                            <p className="text-sm text-[#6b7280]">Portfolio Value</p>
                                        </div>
                                        <div className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-xl font-bold text-[#222222]">5</p>
                                            <p className="text-sm text-[#6b7280]">Holdings</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="achievements">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Achievements</CardTitle>
                                <CardDescription>Badges and accomplishments you&apos;ve earned</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {achievements.map((achievement) => (
                                        <div
                                            key={achievement.id}
                                            className={`p-4 rounded-lg text-center border ${achievement.earned
                                                    ? "border-[#28a745]/30 bg-[#28a745]/5"
                                                    : "border-[#e5e7eb] opacity-50"
                                                }`}
                                        >
                                            <div className="text-3xl mb-2">{achievement.icon}</div>
                                            <p className="font-medium text-[#222222] text-sm">{achievement.title}</p>
                                            {achievement.earned && (
                                                <Badge className="mt-2 bg-[#28a745] text-xs">Earned</Badge>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="activity">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        { action: "Completed a quiz", detail: "Technical Indicators Quiz - Score: 92%", time: "2 hours ago" },
                                        { action: "Executed a trade", detail: "Bought 10 shares of RELIANCE @ ₹2,845", time: "5 hours ago" },
                                        { action: "Earned badge", detail: "Week Warrior - 7 day learning streak", time: "1 day ago" },
                                        { action: "Completed course", detail: "Candlestick Patterns Mastery", time: "2 days ago" },
                                        { action: "Reached milestone", detail: "4,000 XP achieved!", time: "3 days ago" },
                                    ].map((activity, idx) => (
                                        <div key={idx} className="flex items-start gap-4 pb-4 border-b border-[#e5e7eb] last:border-0">
                                            <div className="w-2 h-2 bg-[#0063b3] rounded-full mt-2" />
                                            <div className="flex-1">
                                                <p className="font-medium text-[#222222]">{activity.action}</p>
                                                <p className="text-sm text-[#6b7280]">{activity.detail}</p>
                                                <p className="text-xs text-[#6b7280] mt-1">{activity.time}</p>
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
