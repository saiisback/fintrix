"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    RiTrophyLine,
    RiMedalLine,
    RiGroupLine,
    RiGlobalLine,
    RiProfileLine,
    RiArrowUpLine,
    RiArrowDownLine,
} from "react-icons/ri";
import { leaderboard, currentUser } from "@/lib/mock-data";

const collegeLeaderboard = [
    { rank: 1, name: "Arjun Sharma", xp: 4520, returns: 15.68, avatar: "/placeholder-user.jpg", isCurrentUser: true },
    { rank: 2, name: "Rohit Gupta", xp: 4120, returns: 14.2, avatar: "/placeholder-user.jpg" },
    { rank: 3, name: "Priya Singh", xp: 3890, returns: 12.8, avatar: "/placeholder-user.jpg" },
    { rank: 4, name: "Amit Kumar", xp: 3560, returns: 11.5, avatar: "/placeholder-user.jpg" },
    { rank: 5, name: "Neha Patel", xp: 3240, returns: 10.2, avatar: "/placeholder-user.jpg" },
];

const friendsLeaderboard = [
    { rank: 1, name: "Vikram Reddy", xp: 6520, returns: 18.5, avatar: "/placeholder-user.jpg" },
    { rank: 2, name: "Arjun Sharma", xp: 4520, returns: 15.68, avatar: "/placeholder-user.jpg", isCurrentUser: true },
    { rank: 3, name: "Rahul Menon", xp: 4120, returns: 14.2, avatar: "/placeholder-user.jpg" },
    { rank: 4, name: "Sneha Iyer", xp: 3890, returns: 12.8, avatar: "/placeholder-user.jpg" },
];

export default function LeaderboardsPage() {
    const [activeTab, setActiveTab] = useState("global");

    const getLeaderboardData = () => {
        switch (activeTab) {
            case "college":
                return collegeLeaderboard;
            case "friends":
                return friendsLeaderboard;
            default:
                return leaderboard;
        }
    };

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Leaderboards</h1>
                    <p className="text-[#6b7280] mt-1">See how you rank against other traders</p>
                </div>

                {/* User Rank Card */}
                <Card className="border-0 shadow-sm bg-gradient-to-r from-[#0063b3] to-[#004080] text-white">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <Avatar className="w-16 h-16 border-2 border-white">
                                    <AvatarImage src={currentUser.avatar} />
                                    <AvatarFallback className="bg-white text-[#0063b3] text-xl font-bold">
                                        {currentUser.name.split(" ").map((n) => n[0]).join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-xl font-bold">{currentUser.name}</h3>
                                    <p className="opacity-80">{currentUser.college}</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <p className="text-3xl font-bold">#156</p>
                                    <p className="text-sm opacity-80">Global Rank</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">{currentUser.xp.toLocaleString()}</p>
                                    <p className="text-sm opacity-80">Total XP</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">+{currentUser.totalProfitLossPercent}%</p>
                                    <p className="text-sm opacity-80">Returns</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="global" className="gap-2">
                            <RiGlobalLine className="w-4 h-4" />
                            Global
                        </TabsTrigger>
                        <TabsTrigger value="college" className="gap-2">
                            <RiProfileLine className="w-4 h-4" />
                            College
                        </TabsTrigger>
                        <TabsTrigger value="friends" className="gap-2">
                            <RiGroupLine className="w-4 h-4" />
                            Friends
                        </TabsTrigger>
                    </TabsList>

                    {["global", "college", "friends"].map((tab) => (
                        <TabsContent key={tab} value={tab}>
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="capitalize">{tab} Leaderboard</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {/* Top 3 Podium */}
                                    <div className="flex items-end justify-center gap-4 mb-8">
                                        {getLeaderboardData()
                                            .slice(0, 3)
                                            .sort((a, b) => {
                                                const order = [2, 1, 3];
                                                return order.indexOf(a.rank) - order.indexOf(b.rank);
                                            })
                                            .map((user) => (
                                                <div
                                                    key={user.rank}
                                                    className={`flex flex-col items-center ${user.rank === 1 ? "order-2" : user.rank === 2 ? "order-1" : "order-3"
                                                        }`}
                                                >
                                                    <Avatar
                                                        className={`border-4 ${user.rank === 1
                                                                ? "w-20 h-20 border-yellow-500"
                                                                : user.rank === 2
                                                                    ? "w-16 h-16 border-gray-400"
                                                                    : "w-16 h-16 border-orange-400"
                                                            }`}
                                                    >
                                                        <AvatarImage src={user.avatar} />
                                                        <AvatarFallback className="bg-[#0063b3] text-white">
                                                            {user.name.split(" ").map((n) => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div
                                                        className={`mt-2 px-4 py-2 rounded-lg text-center ${user.rank === 1
                                                                ? "bg-yellow-500/10"
                                                                : user.rank === 2
                                                                    ? "bg-gray-100"
                                                                    : "bg-orange-500/10"
                                                            }`}
                                                    >
                                                        <RiMedalLine
                                                            className={`w-6 h-6 mx-auto ${user.rank === 1
                                                                    ? "text-yellow-500"
                                                                    : user.rank === 2
                                                                        ? "text-gray-400"
                                                                        : "text-orange-400"
                                                                }`}
                                                        />
                                                        <p className="font-semibold text-[#222222] mt-1">{user.name.split(" ")[0]}</p>
                                                        <p className="text-sm text-[#6b7280]">{user.xp.toLocaleString()} XP</p>
                                                    </div>
                                                    <div
                                                        className={`w-20 rounded-t-lg flex items-center justify-center font-bold text-white ${user.rank === 1
                                                                ? "h-24 bg-yellow-500"
                                                                : user.rank === 2
                                                                    ? "h-16 bg-gray-400"
                                                                    : "h-12 bg-orange-400"
                                                            }`}
                                                    >
                                                        #{user.rank}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>

                                    {/* Full List */}
                                    <div className="space-y-2">
                                        {getLeaderboardData().map((user) => (
                                            <div
                                                key={user.rank}
                                                className={`flex items-center justify-between p-4 rounded-lg ${user.isCurrentUser ? "bg-[#0063b3]/5 border border-[#0063b3]/30" : "hover:bg-[#f4f4f4]"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span
                                                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${user.rank <= 3
                                                                ? user.rank === 1
                                                                    ? "bg-yellow-500 text-white"
                                                                    : user.rank === 2
                                                                        ? "bg-gray-400 text-white"
                                                                        : "bg-orange-400 text-white"
                                                                : "bg-[#f4f4f4] text-[#222222]"
                                                            }`}
                                                    >
                                                        {user.rank}
                                                    </span>
                                                    <Avatar>
                                                        <AvatarImage src={user.avatar} />
                                                        <AvatarFallback className="bg-[#0063b3] text-white">
                                                            {user.name.split(" ").map((n) => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium text-[#222222]">
                                                            {user.name}
                                                            {user.isCurrentUser && (
                                                                <Badge className="ml-2 bg-[#0063b3]">You</Badge>
                                                            )}
                                                        </p>
                                                        <p className="text-sm text-[#6b7280]">{user.college}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-8">
                                                    <div className="text-right">
                                                        <p className="font-bold text-[#222222]">{user.xp.toLocaleString()}</p>
                                                        <p className="text-xs text-[#6b7280]">XP</p>
                                                    </div>
                                                    <div className="text-right w-20">
                                                        <p className="font-bold text-[#28a745]">+{user.returns}%</p>
                                                        <p className="text-xs text-[#6b7280]">Returns</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </AppLayout>
    );
}
