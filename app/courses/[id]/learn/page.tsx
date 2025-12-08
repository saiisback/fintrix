"use client";

import React, { useState, use } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
    RiPlayCircleLine,
    RiPauseCircleLine,
    RiArrowLeftLine,
    RiArrowRightLine,
    RiCheckLine,
    RiBookmarkLine,
    RiBookmarkFill,
    RiFullscreenLine,
    RiCloseLine,
    RiMenuLine,
    RiBookOpenLine,
    RiFileTextLine,
    RiQuestionLine,
    RiLightbulbLine,
    RiFileList3Line,
    RiPencilLine,
} from "react-icons/ri";
import Link from "next/link";
import { courses, quizQuestions } from "@/lib/mock-data";

export default function LearnPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const course = courses.find((c) => c.id === resolvedParams.id) || courses[0];
    const [activeTab, setActiveTab] = useState("video");
    const [isPlaying, setIsPlaying] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currentLesson, setCurrentLesson] = useState(0);
    const [notes, setNotes] = useState("");
    const [bookmarked, setBookmarked] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const [showResult, setShowResult] = useState(false);

    const lessons = [
        { title: "Introduction to Markets", duration: "12:45", completed: true },
        { title: "What are Stocks?", duration: "15:30", completed: true },
        { title: "Understanding Market Participants", duration: "18:20", completed: false, current: true },
        { title: "Types of Orders", duration: "14:10", completed: false },
        { title: "Reading Stock Charts", duration: "20:00", completed: false },
        { title: "Fundamental Analysis Basics", duration: "22:15", completed: false },
        { title: "Technical Indicators Overview", duration: "16:45", completed: false },
        { title: "Risk Management Principles", duration: "19:30", completed: false },
    ];

    const glossaryTerms = [
        { term: "Bull Market", definition: "A market condition where prices are rising or expected to rise." },
        { term: "Bear Market", definition: "A market condition where prices are falling, typically by 20% or more." },
        { term: "P/E Ratio", definition: "Price-to-Earnings ratio; a valuation metric comparing stock price to earnings per share." },
        { term: "Market Cap", definition: "Total market value of a company's outstanding shares." },
        { term: "Dividend", definition: "A portion of a company's earnings distributed to shareholders." },
        { term: "Blue Chip", definition: "Stocks of large, well-established companies with reliable performance." },
        { term: "IPO", definition: "Initial Public Offering; a company's first sale of stock to the public." },
        { term: "Volume", definition: "The number of shares traded during a given time period." },
    ];

    const checkpoints = [
        { time: "02:30", title: "Key Concept: Market Mechanics", completed: true },
        { time: "08:15", title: "Important: Order Types Explained", completed: false },
        { time: "14:00", title: "Practice: Identify Market Trends", completed: false },
    ];

    const currentQuestion = quizQuestions[0];

    return (
        <AppLayout>
            <div className="h-[calc(100vh-7rem)] flex">
                {/* Sidebar */}
                <div
                    className={`${sidebarOpen ? "w-80" : "w-0"
                        } transition-all duration-300 overflow-hidden border-r border-[#e5e7eb] bg-white shrink-0`}
                >
                    <div className="w-80 h-full flex flex-col">
                        {/* Course Info */}
                        <div className="p-4 border-b border-[#e5e7eb]">
                            <Link href={`/courses/${course.id}`} className="text-sm text-[#0063b3] hover:underline flex items-center gap-1">
                                <RiArrowLeftLine className="w-4 h-4" />
                                Back to Course
                            </Link>
                            <h3 className="font-semibold text-[#222222] mt-2 line-clamp-2">{course.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Progress value={35} className="h-2 flex-1" />
                                <span className="text-sm text-[#6b7280]">35%</span>
                            </div>
                        </div>

                        {/* Lesson List */}
                        <ScrollArea className="flex-1">
                            <div className="p-2">
                                {lessons.map((lesson, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentLesson(idx)}
                                        className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${idx === currentLesson
                                                ? "bg-[#0063b3]/10"
                                                : "hover:bg-[#f4f4f4]"
                                            }`}
                                    >
                                        <div
                                            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${lesson.completed
                                                    ? "bg-[#28a745]"
                                                    : idx === currentLesson
                                                        ? "bg-[#0063b3]"
                                                        : "border-2 border-[#e5e7eb]"
                                                }`}
                                        >
                                            {lesson.completed ? (
                                                <RiCheckLine className="w-4 h-4 text-white" />
                                            ) : idx === currentLesson ? (
                                                <RiPlayCircleLine className="w-4 h-4 text-white" />
                                            ) : (
                                                <span className="text-xs text-[#6b7280]">{idx + 1}</span>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className={`text-sm font-medium truncate ${idx === currentLesson ? "text-[#0063b3]" : "text-[#222222]"
                                                    }`}
                                            >
                                                {lesson.title}
                                            </p>
                                            <p className="text-xs text-[#6b7280]">{lesson.duration}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Video Player Area */}
                    <div className="relative bg-[#222222] aspect-video max-h-[60vh]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 bg-[#0063b3] rounded-full flex items-center justify-center hover:bg-[#0063b3]/90 transition-colors"
                            >
                                {isPlaying ? (
                                    <RiPauseCircleLine className="w-10 h-10 text-white" />
                                ) : (
                                    <RiPlayCircleLine className="w-10 h-10 text-white ml-1" />
                                )}
                            </button>
                        </div>

                        {/* Video Controls Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80">
                            <div className="flex items-center gap-4">
                                <Progress value={35} className="flex-1 h-1" />
                                <span className="text-white text-sm">06:32 / 18:20</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-white hover:bg-white/20"
                                        onClick={() => setSidebarOpen(!sidebarOpen)}
                                    >
                                        <RiMenuLine className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <RiArrowLeftLine className="w-5 h-5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-white hover:bg-white/20"
                                        onClick={() => setIsPlaying(!isPlaying)}
                                    >
                                        {isPlaying ? (
                                            <RiPauseCircleLine className="w-6 h-6" />
                                        ) : (
                                            <RiPlayCircleLine className="w-6 h-6" />
                                        )}
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <RiArrowRightLine className="w-5 h-5" />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-white hover:bg-white/20"
                                        onClick={() => setBookmarked(!bookmarked)}
                                    >
                                        {bookmarked ? (
                                            <RiBookmarkFill className="w-5 h-5" />
                                        ) : (
                                            <RiBookmarkLine className="w-5 h-5" />
                                        )}
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                        <RiFullscreenLine className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Lesson Title */}
                        <div className="absolute top-4 left-4 right-4">
                            <Badge className="bg-[#0063b3]">Lesson {currentLesson + 1}</Badge>
                            <h2 className="text-white text-lg font-semibold mt-2">{lessons[currentLesson].title}</h2>
                        </div>
                    </div>

                    {/* Content Tabs */}
                    <div className="flex-1 overflow-hidden">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                            <div className="border-b border-[#e5e7eb] px-4">
                                <TabsList className="bg-transparent h-12">
                                    <TabsTrigger value="video" className="gap-2">
                                        <RiPlayCircleLine className="w-4 h-4" />
                                        Lesson
                                    </TabsTrigger>
                                    <TabsTrigger value="notes" className="gap-2">
                                        <RiPencilLine className="w-4 h-4" />
                                        Notes
                                    </TabsTrigger>
                                    <TabsTrigger value="checkpoints" className="gap-2">
                                        <RiBookmarkLine className="w-4 h-4" />
                                        Checkpoints
                                    </TabsTrigger>
                                    <TabsTrigger value="glossary" className="gap-2">
                                        <RiBookOpenLine className="w-4 h-4" />
                                        Glossary
                                    </TabsTrigger>
                                    <TabsTrigger value="quiz" className="gap-2">
                                        <RiQuestionLine className="w-4 h-4" />
                                        Quiz
                                    </TabsTrigger>
                                    <TabsTrigger value="case-study" className="gap-2">
                                        <RiFileList3Line className="w-4 h-4" />
                                        Case Study
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            <ScrollArea className="flex-1">
                                <TabsContent value="video" className="p-6 m-0">
                                    <Card className="border-0 shadow-sm">
                                        <CardHeader>
                                            <CardTitle>Lesson Summary</CardTitle>
                                        </CardHeader>
                                        <CardContent className="prose prose-sm max-w-none">
                                            <p className="text-[#6b7280]">
                                                In this lesson, we explore the various participants that make up the financial markets.
                                                Understanding who these players are and how they interact is crucial for any aspiring
                                                trader or investor.
                                            </p>
                                            <h4 className="text-[#222222] mt-4">Key Takeaways:</h4>
                                            <ul className="text-[#6b7280]">
                                                <li>Retail investors vs. institutional investors</li>
                                                <li>Role of market makers and their importance</li>
                                                <li>How hedge funds and mutual funds operate</li>
                                                <li>The impact of algorithmic trading</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="notes" className="p-6 m-0">
                                    <Card className="border-0 shadow-sm">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <CardTitle>Your Notes</CardTitle>
                                                <Button size="sm" className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                    Save Notes
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <Textarea
                                                placeholder="Take notes while watching the lesson..."
                                                value={notes}
                                                onChange={(e) => setNotes(e.target.value)}
                                                className="min-h-[300px] resize-none"
                                            />
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="checkpoints" className="p-6 m-0">
                                    <Card className="border-0 shadow-sm">
                                        <CardHeader>
                                            <CardTitle>Key Checkpoints</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {checkpoints.map((cp, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`flex items-center gap-4 p-4 rounded-lg border ${cp.completed ? "bg-[#e9f7ef] border-[#28a745]/30" : "border-[#e5e7eb]"
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${cp.completed ? "bg-[#28a745]" : "bg-[#0063b3]"
                                                                }`}
                                                        >
                                                            {cp.completed ? (
                                                                <RiCheckLine className="w-5 h-5 text-white" />
                                                            ) : (
                                                                <RiBookmarkLine className="w-5 h-5 text-white" />
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="font-medium text-[#222222]">{cp.title}</p>
                                                            <p className="text-sm text-[#6b7280]">Timestamp: {cp.time}</p>
                                                        </div>
                                                        <Button variant="outline" size="sm">
                                                            Jump to
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="glossary" className="p-6 m-0">
                                    <Card className="border-0 shadow-sm">
                                        <CardHeader>
                                            <CardTitle>Glossary</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {glossaryTerms.map((item, idx) => (
                                                    <div key={idx} className="p-4 rounded-lg bg-[#f4f4f4]">
                                                        <h4 className="font-semibold text-[#222222]">{item.term}</h4>
                                                        <p className="text-sm text-[#6b7280] mt-1">{item.definition}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="quiz" className="p-6 m-0">
                                    <Card className="border-0 shadow-sm">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <CardTitle>Unit Quiz</CardTitle>
                                                    <p className="text-sm text-[#6b7280] mt-1">Question 1 of 5</p>
                                                </div>
                                                <Badge variant="outline">+25 XP</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-6">
                                                <h3 className="text-lg font-medium text-[#222222]">{currentQuestion.question}</h3>
                                                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                                                    {currentQuestion.options.map((option, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${showResult
                                                                    ? idx === currentQuestion.correct
                                                                        ? "bg-[#e9f7ef] border-[#28a745]"
                                                                        : selectedAnswer === String(idx)
                                                                            ? "bg-red-50 border-red-500"
                                                                            : "border-[#e5e7eb]"
                                                                    : selectedAnswer === String(idx)
                                                                        ? "border-[#0063b3] bg-[#0063b3]/5"
                                                                        : "border-[#e5e7eb] hover:border-[#0063b3]/50"
                                                                }`}
                                                        >
                                                            <RadioGroupItem value={String(idx)} id={`option-${idx}`} disabled={showResult} />
                                                            <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                                                                {option}
                                                            </Label>
                                                            {showResult && idx === currentQuestion.correct && (
                                                                <RiCheckLine className="w-5 h-5 text-[#28a745]" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </RadioGroup>

                                                {showResult && (
                                                    <div className="p-4 rounded-lg bg-[#0063b3]/5 border border-[#0063b3]/20">
                                                        <div className="flex items-start gap-3">
                                                            <RiLightbulbLine className="w-5 h-5 text-[#0063b3] shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="font-medium text-[#222222]">Explanation</p>
                                                                <p className="text-sm text-[#6b7280] mt-1">{currentQuestion.explanation}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex justify-end gap-3">
                                                    {!showResult ? (
                                                        <Button
                                                            className="bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                            onClick={() => setShowResult(true)}
                                                            disabled={!selectedAnswer}
                                                        >
                                                            Check Answer
                                                        </Button>
                                                    ) : (
                                                        <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                            Next Question
                                                            <RiArrowRightLine className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="case-study" className="p-6 m-0">
                                    <Card className="border-0 shadow-sm">
                                        <CardHeader>
                                            <CardTitle>Case Study: The 2020 Market Crash & Recovery</CardTitle>
                                        </CardHeader>
                                        <CardContent className="prose prose-sm max-w-none">
                                            <div className="p-4 bg-[#f4f4f4] rounded-lg mb-6">
                                                <p className="font-medium text-[#222222]">Scenario</p>
                                                <p className="text-[#6b7280] mt-2">
                                                    In March 2020, global markets experienced one of the fastest crashes in history due to the
                                                    COVID-19 pandemic. The S&P 500 fell nearly 34% in just 23 trading days. Yet, remarkably, it
                                                    recovered to all-time highs within months.
                                                </p>
                                            </div>

                                            <h4 className="text-[#222222]">Analysis Questions:</h4>
                                            <ol className="text-[#6b7280]">
                                                <li className="mb-3">
                                                    What role did retail investors play in the recovery, and how did their behavior differ from
                                                    institutional investors?
                                                </li>
                                                <li className="mb-3">
                                                    How did central bank policies (like Fed rate cuts) affect market participant behavior?
                                                </li>
                                                <li className="mb-3">
                                                    Which sectors recovered fastest and why? What does this tell us about market dynamics?
                                                </li>
                                            </ol>

                                            <div className="mt-6">
                                                <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                    Submit Your Analysis
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </ScrollArea>
                        </Tabs>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
