"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    RiNewspaperLine,
    RiBookOpenLine,
    RiArrowRightLine,
    RiLightbulbLine,
    RiCheckLine,
    RiPlayCircleLine,
} from "react-icons/ri";
import { news } from "@/lib/mock-data";

const convertedLessons = [
    {
        id: 1,
        newsTitle: "RBI Keeps Repo Rate Unchanged at 6.5%",
        lessonTitle: "Understanding Monetary Policy and Interest Rates",
        topics: ["Central Bank Policy", "Repo Rate Impact", "Bond Markets"],
        duration: "15 min",
        status: "ready",
    },
    {
        id: 2,
        newsTitle: "Tech Stocks Rally on AI Optimism",
        lessonTitle: "Sector Rotation and Theme-Based Investing",
        topics: ["Sector Analysis", "Growth Stocks", "Market Sentiment"],
        duration: "12 min",
        status: "ready",
    },
    {
        id: 3,
        newsTitle: "Crude Oil Prices Surge Amid Supply Concerns",
        lessonTitle: "Commodity Impact on Stock Markets",
        topics: ["Commodity Correlation", "Energy Sector", "Inflation"],
        duration: "18 min",
        status: "generating",
    },
];

export default function NewsToLearningPage() {
    const [selectedNews, setSelectedNews] = useState<string | null>(null);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">News to Learning</h1>
                    <p className="text-[#6b7280] mt-1">
                        AI converts current market news into personalized learning modules
                    </p>
                </div>

                {/* How It Works */}
                <Card className="border-0 shadow-sm bg-gradient-to-r from-[#0063b3]/5 to-transparent">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-12 h-12 bg-[#0063b3] rounded-full flex items-center justify-center text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <p className="font-medium text-[#222222]">Read Market News</p>
                                    <p className="text-sm text-[#6b7280]">Stay updated with latest events</p>
                                </div>
                            </div>
                            <RiArrowRightLine className="w-6 h-6 text-[#6b7280] hidden md:block" />
                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-12 h-12 bg-[#0063b3] rounded-full flex items-center justify-center text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <p className="font-medium text-[#222222]">AI Analyzes & Extracts</p>
                                    <p className="text-sm text-[#6b7280]">Identifies learning concepts</p>
                                </div>
                            </div>
                            <RiArrowRightLine className="w-6 h-6 text-[#6b7280] hidden md:block" />
                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-12 h-12 bg-[#28a745] rounded-full flex items-center justify-center text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <p className="font-medium text-[#222222]">Learn from News</p>
                                    <p className="text-sm text-[#6b7280]">Get custom mini-lessons</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* News Feed */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <RiNewspaperLine className="w-5 h-5 text-[#0063b3]" />
                                Today&apos;s News
                            </CardTitle>
                            <CardDescription>Select a news article to convert to a lesson</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px]">
                                <div className="space-y-3">
                                    {news.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => setSelectedNews(item.id)}
                                            className={`p-4 rounded-lg border cursor-pointer transition-colors ${selectedNews === item.id
                                                    ? "border-[#0063b3] bg-[#0063b3]/5"
                                                    : "border-[#e5e7eb] hover:border-[#0063b3]/30"
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                                                <span className="text-xs text-[#6b7280]">{item.time}</span>
                                            </div>
                                            <h4 className="font-medium text-[#222222] mb-1">{item.title}</h4>
                                            <p className="text-sm text-[#6b7280] line-clamp-2">{item.summary}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                            {selectedNews && (
                                <Button className="w-full mt-4 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                    <RiLightbulbLine className="w-4 h-4 mr-2" />
                                    Generate Lesson from This News
                                </Button>
                            )}
                        </CardContent>
                    </Card>

                    {/* Converted Lessons */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <RiBookOpenLine className="w-5 h-5 text-[#28a745]" />
                                Generated Lessons
                            </CardTitle>
                            <CardDescription>Lessons created from news articles</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {convertedLessons.map((lesson) => (
                                    <div key={lesson.id} className="p-4 rounded-lg border border-[#e5e7eb]">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <Badge
                                                className={`${lesson.status === "ready" ? "bg-[#28a745]" : "bg-[#f59e0b]"
                                                    }`}
                                            >
                                                {lesson.status === "ready" ? "Ready" : "Generating..."}
                                            </Badge>
                                            <span className="text-sm text-[#6b7280]">{lesson.duration}</span>
                                        </div>
                                        <h4 className="font-medium text-[#222222] mb-1">{lesson.lessonTitle}</h4>
                                        <p className="text-xs text-[#6b7280] mb-3">
                                            From: &quot;{lesson.newsTitle}&quot;
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {lesson.topics.map((topic) => (
                                                <Badge key={topic} variant="secondary" className="text-xs">
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button
                                            size="sm"
                                            className={`w-full ${lesson.status === "ready"
                                                    ? "bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                    : "bg-[#6b7280] cursor-not-allowed"
                                                }`}
                                            disabled={lesson.status !== "ready"}
                                        >
                                            {lesson.status === "ready" ? (
                                                <>
                                                    <RiPlayCircleLine className="w-4 h-4 mr-2" />
                                                    Start Lesson
                                                </>
                                            ) : (
                                                "Generating..."
                                            )}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
