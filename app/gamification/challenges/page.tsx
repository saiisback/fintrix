"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
    RiFireLine,
    RiTrophyLine,
    RiTimeLine,
    RiGroupLine,
    RiArrowRightLine,
    RiCheckLine,
    RiStarLine,
} from "react-icons/ri";
import { dailyChallenges, weeklyChallenges } from "@/lib/mock-data";

export default function ChallengesPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Challenges</h1>
                        <p className="text-[#6b7280] mt-1">Complete challenges to earn XP and rewards</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-3 flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                                    <RiFireLine className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280]">Current Streak</p>
                                    <p className="font-bold text-[#222222]">12 Days</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Tabs defaultValue="daily" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="daily">Daily Missions</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly Competitions</TabsTrigger>
                    </TabsList>

                    <TabsContent value="daily">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-4">
                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle>Today&apos;s Missions</CardTitle>
                                            <Badge className="bg-[#0063b3]">
                                                {dailyChallenges.filter((c) => c.completed).length}/{dailyChallenges.length} Complete
                                            </Badge>
                                        </div>
                                        <CardDescription>Complete all missions to earn bonus XP</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {dailyChallenges.map((challenge) => (
                                                <div
                                                    key={challenge.id}
                                                    className={`p-4 rounded-lg border ${challenge.completed
                                                            ? "bg-[#28a745]/5 border-[#28a745]/30"
                                                            : "border-[#e5e7eb]"
                                                        }`}
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div className="flex items-start gap-4">
                                                            <div
                                                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${challenge.completed
                                                                        ? "bg-[#28a745]"
                                                                        : "bg-[#0063b3]/10"
                                                                    }`}
                                                            >
                                                                {challenge.completed ? (
                                                                    <RiCheckLine className="w-5 h-5 text-white" />
                                                                ) : challenge.type === "learning" ? (
                                                                    <RiStarLine className="w-5 h-5 text-[#0063b3]" />
                                                                ) : challenge.type === "trading" ? (
                                                                    <RiTrophyLine className="w-5 h-5 text-[#0063b3]" />
                                                                ) : (
                                                                    <RiFireLine className="w-5 h-5 text-[#0063b3]" />
                                                                )}
                                                            </div>
                                                            <div>
                                                                <h4
                                                                    className={`font-medium ${challenge.completed ? "text-[#28a745]" : "text-[#222222]"
                                                                        }`}
                                                                >
                                                                    {challenge.title}
                                                                </h4>
                                                                <p className="text-sm text-[#6b7280]">+{challenge.reward} XP</p>
                                                                {!challenge.completed && (
                                                                    <div className="mt-2">
                                                                        <Progress
                                                                            value={(challenge.progress / challenge.total) * 100}
                                                                            className="h-2 w-48"
                                                                        />
                                                                        <p className="text-xs text-[#6b7280] mt-1">
                                                                            {challenge.progress} / {challenge.total}
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {!challenge.completed && (
                                                            <Button size="sm" className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                                Go
                                                                <RiArrowRightLine className="w-4 h-4 ml-1" />
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <Card className="border-0 shadow-sm bg-gradient-to-br from-[#0063b3] to-[#004080] text-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <RiTrophyLine className="w-8 h-8" />
                                            <div>
                                                <p className="text-sm opacity-80">Daily Bonus</p>
                                                <p className="text-2xl font-bold">+200 XP</p>
                                            </div>
                                        </div>
                                        <p className="text-sm opacity-80 mb-4">
                                            Complete all daily missions to earn a bonus reward!
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Progress
                                                value={(dailyChallenges.filter((c) => c.completed).length / dailyChallenges.length) * 100}
                                                className="h-2 flex-1 bg-white/20"
                                            />
                                            <span className="text-sm font-medium">
                                                {dailyChallenges.filter((c) => c.completed).length}/{dailyChallenges.length}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Streak Rewards</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {[7, 14, 30, 60, 100].map((days) => (
                                                <div
                                                    key={days}
                                                    className={`flex items-center justify-between p-3 rounded-lg ${12 >= days ? "bg-[#28a745]/5" : "bg-[#f4f4f4]"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <RiFireLine
                                                            className={`w-5 h-5 ${12 >= days ? "text-[#28a745]" : "text-[#6b7280]"}`}
                                                        />
                                                        <span className={12 >= days ? "text-[#222222]" : "text-[#6b7280]"}>
                                                            {days} Day Streak
                                                        </span>
                                                    </div>
                                                    <Badge variant={12 >= days ? "default" : "secondary"} className={12 >= days ? "bg-[#28a745]" : ""}>
                                                        {days * 10} XP
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="weekly">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {weeklyChallenges.map((challenge) => (
                                <Card key={challenge.id} className="border-0 shadow-sm">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <Badge className="bg-purple-600 text-white">Weekly</Badge>
                                            <div className="flex items-center gap-1 text-sm text-[#6b7280]">
                                                <RiTimeLine className="w-4 h-4" />
                                                <span>Ends in {challenge.endsIn}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-[#222222] mb-2">{challenge.title}</h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <RiTrophyLine className="w-5 h-5 text-[#f59e0b]" />
                                            <span className="font-bold text-[#222222]">+{challenge.reward} XP</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#6b7280]">Progress</span>
                                                <span className="font-medium text-[#222222]">
                                                    {challenge.progress} / {challenge.total}
                                                    {typeof challenge.progress === "number" && challenge.total === 100 ? "%" : ""}
                                                </span>
                                            </div>
                                            <Progress
                                                value={(challenge.progress / challenge.total) * 100}
                                                className="h-2"
                                            />
                                        </div>
                                        <Button className="w-full mt-4 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
