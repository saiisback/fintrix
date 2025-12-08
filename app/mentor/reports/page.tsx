"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    RiLightbulbLine,
    RiLineChartLine,
    RiAlertLine,
    RiCheckLine,
    RiArrowUpLine,
    RiArrowDownLine,
    RiTrophyLine,
    RiBookOpenLine,
    RiTimeLine,
} from "react-icons/ri";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const weeklyProgress = [
    { week: "W1", score: 62 },
    { week: "W2", score: 68 },
    { week: "W3", score: 71 },
    { week: "W4", score: 75 },
    { week: "W5", score: 78 },
    { week: "W6", score: 82 },
];

const strengthAreas = [
    { skill: "Fundamental Analysis", score: 85, trend: "up" },
    { skill: "Risk Management", score: 78, trend: "up" },
    { skill: "Technical Chart Reading", score: 72, trend: "stable" },
];

const improvementAreas = [
    { skill: "Options Greeks", score: 45, suggestion: "Complete the 'Options Mastery' course" },
    { skill: "Position Sizing", score: 52, suggestion: "Practice with the position size calculator" },
    { skill: "Stop Loss Strategy", score: 58, suggestion: "Review the 'Risk Management' module" },
];

const recommendations = [
    {
        type: "course",
        title: "Advanced Options Trading",
        reason: "Addresses your weak areas in options",
        priority: "High",
    },
    {
        type: "practice",
        title: "Position Size Calculator",
        reason: "Help improve position sizing skills",
        priority: "Medium",
    },
    {
        type: "quiz",
        title: "Risk Management Quiz",
        reason: "Test and reinforce your knowledge",
        priority: "Medium",
    },
];

export default function ImprovementReportPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Improvement Report</h1>
                        <p className="text-[#6b7280] mt-1">Personalized insights to accelerate your growth</p>
                    </div>
                    <Badge className="bg-[#0063b3] self-start">Updated Weekly</Badge>
                </div>

                {/* Overall Progress */}
                <Card className="border-0 shadow-sm bg-gradient-to-r from-[#0063b3] to-[#004080] text-white">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h2 className="text-lg opacity-80">Overall Skill Score</h2>
                                <p className="text-4xl font-bold mt-1">82/100</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <RiArrowUpLine className="w-4 h-4" />
                                    <span className="text-sm">+7 points from last week</span>
                                </div>
                            </div>
                            <div className="flex-1 max-w-md">
                                <div className="h-32">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={weeklyProgress}>
                                            <Line type="monotone" dataKey="score" stroke="#fff" strokeWidth={3} dot={{ fill: "#fff" }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <p className="text-sm opacity-70 text-center mt-2">6-Week Progress</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Strengths and Improvements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-[#28a745]">
                                <RiTrophyLine className="w-5 h-5" />
                                Your Strengths
                            </CardTitle>
                            <CardDescription>Areas where you excel</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {strengthAreas.map((area) => (
                                <div key={area.skill} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#222222] font-medium">{area.skill}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-[#28a745]">{area.score}%</span>
                                            {area.trend === "up" && <RiArrowUpLine className="w-4 h-4 text-[#28a745]" />}
                                        </div>
                                    </div>
                                    <Progress value={area.score} className="h-2" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-[#f59e0b]">
                                <RiLightbulbLine className="w-5 h-5" />
                                Areas to Improve
                            </CardTitle>
                            <CardDescription>Focus on these to level up</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {improvementAreas.map((area) => (
                                <div key={area.skill} className="p-3 bg-[#f4f4f4] rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[#222222] font-medium">{area.skill}</span>
                                        <span className="font-bold text-[#f59e0b]">{area.score}%</span>
                                    </div>
                                    <Progress value={area.score} className="h-2 mb-2" />
                                    <p className="text-sm text-[#6b7280]">💡 {area.suggestion}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Recommendations */}
                <Card className="border-0 shadow-sm">
                    <CardHeader>
                        <CardTitle>Personalized Recommendations</CardTitle>
                        <CardDescription>Actions tailored to your learning needs</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recommendations.map((rec, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb] hover:border-[#0063b3]/30 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${rec.type === "course"
                                                    ? "bg-[#0063b3]/10"
                                                    : rec.type === "practice"
                                                        ? "bg-[#28a745]/10"
                                                        : "bg-purple-500/10"
                                                }`}
                                        >
                                            {rec.type === "course" && <RiBookOpenLine className="w-5 h-5 text-[#0063b3]" />}
                                            {rec.type === "practice" && <RiLineChartLine className="w-5 h-5 text-[#28a745]" />}
                                            {rec.type === "quiz" && <RiLightbulbLine className="w-5 h-5 text-purple-500" />}
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">{rec.title}</p>
                                            <p className="text-sm text-[#6b7280]">{rec.reason}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge
                                            className={`${rec.priority === "High" ? "bg-red-500" : "bg-[#f59e0b]"
                                                }`}
                                        >
                                            {rec.priority}
                                        </Badge>
                                        <Button size="sm" className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                            Start
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Weekly Insights */}
                <Card className="border-0 shadow-sm">
                    <CardHeader>
                        <CardTitle>Weekly Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-[#28a745]/5 rounded-lg border border-[#28a745]/20">
                                <RiCheckLine className="w-6 h-6 text-[#28a745] mb-2" />
                                <p className="font-medium text-[#222222]">3 lessons completed</p>
                                <p className="text-sm text-[#6b7280]">Keep up the momentum!</p>
                            </div>
                            <div className="p-4 bg-[#0063b3]/5 rounded-lg border border-[#0063b3]/20">
                                <RiTimeLine className="w-6 h-6 text-[#0063b3] mb-2" />
                                <p className="font-medium text-[#222222]">4.5 hours learned</p>
                                <p className="text-sm text-[#6b7280]">Average: 45 min/day</p>
                            </div>
                            <div className="p-4 bg-[#f59e0b]/5 rounded-lg border border-[#f59e0b]/20">
                                <RiAlertLine className="w-6 h-6 text-[#f59e0b] mb-2" />
                                <p className="font-medium text-[#222222]">2 quizzes need retry</p>
                                <p className="text-sm text-[#6b7280]">Review before retaking</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
