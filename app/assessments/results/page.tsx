"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiMedalLine,
    RiDownloadLine,
    RiShareLine,
    RiCheckLine,
    RiTrophyLine,
    RiStarLine,
} from "react-icons/ri";

const certificates = [
    {
        id: 1,
        title: "Stock Market Fundamentals",
        issueDate: "March 15, 2024",
        score: 92,
        credentialId: "FTX-2024-001234",
        status: "earned",
    },
    {
        id: 2,
        title: "Technical Analysis Mastery",
        issueDate: "May 20, 2024",
        score: 88,
        credentialId: "FTX-2024-002567",
        status: "earned",
    },
    {
        id: 3,
        title: "Value Investing Principles",
        issueDate: "August 10, 2024",
        score: 95,
        credentialId: "FTX-2024-003890",
        status: "earned",
    },
    {
        id: 4,
        title: "Options Trading Strategies",
        progress: 60,
        status: "in-progress",
    },
    {
        id: 5,
        title: "Forex Trading Essentials",
        progress: 25,
        status: "in-progress",
    },
];

const quizResults = [
    { id: 1, title: "Stock Market Basics Quiz", date: "Dec 5, 2024", score: 95, maxScore: 100, status: "passed" },
    { id: 2, title: "Candlestick Patterns Quiz", date: "Dec 3, 2024", score: 78, maxScore: 100, status: "passed" },
    { id: 3, title: "Options Greeks Quiz", date: "Dec 1, 2024", score: 62, maxScore: 100, status: "failed" },
    { id: 4, title: "Risk Management Quiz", date: "Nov 28, 2024", score: 88, maxScore: 100, status: "passed" },
    { id: 5, title: "Technical Indicators Quiz", date: "Nov 25, 2024", score: 92, maxScore: 100, status: "passed" },
];

export default function ResultsPage() {
    const earnedCerts = certificates.filter((c) => c.status === "earned");
    const inProgressCerts = certificates.filter((c) => c.status === "in-progress");

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Results & Certificates</h1>
                    <p className="text-[#6b7280] mt-1">View your quiz results and earned certificates</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                <RiMedalLine className="w-6 h-6 text-[#0063b3]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Certificates Earned</p>
                                <p className="text-2xl font-bold text-[#222222]">{earnedCerts.length}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#28a745]/10 rounded-xl flex items-center justify-center">
                                <RiCheckLine className="w-6 h-6 text-[#28a745]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Quizzes Passed</p>
                                <p className="text-2xl font-bold text-[#222222]">24</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center">
                                <RiStarLine className="w-6 h-6 text-[#f59e0b]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Average Score</p>
                                <p className="text-2xl font-bold text-[#222222]">82%</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                <RiTrophyLine className="w-6 h-6 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Best Score</p>
                                <p className="text-2xl font-bold text-[#222222]">95%</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="certificates" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="certificates">Certificates</TabsTrigger>
                        <TabsTrigger value="results">Quiz Results</TabsTrigger>
                    </TabsList>

                    <TabsContent value="certificates">
                        <div className="space-y-6">
                            {/* Earned Certificates */}
                            <div>
                                <h3 className="text-lg font-semibold text-[#222222] mb-4">Earned Certificates</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {earnedCerts.map((cert) => (
                                        <Card key={cert.id} className="border-0 shadow-sm overflow-hidden">
                                            <div className="h-32 bg-gradient-to-br from-[#0063b3] to-[#004080] relative">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <RiMedalLine className="w-16 h-16 text-white/20" />
                                                </div>
                                                <div className="absolute top-3 right-3">
                                                    <Badge className="bg-[#28a745] text-white">{cert.score}%</Badge>
                                                </div>
                                            </div>
                                            <CardContent className="p-4">
                                                <h4 className="font-semibold text-[#222222] mb-1">{cert.title}</h4>
                                                <p className="text-sm text-[#6b7280]">Issued: {cert.issueDate}</p>
                                                <p className="text-xs text-[#6b7280] mt-1">ID: {cert.credentialId}</p>
                                                <div className="flex gap-2 mt-4">
                                                    <Button variant="outline" size="sm" className="flex-1">
                                                        <RiDownloadLine className="w-4 h-4 mr-1" />
                                                        Download
                                                    </Button>
                                                    <Button variant="outline" size="sm" className="flex-1">
                                                        <RiShareLine className="w-4 h-4 mr-1" />
                                                        Share
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* In Progress */}
                            <div>
                                <h3 className="text-lg font-semibold text-[#222222] mb-4">In Progress</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {inProgressCerts.map((cert) => (
                                        <Card key={cert.id} className="border-0 shadow-sm">
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h4 className="font-semibold text-[#222222]">{cert.title}</h4>
                                                    <Badge variant="secondary">{cert.progress}% Complete</Badge>
                                                </div>
                                                <div className="w-full h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-[#0063b3] rounded-full"
                                                        style={{ width: `${cert.progress}%` }}
                                                    />
                                                </div>
                                                <Button className="w-full mt-4 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                    Continue Course
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="results">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Quiz Results History</CardTitle>
                                <CardDescription>Your performance across all quizzes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-[#e5e7eb]">
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Quiz</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Date</th>
                                                <th className="text-center py-3 px-4 text-sm font-medium text-[#6b7280]">Score</th>
                                                <th className="text-center py-3 px-4 text-sm font-medium text-[#6b7280]">Status</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {quizResults.map((result) => (
                                                <tr key={result.id} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                                    <td className="py-4 px-4 font-medium text-[#222222]">{result.title}</td>
                                                    <td className="py-4 px-4 text-[#6b7280]">{result.date}</td>
                                                    <td className="py-4 px-4 text-center">
                                                        <span className={`font-bold ${result.score >= 70 ? "text-[#28a745]" : "text-red-500"}`}>
                                                            {result.score}/{result.maxScore}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-4 text-center">
                                                        <Badge
                                                            className={`${result.status === "passed" ? "bg-[#28a745]" : "bg-red-500"
                                                                } text-white`}
                                                        >
                                                            {result.status === "passed" ? "Passed" : "Failed"}
                                                        </Badge>
                                                    </td>
                                                    <td className="py-4 px-4 text-right">
                                                        <Button variant="outline" size="sm">
                                                            Review
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
