"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
    RiQuestionLine,
    RiTimeLine,
    RiTrophyLine,
    RiPlayCircleLine,
    RiCheckLine,
    RiLockLine,
    RiStarLine,
    RiRobot2Line,
} from "react-icons/ri";
import Link from "next/link";
import { quizzes } from "@/lib/mock-data";

const stageTests = [
    { id: 1, title: "Beginner Stage Test", questions: 50, duration: "60 mins", unlocked: true, completed: true, score: 85 },
    { id: 2, title: "Intermediate Stage Test", questions: 75, duration: "90 mins", unlocked: true, completed: false, score: null },
    { id: 3, title: "Advanced Stage Test", questions: 100, duration: "120 mins", unlocked: false, completed: false, score: null },
    { id: 4, title: "Expert Stage Test", questions: 150, duration: "180 mins", unlocked: false, completed: false, score: null },
];

export default function AssessmentsPage() {
    const [activeTab, setActiveTab] = useState("quizzes");

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Assessments</h1>
                        <p className="text-[#6b7280] mt-1">Test your knowledge and earn certificates</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-3 flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#28a745]/10 rounded-lg flex items-center justify-center">
                                    <RiTrophyLine className="w-5 h-5 text-[#28a745]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280]">Quizzes Passed</p>
                                    <p className="font-bold text-[#222222]">24 / 32</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">Quizzes Completed</p>
                            <p className="text-2xl font-bold text-[#222222]">24</p>
                            <Progress value={75} className="h-2 mt-2" />
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">Average Score</p>
                            <p className="text-2xl font-bold text-[#28a745]">82%</p>
                            <p className="text-xs text-[#6b7280] mt-1">Top 15% of learners</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">XP from Quizzes</p>
                            <p className="text-2xl font-bold text-[#222222]">1,850</p>
                            <p className="text-xs text-[#6b7280] mt-1">+350 this week</p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <p className="text-sm text-[#6b7280]">Certificates Earned</p>
                            <p className="text-2xl font-bold text-[#222222]">5</p>
                            <p className="text-xs text-[#6b7280] mt-1">2 in progress</p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="quizzes">Unit Quizzes</TabsTrigger>
                        <TabsTrigger value="ai-quiz">AI Quiz</TabsTrigger>
                        <TabsTrigger value="stage-tests">Stage Tests</TabsTrigger>
                    </TabsList>

                    <TabsContent value="quizzes">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {quizzes.map((quiz) => (
                                <Card key={quiz.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                                <RiQuestionLine className="w-6 h-6 text-[#0063b3]" />
                                            </div>
                                            <Badge
                                                className={`${quiz.difficulty === "Easy"
                                                        ? "bg-[#28a745]"
                                                        : quiz.difficulty === "Medium"
                                                            ? "bg-[#f59e0b]"
                                                            : "bg-red-500"
                                                    } text-white`}
                                            >
                                                {quiz.difficulty}
                                            </Badge>
                                        </div>
                                        <h3 className="font-semibold text-[#222222] mb-1">{quiz.title}</h3>
                                        <p className="text-sm text-[#6b7280] mb-4">{quiz.course}</p>

                                        <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-4">
                                            <div className="flex items-center gap-1">
                                                <RiQuestionLine className="w-4 h-4" />
                                                <span>{quiz.questions} questions</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <RiTimeLine className="w-4 h-4" />
                                                <span>{quiz.duration}</span>
                                            </div>
                                        </div>

                                        {quiz.status === "completed" ? (
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-[#6b7280]">Best Score</span>
                                                    <span className="font-bold text-[#28a745]">{quiz.bestScore}%</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" className="flex-1">
                                                        <RiPlayCircleLine className="w-4 h-4 mr-2" />
                                                        Retry
                                                    </Button>
                                                    <Button variant="outline" className="flex-1">
                                                        Review
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <Button className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                <RiPlayCircleLine className="w-4 h-4 mr-2" />
                                                Start Quiz
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="ai-quiz">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-8">
                                <div className="max-w-2xl mx-auto text-center">
                                    <div className="w-20 h-20 bg-[#0063b3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <RiRobot2Line className="w-10 h-10 text-[#0063b3]" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#222222] mb-2">AI-Powered Personalized Quiz</h2>
                                    <p className="text-[#6b7280] mb-6">
                                        Our AI analyzes your learning history, trading patterns, and weak areas to generate
                                        a customized quiz just for you. It focuses on concepts you need to strengthen.
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="p-4 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-2xl font-bold text-[#0063b3]">15</p>
                                            <p className="text-sm text-[#6b7280]">Questions</p>
                                        </div>
                                        <div className="p-4 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-2xl font-bold text-[#0063b3]">20 min</p>
                                            <p className="text-sm text-[#6b7280]">Duration</p>
                                        </div>
                                        <div className="p-4 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-2xl font-bold text-[#0063b3]">+100</p>
                                            <p className="text-sm text-[#6b7280]">XP Reward</p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-[#0063b3]/5 rounded-lg border border-[#0063b3]/20 mb-6 text-left">
                                        <h4 className="font-medium text-[#222222] mb-2">Focus Areas (Based on your history)</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Risk Management", "Technical Indicators", "Options Greeks", "Position Sizing"].map(
                                                (area) => (
                                                    <Badge key={area} variant="secondary">
                                                        {area}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <Button size="lg" className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                        <RiRobot2Line className="w-5 h-5 mr-2" />
                                        Generate My Quiz
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="stage-tests">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stageTests.map((test, idx) => (
                                <Card
                                    key={test.id}
                                    className={`border-0 shadow-sm ${!test.unlocked ? "opacity-60" : ""}`}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${test.completed
                                                            ? "bg-[#28a745]/10"
                                                            : test.unlocked
                                                                ? "bg-[#0063b3]/10"
                                                                : "bg-[#6b7280]/10"
                                                        }`}
                                                >
                                                    {test.completed ? (
                                                        <RiCheckLine className="w-6 h-6 text-[#28a745]" />
                                                    ) : test.unlocked ? (
                                                        <RiStarLine className="w-6 h-6 text-[#0063b3]" />
                                                    ) : (
                                                        <RiLockLine className="w-6 h-6 text-[#6b7280]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-[#222222]">{test.title}</h3>
                                                    <p className="text-sm text-[#6b7280]">
                                                        Stage {idx + 1} Assessment
                                                    </p>
                                                </div>
                                            </div>
                                            {test.completed && (
                                                <Badge className="bg-[#28a745] text-white">{test.score}%</Badge>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-4">
                                            <div className="flex items-center gap-1">
                                                <RiQuestionLine className="w-4 h-4" />
                                                <span>{test.questions} questions</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <RiTimeLine className="w-4 h-4" />
                                                <span>{test.duration}</span>
                                            </div>
                                        </div>

                                        <Button
                                            className={`w-full ${test.unlocked
                                                    ? "bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                    : "bg-[#6b7280] cursor-not-allowed"
                                                }`}
                                            disabled={!test.unlocked}
                                        >
                                            {test.completed ? "Retake Test" : test.unlocked ? "Start Test" : "Locked"}
                                        </Button>

                                        {!test.unlocked && (
                                            <p className="text-xs text-[#6b7280] text-center mt-2">
                                                Complete Stage {idx} to unlock
                                            </p>
                                        )}
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
