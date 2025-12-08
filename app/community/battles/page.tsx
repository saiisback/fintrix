"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiSwordLine,
    RiTimeLine,
    RiTrophyLine,
    RiGroupLine,
    RiArrowRightLine,
    RiLockLine,
    RiMedalLine,
} from "react-icons/ri";

const upcomingBattles = [
    {
        id: 1,
        title: "Weekly Stock Showdown",
        participants: 124,
        prize: "₹5,000 + Premium Badge",
        startTime: "Starts in 2 hours",
        type: "Stock Trading",
    },
    {
        id: 2,
        title: "Options Mastery Challenge",
        participants: 56,
        prize: "₹10,000 + 1000 XP",
        startTime: "Starts tomorrow",
        type: "Options",
    },
    {
        id: 3,
        title: "College League Finals",
        participants: 280,
        prize: "₹25,000 + Trophy",
        startTime: "Dec 15, 2024",
        type: "Multi-Round",
    },
];

const activeBattles = [
    {
        id: 1,
        title: "Day Trading Sprint",
        myRank: 12,
        totalParticipants: 89,
        myReturns: 3.45,
        topReturns: 8.12,
        timeRemaining: "2h 34m",
    },
];

const pastBattles = [
    { id: 1, title: "Weekly Challenge #45", rank: 5, participants: 156, prize: "500 XP", date: "Dec 5, 2024" },
    { id: 2, title: "Intraday Masters", rank: 23, participants: 234, prize: "None", date: "Dec 3, 2024" },
    { id: 3, title: "Swing Trade Battle", rank: 2, participants: 89, prize: "₹2,000", date: "Nov 28, 2024" },
];

const leaderboard = [
    { rank: 1, name: "TraderPro_87", returns: 8.12, avatar: "" },
    { rank: 2, name: "MarketGuru", returns: 6.85, avatar: "" },
    { rank: 3, name: "BullishMind", returns: 5.92, avatar: "" },
    { rank: 12, name: "You", returns: 3.45, avatar: "", isCurrentUser: true },
];

export default function TradingBattlesPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Trading Battles</h1>
                    <p className="text-[#6b7280] mt-1">Compete with other traders and win prizes</p>
                </div>

                <Tabs defaultValue="upcoming" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                        <TabsTrigger value="active">Active ({activeBattles.length})</TabsTrigger>
                        <TabsTrigger value="past">Past Battles</TabsTrigger>
                    </TabsList>

                    <TabsContent value="upcoming">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {upcomingBattles.map((battle) => (
                                <Card key={battle.id} className="border-0 shadow-sm">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <Badge className="bg-purple-600">{battle.type}</Badge>
                                            <div className="flex items-center gap-1 text-sm text-[#6b7280]">
                                                <RiGroupLine className="w-4 h-4" />
                                                <span>{battle.participants}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-[#222222] text-lg mb-2">{battle.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-[#0063b3] mb-4">
                                            <RiTimeLine className="w-4 h-4" />
                                            <span>{battle.startTime}</span>
                                        </div>
                                        <div className="p-3 bg-[#f59e0b]/10 rounded-lg mb-4">
                                            <p className="text-sm text-[#6b7280]">Prize Pool</p>
                                            <p className="font-bold text-[#f59e0b]">{battle.prize}</p>
                                        </div>
                                        <Button className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90">
                                            Join Battle
                                            <RiArrowRightLine className="w-4 h-4 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="active">
                        {activeBattles.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <Card className="border-0 shadow-sm lg:col-span-2">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle>{activeBattles[0].title}</CardTitle>
                                            <Badge className="bg-[#28a745]">Live</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center p-4 bg-[#f4f4f4] rounded-lg">
                                                <p className="text-2xl font-bold text-[#222222]">#{activeBattles[0].myRank}</p>
                                                <p className="text-sm text-[#6b7280]">Your Rank</p>
                                            </div>
                                            <div className="text-center p-4 bg-[#28a745]/10 rounded-lg">
                                                <p className="text-2xl font-bold text-[#28a745]">+{activeBattles[0].myReturns}%</p>
                                                <p className="text-sm text-[#6b7280]">Your Returns</p>
                                            </div>
                                            <div className="text-center p-4 bg-[#f4f4f4] rounded-lg">
                                                <p className="text-2xl font-bold text-[#222222]">{activeBattles[0].timeRemaining}</p>
                                                <p className="text-sm text-[#6b7280]">Time Left</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Button className="flex-1 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                Go to Trading
                                            </Button>
                                            <Button variant="outline" className="flex-1">
                                                View Leaderboard
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Live Leaderboard</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {leaderboard.map((user) => (
                                                <div
                                                    key={user.rank}
                                                    className={`flex items-center gap-3 p-2 rounded-lg ${user.isCurrentUser ? "bg-[#0063b3]/5" : ""
                                                        }`}
                                                >
                                                    <span
                                                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${user.rank <= 3
                                                                ? "bg-[#f59e0b] text-white"
                                                                : "bg-[#f4f4f4] text-[#222222]"
                                                            }`}
                                                    >
                                                        {user.rank}
                                                    </span>
                                                    <Avatar className="w-8 h-8">
                                                        <AvatarFallback className="bg-[#0063b3] text-white text-xs">
                                                            {user.name.slice(0, 2)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-[#222222]">
                                                            {user.name}
                                                            {user.isCurrentUser && <Badge className="ml-2 bg-[#0063b3]">You</Badge>}
                                                        </p>
                                                    </div>
                                                    <span className="text-sm font-bold text-[#28a745]">+{user.returns}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ) : (
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-12 text-center">
                                    <RiSwordLine className="w-16 h-16 text-[#6b7280]/30 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-[#222222]">No active battles</h3>
                                    <p className="text-[#6b7280] mt-1">Join an upcoming battle to compete</p>
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="past">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Battle History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {pastBattles.map((battle) => (
                                        <div
                                            key={battle.id}
                                            className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb]"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${battle.rank <= 3 ? "bg-[#f59e0b]/10" : "bg-[#f4f4f4]"
                                                        }`}
                                                >
                                                    {battle.rank <= 3 ? (
                                                        <RiTrophyLine className="w-6 h-6 text-[#f59e0b]" />
                                                    ) : (
                                                        <RiMedalLine className="w-6 h-6 text-[#6b7280]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-[#222222]">{battle.title}</p>
                                                    <p className="text-sm text-[#6b7280]">{battle.date}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-[#222222]">Rank #{battle.rank}</p>
                                                <p className="text-sm text-[#6b7280]">of {battle.participants} participants</p>
                                                {battle.prize !== "None" && (
                                                    <Badge className="mt-1 bg-[#28a745]">{battle.prize}</Badge>
                                                )}
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
