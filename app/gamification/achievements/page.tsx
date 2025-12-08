"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiTrophyLine,
    RiMedalLine,
    RiFireLine,
    RiStarLine,
    RiLockLine,
    RiCheckLine,
} from "react-icons/ri";
import { achievements } from "@/lib/mock-data";

const allBadges = [
    { id: "first_trade", name: "First Trade", description: "Complete your first trade", category: "Trading", earned: true },
    { id: "week_streak", name: "Week Warrior", description: "Maintain a 7-day learning streak", category: "Learning", earned: true },
    { id: "quiz_master", name: "Quiz Master", description: "Score 90%+ on 5 quizzes", category: "Learning", earned: true },
    { id: "diversifier", name: "Diversifier", description: "Hold stocks from 5 different sectors", category: "Trading", earned: true },
    { id: "profit_hunter", name: "Profit Hunter", description: "Earn 10% returns on portfolio", category: "Trading", earned: true },
    { id: "course_complete", name: "Scholar", description: "Complete 5 courses", category: "Learning", progress: 3, total: 5, earned: false },
    { id: "month_streak", name: "Dedicated Learner", description: "30-day learning streak", category: "Learning", progress: 12, total: 30, earned: false },
    { id: "community_helper", name: "Helper", description: "Answer 10 community questions", category: "Community", progress: 7, total: 10, earned: false },
    { id: "market_guru", name: "Market Guru", description: "Predict 20 market movements correctly", category: "Trading", progress: 8, total: 20, earned: false },
    { id: "mentor_favorite", name: "Mentor Favorite", description: "Receive 10 mentor endorsements", category: "Community", progress: 3, total: 10, earned: false },
    { id: "trading_pro", name: "Trading Pro", description: "Execute 100 trades", category: "Trading", progress: 45, total: 100, earned: false },
    { id: "knowledge_seeker", name: "Knowledge Seeker", description: "Complete all beginner courses", category: "Learning", progress: 2, total: 3, earned: false },
];

export default function AchievementsPage() {
    const earnedBadges = allBadges.filter((b) => b.earned);
    const inProgressBadges = allBadges.filter((b) => !b.earned);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Achievements</h1>
                    <p className="text-[#6b7280] mt-1">Track your badges and accomplishments</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center">
                                <RiTrophyLine className="w-6 h-6 text-[#f59e0b]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Total Badges</p>
                                <p className="text-2xl font-bold text-[#222222]">{earnedBadges.length}/{allBadges.length}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                <RiFireLine className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Current Streak</p>
                                <p className="text-2xl font-bold text-[#222222]">12 Days</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                <RiStarLine className="w-6 h-6 text-[#0063b3]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">XP from Badges</p>
                                <p className="text-2xl font-bold text-[#222222]">2,500</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#28a745]/10 rounded-xl flex items-center justify-center">
                                <RiMedalLine className="w-6 h-6 text-[#28a745]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Rank</p>
                                <p className="text-2xl font-bold text-[#222222]">Silver</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="earned" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="earned">Earned ({earnedBadges.length})</TabsTrigger>
                        <TabsTrigger value="progress">In Progress ({inProgressBadges.length})</TabsTrigger>
                        <TabsTrigger value="streaks">Streaks</TabsTrigger>
                    </TabsList>

                    <TabsContent value="earned">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {earnedBadges.map((badge) => (
                                <Card key={badge.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <RiTrophyLine className="w-8 h-8 text-[#f59e0b]" />
                                        </div>
                                        <h4 className="font-semibold text-[#222222]">{badge.name}</h4>
                                        <p className="text-sm text-[#6b7280] mt-1">{badge.description}</p>
                                        <Badge className="mt-3 bg-[#28a745]">
                                            <RiCheckLine className="w-3 h-3 mr-1" />
                                            Earned
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="progress">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {inProgressBadges.map((badge) => (
                                <Card key={badge.id} className="border-0 shadow-sm">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 bg-[#6b7280]/10 rounded-full flex items-center justify-center shrink-0">
                                                <RiLockLine className="w-7 h-7 text-[#6b7280]" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-[#222222]">{badge.name}</h4>
                                                <p className="text-sm text-[#6b7280]">{badge.description}</p>
                                                <div className="mt-3">
                                                    <div className="flex items-center justify-between text-sm mb-1">
                                                        <span className="text-[#6b7280]">Progress</span>
                                                        <span className="font-medium text-[#222222]">
                                                            {badge.progress} / {badge.total}
                                                        </span>
                                                    </div>
                                                    <Progress
                                                        value={((badge.progress || 0) / (badge.total || 1)) * 100}
                                                        className="h-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="streaks">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Streak History</CardTitle>
                                <CardDescription>Your learning consistency over time</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {/* Current Streak */}
                                    <div className="p-6 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                                <RiFireLine className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#6b7280]">Current Streak</p>
                                                <p className="text-3xl font-bold text-[#222222]">12 Days</p>
                                                <p className="text-sm text-orange-500">Keep going! 18 more days to beat your record</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 bg-[#f4f4f4] rounded-lg text-center">
                                            <p className="text-2xl font-bold text-[#222222]">30</p>
                                            <p className="text-sm text-[#6b7280]">Longest Streak</p>
                                        </div>
                                        <div className="p-4 bg-[#f4f4f4] rounded-lg text-center">
                                            <p className="text-2xl font-bold text-[#222222]">156</p>
                                            <p className="text-sm text-[#6b7280]">Total Active Days</p>
                                        </div>
                                        <div className="p-4 bg-[#f4f4f4] rounded-lg text-center">
                                            <p className="text-2xl font-bold text-[#222222]">78%</p>
                                            <p className="text-sm text-[#6b7280]">Consistency Rate</p>
                                        </div>
                                        <div className="p-4 bg-[#f4f4f4] rounded-lg text-center">
                                            <p className="text-2xl font-bold text-[#222222]">5</p>
                                            <p className="text-sm text-[#6b7280]">Streak Freezes Left</p>
                                        </div>
                                    </div>

                                    {/* Weekly View */}
                                    <div>
                                        <h4 className="font-medium text-[#222222] mb-3">This Week</h4>
                                        <div className="flex gap-2">
                                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
                                                <div key={day} className="flex-1 text-center">
                                                    <div
                                                        className={`w-full aspect-square rounded-lg flex items-center justify-center ${idx < 5
                                                                ? "bg-[#28a745]"
                                                                : idx === 5
                                                                    ? "bg-[#0063b3]"
                                                                    : "bg-[#e5e7eb]"
                                                            }`}
                                                    >
                                                        {idx < 6 && <RiCheckLine className="w-5 h-5 text-white" />}
                                                    </div>
                                                    <p className="text-xs text-[#6b7280] mt-1">{day}</p>
                                                </div>
                                            ))}
                                        </div>
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
