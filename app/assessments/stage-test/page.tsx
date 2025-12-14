"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    RiArrowLeftLine,
    RiArrowRightLine,
    RiCheckLine,
    RiCloseLine,
    RiLockLine,
    RiMedalLine,
    RiQuestionLine,
    RiShieldCheckLine,
    RiStarLine,
    RiTimeLine,
    RiTrophyLine,
    RiLightbulbLine,
} from "react-icons/ri";
import Link from "next/link";

const stages = [
    {
        id: 1,
        title: "Beginner Stage Test",
        description: "Foundation of stock market basics, terminology, and core concepts",
        questions: 50,
        duration: "60 mins",
        passingScore: 70,
        unlocked: true,
        completed: true,
        score: 85,
        completedDate: "Nov 15, 2024",
        topics: ["Stock Market Basics", "Order Types", "Market Terminology", "Reading Charts"],
    },
    {
        id: 2,
        title: "Intermediate Stage Test",
        description: "Technical analysis, chart patterns, and trading strategies",
        questions: 75,
        duration: "90 mins",
        passingScore: 75,
        unlocked: true,
        completed: false,
        score: null,
        topics: ["Technical Indicators", "Chart Patterns", "Trend Analysis", "Support & Resistance"],
    },
    {
        id: 3,
        title: "Advanced Stage Test",
        description: "Options, derivatives, and advanced trading concepts",
        questions: 100,
        duration: "120 mins",
        passingScore: 80,
        unlocked: false,
        completed: false,
        score: null,
        topics: ["Options Greeks", "Options Strategies", "Derivatives", "Risk Management"],
    },
    {
        id: 4,
        title: "Expert Stage Test",
        description: "Portfolio management, institutional trading, and market microstructure",
        questions: 150,
        duration: "180 mins",
        passingScore: 85,
        unlocked: false,
        completed: false,
        score: null,
        topics: ["Portfolio Theory", "Market Microstructure", "Algorithmic Trading", "Tax Strategies"],
    },
];

// Sample questions for the intermediate test
const testQuestions = [
    {
        id: 1,
        question: "What is the primary purpose of the Moving Average Convergence Divergence (MACD) indicator?",
        options: [
            "To measure volume trends",
            "To identify momentum and trend direction",
            "To calculate support levels",
            "To predict exact price targets"
        ],
        correctAnswer: 1,
        explanation: "MACD is a trend-following momentum indicator that shows the relationship between two moving averages of a security's price."
    },
    {
        id: 2,
        question: "A 'head and shoulders' pattern typically signals:",
        options: [
            "Continuation of an uptrend",
            "A potential trend reversal",
            "Increased volume",
            "A consolidation phase"
        ],
        correctAnswer: 1,
        explanation: "The head and shoulders pattern is a chart formation that appears as a baseline with three peaks, signaling a trend reversal from bullish to bearish."
    },
    {
        id: 3,
        question: "When the 50-day moving average crosses above the 200-day moving average, it's called a:",
        options: [
            "Death Cross",
            "Golden Cross",
            "Silver Cross",
            "Diamond Cross"
        ],
        correctAnswer: 1,
        explanation: "A Golden Cross occurs when a short-term moving average crosses above a long-term moving average, typically signaling a bullish market."
    },
    {
        id: 4,
        question: "What does a rising wedge pattern typically indicate?",
        options: [
            "Bullish continuation",
            "Bearish reversal",
            "Sideways movement",
            "Increased volatility"
        ],
        correctAnswer: 1,
        explanation: "A rising wedge is typically a bearish pattern that indicates a potential reversal of an uptrend."
    },
    {
        id: 5,
        question: "Which indicator is best suited for identifying overbought and oversold conditions?",
        options: [
            "Moving Average",
            "Volume",
            "RSI (Relative Strength Index)",
            "VWAP"
        ],
        correctAnswer: 2,
        explanation: "RSI is a momentum oscillator that measures the speed and magnitude of a security's recent price changes to evaluate overbought or oversold conditions."
    },
];

export default function StageTestsPage() {
    const [selectedStage, setSelectedStage] = useState<number | null>(null);
    const [testState, setTestState] = useState<"overview" | "test" | "results">("overview");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(testQuestions.length).fill(null));
    const [showExplanation, setShowExplanation] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(90 * 60);

    const startTest = (stageId: number) => {
        setSelectedStage(stageId);
        setTestState("test");
        setCurrentQuestionIndex(0);
        setSelectedAnswers(Array(testQuestions.length).fill(null));
        setTimeRemaining(90 * 60);
    };

    const handleAnswerSelect = (answerIndex: number) => {
        if (showExplanation) return;
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        setShowExplanation(false);
        if (currentQuestionIndex < testQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setTestState("results");
        }
    };

    const handlePrevious = () => {
        setShowExplanation(false);
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = () => {
        let correct = 0;
        testQuestions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswer) {
                correct++;
            }
        });
        return {
            correct,
            total: testQuestions.length,
            percentage: Math.round((correct / testQuestions.length) * 100),
        };
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const goBack = () => {
        setTestState("overview");
        setSelectedStage(null);
    };

    // Overview Screen
    if (testState === "overview") {
        return (
            <AppLayout>
                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <Link href="/assessments">
                                <Button variant="ghost" size="icon">
                                    <RiArrowLeftLine className="w-5 h-5" />
                                </Button>
                            </Link>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Stage Tests</h1>
                                <p className="text-[#6b7280] mt-1">Complete stage tests to unlock new levels and earn certificates</p>
                            </div>
                        </div>
                    </div>

                    {/* Progress Overview */}
                    <Card className="border-0 shadow-sm bg-gradient-to-r from-[#0063b3] to-[#004080] text-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold">Your Progress</h2>
                                    <p className="text-white/80 mt-1">1 of 4 stages completed</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-center">
                                        <RiTrophyLine className="w-8 h-8 mx-auto mb-1" />
                                        <p className="text-sm text-white/80">Badges Earned</p>
                                        <p className="text-xl font-bold">1</p>
                                    </div>
                                    <div className="text-center">
                                        <RiMedalLine className="w-8 h-8 mx-auto mb-1" />
                                        <p className="text-sm text-white/80">Best Score</p>
                                        <p className="text-xl font-bold">85%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Progress value={25} className="h-2 bg-white/20" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Stage Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stages.map((stage, idx) => (
                            <Card
                                key={stage.id}
                                className={`border-0 shadow-sm transition-all ${!stage.unlocked ? "opacity-60" : "hover:shadow-md"}`}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-14 h-14 rounded-xl flex items-center justify-center ${stage.completed
                                                        ? "bg-[#28a745]/10"
                                                        : stage.unlocked
                                                            ? "bg-[#0063b3]/10"
                                                            : "bg-[#6b7280]/10"
                                                    }`}
                                            >
                                                {stage.completed ? (
                                                    <RiShieldCheckLine className="w-7 h-7 text-[#28a745]" />
                                                ) : stage.unlocked ? (
                                                    <RiStarLine className="w-7 h-7 text-[#0063b3]" />
                                                ) : (
                                                    <RiLockLine className="w-7 h-7 text-[#6b7280]" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className="text-xs">
                                                        Stage {idx + 1}
                                                    </Badge>
                                                    {stage.completed && (
                                                        <Badge className="bg-[#28a745] text-white text-xs">Passed</Badge>
                                                    )}
                                                </div>
                                                <h3 className="font-semibold text-[#222222] mt-1">{stage.title}</h3>
                                            </div>
                                        </div>
                                        {stage.completed && stage.score && (
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-[#28a745]">{stage.score}%</p>
                                                <p className="text-xs text-[#6b7280]">{stage.completedDate}</p>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-sm text-[#6b7280] mb-4">{stage.description}</p>

                                    <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-4">
                                        <div className="flex items-center gap-1">
                                            <RiQuestionLine className="w-4 h-4" />
                                            <span>{stage.questions} questions</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <RiTimeLine className="w-4 h-4" />
                                            <span>{stage.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <RiTrophyLine className="w-4 h-4" />
                                            <span>Pass: {stage.passingScore}%</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-xs text-[#6b7280] mb-2">Topics Covered:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {stage.topics.map((topic) => (
                                                <Badge key={topic} variant="secondary" className="text-xs">
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        className={`w-full ${stage.unlocked
                                                ? stage.completed
                                                    ? "bg-[#28a745] hover:bg-[#28a745]/90"
                                                    : "bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                : "bg-[#6b7280] cursor-not-allowed"
                                            }`}
                                        disabled={!stage.unlocked}
                                        onClick={() => startTest(stage.id)}
                                    >
                                        {stage.completed
                                            ? "Retake Test"
                                            : stage.unlocked
                                                ? "Start Test"
                                                : `Complete Stage ${idx} to Unlock`}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </AppLayout>
        );
    }

    // Test Screen
    if (testState === "test") {
        const currentQuestion = testQuestions[currentQuestionIndex];
        const progress = ((currentQuestionIndex + 1) / testQuestions.length) * 100;

        return (
            <AppLayout>
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-xl font-bold text-[#222222]">
                                {stages.find(s => s.id === selectedStage)?.title}
                            </h1>
                            <p className="text-sm text-[#6b7280]">
                                Question {currentQuestionIndex + 1} of {testQuestions.length}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" onClick={goBack}>
                                Exit Test
                            </Button>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timeRemaining < 60 ? "bg-red-100 text-red-600" : "bg-[#f4f4f4] text-[#222222]"
                                }`}>
                                <RiTimeLine className="w-4 h-4" />
                                <span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Progress */}
                    <Progress value={progress} className="h-2 mb-6" />

                    {/* Question Card */}
                    <Card className="border-0 shadow-lg mb-6">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold text-[#222222] mb-6">
                                {currentQuestion.question}
                            </h2>

                            <div className="space-y-3">
                                {currentQuestion.options.map((option, idx) => {
                                    const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                                    const isCorrect = currentQuestion.correctAnswer === idx;
                                    const showResult = showExplanation;

                                    let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all ";

                                    if (showResult) {
                                        if (isCorrect) {
                                            buttonClass += "border-[#28a745] bg-[#28a745]/10 text-[#28a745]";
                                        } else if (isSelected && !isCorrect) {
                                            buttonClass += "border-red-500 bg-red-50 text-red-600";
                                        } else {
                                            buttonClass += "border-[#e5e7eb] text-[#6b7280]";
                                        }
                                    } else {
                                        if (isSelected) {
                                            buttonClass += "border-[#0063b3] bg-[#0063b3]/5 text-[#0063b3]";
                                        } else {
                                            buttonClass += "border-[#e5e7eb] hover:border-[#0063b3] hover:bg-[#0063b3]/5 text-[#222222]";
                                        }
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswerSelect(idx)}
                                            disabled={showExplanation}
                                            className={buttonClass}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${showResult && isCorrect
                                                        ? "bg-[#28a745] text-white"
                                                        : showResult && isSelected && !isCorrect
                                                            ? "bg-red-500 text-white"
                                                            : isSelected
                                                                ? "bg-[#0063b3] text-white"
                                                                : "bg-[#f4f4f4] text-[#6b7280]"
                                                    }`}>
                                                    {showResult && isCorrect ? (
                                                        <RiCheckLine className="w-4 h-4" />
                                                    ) : showResult && isSelected && !isCorrect ? (
                                                        <RiCloseLine className="w-4 h-4" />
                                                    ) : (
                                                        String.fromCharCode(65 + idx)
                                                    )}
                                                </span>
                                                <span className="font-medium">{option}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {showExplanation && (
                                <div className="mt-6 p-4 bg-[#0063b3]/5 rounded-lg border border-[#0063b3]/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <RiLightbulbLine className="w-5 h-5 text-[#0063b3]" />
                                        <span className="font-medium text-[#222222]">Explanation</span>
                                    </div>
                                    <p className="text-[#6b7280]">{currentQuestion.explanation}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                        <Button
                            variant="outline"
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                        >
                            <RiArrowLeftLine className="w-4 h-4 mr-2" />
                            Previous
                        </Button>

                        <div className="flex gap-2">
                            {selectedAnswers[currentQuestionIndex] !== null && !showExplanation && (
                                <Button variant="outline" onClick={() => setShowExplanation(true)}>
                                    Check Answer
                                </Button>
                            )}
                            <Button
                                className="bg-[#0063b3] hover:bg-[#0063b3]/90"
                                onClick={handleNext}
                                disabled={selectedAnswers[currentQuestionIndex] === null}
                            >
                                {currentQuestionIndex === testQuestions.length - 1 ? "Finish" : "Next"}
                                <RiArrowRightLine className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
    }

    // Results Screen
    const score = calculateScore();
    const passed = score.percentage >= 75;

    return (
        <AppLayout>
            <div className="max-w-3xl mx-auto">
                <Card className="border-0 shadow-lg overflow-hidden">
                    <div className={`h-48 relative overflow-hidden ${passed
                            ? "bg-gradient-to-br from-[#28a745] to-[#1e7e34]"
                            : "bg-gradient-to-br from-[#f59e0b] to-[#d97706]"
                        }`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                                {passed ? (
                                    <RiShieldCheckLine className="w-16 h-16 mx-auto mb-2" />
                                ) : (
                                    <RiCloseLine className="w-16 h-16 mx-auto mb-2" />
                                )}
                                <p className="text-5xl font-bold">{score.percentage}%</p>
                                <p className="text-lg opacity-90">
                                    {score.correct} out of {score.total} correct
                                </p>
                            </div>
                        </div>
                    </div>

                    <CardContent className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-[#222222] mb-2">
                                {passed ? "Congratulations! You Passed! 🎉" : "Almost There! Keep Trying! 💪"}
                            </h2>
                            <p className="text-[#6b7280]">
                                {passed
                                    ? "You've successfully completed this stage test and unlocked the next level!"
                                    : "You need 75% to pass. Review the material and try again."}
                            </p>
                        </div>

                        {passed && (
                            <div className="p-6 bg-gradient-to-r from-[#0063b3]/10 to-[#28a745]/10 rounded-lg mb-6 text-center">
                                <RiMedalLine className="w-12 h-12 text-[#0063b3] mx-auto mb-2" />
                                <p className="font-semibold text-[#222222]">Stage Badge Earned!</p>
                                <p className="text-sm text-[#6b7280]">Intermediate Trader Badge</p>
                            </div>
                        )}

                        <div className="flex gap-4">
                            <Button variant="outline" className="flex-1" onClick={() => startTest(selectedStage!)}>
                                Try Again
                            </Button>
                            <Link href="/assessments/stage-tests" className="flex-1">
                                <Button className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90" onClick={goBack}>
                                    Back to Stages
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
