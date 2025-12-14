"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    RiRobot2Line,
    RiTimeLine,
    RiQuestionLine,
    RiArrowRightLine,
    RiArrowLeftLine,
    RiCheckLine,
    RiCloseLine,
    RiTrophyLine,
    RiRefreshLine,
    RiLightbulbLine,
    RiSparklingLine,
} from "react-icons/ri";
import Link from "next/link";

// AI-generated quiz questions based on focus areas
const quizQuestions = [
    {
        id: 1,
        category: "Risk Management",
        question: "What is the recommended maximum percentage of your portfolio to risk on a single trade?",
        options: [
            "10-15% per trade",
            "1-2% per trade",
            "25% per trade",
            "50% per trade"
        ],
        correctAnswer: 1,
        explanation: "The 1-2% rule helps preserve capital and ensures that a series of losses won't devastate your portfolio."
    },
    {
        id: 2,
        category: "Technical Indicators",
        question: "Which RSI level typically indicates an oversold condition?",
        options: [
            "Above 70",
            "Between 40-60",
            "Below 30",
            "Exactly 50"
        ],
        correctAnswer: 2,
        explanation: "An RSI below 30 typically indicates oversold conditions, suggesting the asset may be undervalued and due for a price increase."
    },
    {
        id: 3,
        category: "Options Greeks",
        question: "Which Greek measures the rate of change in an option's delta relative to the underlying asset's price?",
        options: [
            "Theta",
            "Vega",
            "Gamma",
            "Rho"
        ],
        correctAnswer: 2,
        explanation: "Gamma measures how much delta changes for every $1 move in the underlying asset, indicating the stability of delta."
    },
    {
        id: 4,
        category: "Position Sizing",
        question: "If you have a $100,000 portfolio and want to risk 2% per trade with a stop loss 5% below entry, what's your position size?",
        options: [
            "$10,000",
            "$20,000",
            "$40,000",
            "$50,000"
        ],
        correctAnswer: 2,
        explanation: "Risk amount = $100,000 × 2% = $2,000. Position size = $2,000 ÷ 5% = $40,000."
    },
    {
        id: 5,
        category: "Risk Management",
        question: "What is a stop-loss order primarily used for?",
        options: [
            "To guarantee profits",
            "To limit potential losses",
            "To increase position size",
            "To lock in dividends"
        ],
        correctAnswer: 1,
        explanation: "Stop-loss orders automatically sell a position when it reaches a specified price, limiting potential losses on a trade."
    },
    {
        id: 6,
        category: "Technical Indicators",
        question: "What does a 'death cross' signal in technical analysis?",
        options: [
            "50-day MA crosses above 200-day MA",
            "Price breaks resistance",
            "50-day MA crosses below 200-day MA",
            "Volume spike occurs"
        ],
        correctAnswer: 2,
        explanation: "A death cross occurs when the 50-day moving average crosses below the 200-day moving average, often signaling bearish momentum."
    },
    {
        id: 7,
        category: "Options Greeks",
        question: "Which Greek measures an option's sensitivity to time decay?",
        options: [
            "Delta",
            "Gamma",
            "Theta",
            "Vega"
        ],
        correctAnswer: 2,
        explanation: "Theta measures the rate at which an option loses value as time passes, also known as time decay."
    },
    {
        id: 8,
        category: "Position Sizing",
        question: "What is the Kelly Criterion used for in trading?",
        options: [
            "Timing market entries",
            "Calculating optimal position size",
            "Identifying chart patterns",
            "Measuring volatility"
        ],
        correctAnswer: 1,
        explanation: "The Kelly Criterion is a formula used to determine the optimal size of a series of bets to maximize long-term growth."
    },
    {
        id: 9,
        category: "Risk Management",
        question: "What is the purpose of portfolio diversification?",
        options: [
            "To maximize returns on a single asset",
            "To reduce overall portfolio risk",
            "To concentrate gains",
            "To increase trading frequency"
        ],
        correctAnswer: 1,
        explanation: "Diversification spreads risk across multiple assets, reducing the impact of any single investment's poor performance on your portfolio."
    },
    {
        id: 10,
        category: "Technical Indicators",
        question: "What does the MACD histogram represent?",
        options: [
            "Volume of trades",
            "Price momentum direction",
            "Difference between MACD line and signal line",
            "Support and resistance levels"
        ],
        correctAnswer: 2,
        explanation: "The MACD histogram shows the difference between the MACD line and its signal line, helping identify momentum changes."
    },
    {
        id: 11,
        category: "Options Greeks",
        question: "A delta of 0.5 on a call option means:",
        options: [
            "The option will expire worthless",
            "For every $1 move in the underlying, the option moves $0.50",
            "The option has 50 days until expiration",
            "50% of the premium has been lost"
        ],
        correctAnswer: 1,
        explanation: "Delta of 0.5 means the option price will change by approximately $0.50 for every $1 change in the underlying asset's price."
    },
    {
        id: 12,
        category: "Position Sizing",
        question: "What does 'risk-reward ratio' measure?",
        options: [
            "Portfolio beta",
            "Potential profit relative to potential loss",
            "Number of trades per day",
            "Account leverage"
        ],
        correctAnswer: 1,
        explanation: "Risk-reward ratio compares the potential profit of a trade to its potential loss, helping traders evaluate trade worthiness."
    },
    {
        id: 13,
        category: "Risk Management",
        question: "What is 'max drawdown' in portfolio management?",
        options: [
            "The maximum leverage used",
            "The largest peak-to-trough decline",
            "The highest single-day gain",
            "The minimum account balance"
        ],
        correctAnswer: 1,
        explanation: "Max drawdown measures the largest percentage drop from a peak to a trough in portfolio value, indicating worst-case loss scenarios."
    },
    {
        id: 14,
        category: "Technical Indicators",
        question: "Bollinger Bands expand when:",
        options: [
            "Volume decreases",
            "Price consolidates",
            "Volatility increases",
            "Trend reverses"
        ],
        correctAnswer: 2,
        explanation: "Bollinger Bands widen when volatility increases and contract when volatility decreases, helping identify potential breakouts."
    },
    {
        id: 15,
        category: "Options Greeks",
        question: "Which Greek is most important for options sellers focusing on time decay strategies?",
        options: [
            "Delta",
            "Gamma",
            "Theta",
            "Rho"
        ],
        correctAnswer: 2,
        explanation: "Theta is crucial for options sellers as it represents the daily time decay they collect as premium, working in their favor."
    },
];

const focusAreas = ["Risk Management", "Technical Indicators", "Options Greeks", "Position Sizing"];

export default function AIQuizPage() {
    const [quizState, setQuizState] = useState<"intro" | "loading" | "quiz" | "results">("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(15).fill(null));
    const [showExplanation, setShowExplanation] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(20 * 60); // 20 minutes in seconds
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Timer effect
    useEffect(() => {
        if (quizState !== "quiz") return;

        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    setQuizState("results");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [quizState]);

    // Loading animation effect
    useEffect(() => {
        if (quizState !== "loading") return;

        const interval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    setTimeout(() => setQuizState("quiz"), 500);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [quizState]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleAnswerSelect = (answerIndex: number) => {
        if (showExplanation) return;

        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        setShowExplanation(false);
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizState("results");
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
        quizQuestions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswer) {
                correct++;
            }
        });
        return {
            correct,
            total: quizQuestions.length,
            percentage: Math.round((correct / quizQuestions.length) * 100),
        };
    };

    const getCategoryStats = () => {
        const stats: Record<string, { correct: number; total: number }> = {};

        focusAreas.forEach((area) => {
            stats[area] = { correct: 0, total: 0 };
        });

        quizQuestions.forEach((q, idx) => {
            stats[q.category].total++;
            if (selectedAnswers[idx] === q.correctAnswer) {
                stats[q.category].correct++;
            }
        });

        return stats;
    };

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    const startQuiz = () => {
        setQuizState("loading");
        setLoadingProgress(0);
    };

    const restartQuiz = () => {
        setQuizState("intro");
        setCurrentQuestionIndex(0);
        setSelectedAnswers(Array(15).fill(null));
        setShowExplanation(false);
        setTimeRemaining(20 * 60);
    };

    // Intro Screen
    if (quizState === "intro") {
        return (
            <AppLayout>
                <div className="max-w-3xl mx-auto">
                    <Card className="border-0 shadow-lg overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-[#0063b3] via-[#004080] to-[#002855] relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                                        <RiRobot2Line className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2">
                                        <RiSparklingLine className="w-6 h-6 text-yellow-400 animate-bounce" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <Link href="/assessments">
                                    <Button variant="ghost" className="text-white hover:bg-white/10">
                                        <RiArrowLeftLine className="w-4 h-4 mr-2" />
                                        Back to Assessments
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-[#222222] mb-2">AI-Powered Personalized Quiz</h1>
                                <p className="text-[#6b7280]">
                                    Our AI has analyzed your learning history to create a quiz tailored just for you
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="p-4 bg-[#f4f4f4] rounded-lg text-center">
                                    <RiQuestionLine className="w-6 h-6 text-[#0063b3] mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-[#222222]">15</p>
                                    <p className="text-sm text-[#6b7280]">Questions</p>
                                </div>
                                <div className="p-4 bg-[#f4f4f4] rounded-lg text-center">
                                    <RiTimeLine className="w-6 h-6 text-[#0063b3] mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-[#222222]">20 min</p>
                                    <p className="text-sm text-[#6b7280]">Duration</p>
                                </div>
                                <div className="p-4 bg-[#f4f4f4] rounded-lg text-center">
                                    <RiTrophyLine className="w-6 h-6 text-[#0063b3] mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-[#222222]">+100</p>
                                    <p className="text-sm text-[#6b7280]">XP Reward</p>
                                </div>
                            </div>

                            <div className="p-4 bg-[#0063b3]/5 rounded-lg border border-[#0063b3]/20 mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <RiLightbulbLine className="w-5 h-5 text-[#0063b3]" />
                                    <h4 className="font-medium text-[#222222]">Focus Areas (Based on your history)</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {focusAreas.map((area) => (
                                        <Badge key={area} variant="secondary" className="bg-white">
                                            {area}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90 h-14 text-lg"
                                onClick={startQuiz}
                            >
                                <RiRobot2Line className="w-5 h-5 mr-2" />
                                Generate My Quiz
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </AppLayout>
        );
    }

    // Loading Screen
    if (quizState === "loading") {
        return (
            <AppLayout>
                <div className="max-w-lg mx-auto mt-20">
                    <Card className="border-0 shadow-lg">
                        <CardContent className="p-8 text-center">
                            <div className="w-20 h-20 bg-[#0063b3]/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                <RiRobot2Line className="w-10 h-10 text-[#0063b3]" />
                            </div>
                            <h2 className="text-xl font-bold text-[#222222] mb-2">Generating Your Personalized Quiz</h2>
                            <p className="text-[#6b7280] mb-6">
                                AI is analyzing your learning patterns and creating targeted questions...
                            </p>
                            <Progress value={Math.min(loadingProgress, 100)} className="h-2 mb-2" />
                            <p className="text-sm text-[#6b7280]">{Math.min(Math.round(loadingProgress), 100)}%</p>
                        </CardContent>
                    </Card>
                </div>
            </AppLayout>
        );
    }

    // Quiz Screen
    if (quizState === "quiz") {
        return (
            <AppLayout>
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-xl font-bold text-[#222222]">AI Personalized Quiz</h1>
                            <p className="text-sm text-[#6b7280]">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timeRemaining < 60 ? "bg-red-100 text-red-600" : "bg-[#f4f4f4] text-[#222222]"
                                }`}>
                                <RiTimeLine className="w-4 h-4" />
                                <span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-6">
                        <Progress value={progress} className="h-2" />
                        <div className="flex justify-between mt-2">
                            {quizQuestions.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setShowExplanation(false);
                                        setCurrentQuestionIndex(idx);
                                    }}
                                    className={`w-6 h-6 rounded-full text-xs font-medium transition-all ${idx === currentQuestionIndex
                                            ? "bg-[#0063b3] text-white scale-110"
                                            : selectedAnswers[idx] !== null
                                                ? "bg-[#28a745] text-white"
                                                : "bg-[#e5e7eb] text-[#6b7280]"
                                        }`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Question Card */}
                    <Card className="border-0 shadow-lg mb-6">
                        <CardContent className="p-6">
                            <Badge variant="secondary" className="mb-4">
                                {currentQuestion.category}
                            </Badge>
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

                            {/* Explanation */}
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
                                <Button
                                    variant="outline"
                                    onClick={() => setShowExplanation(true)}
                                >
                                    Check Answer
                                </Button>
                            )}
                            <Button
                                className="bg-[#0063b3] hover:bg-[#0063b3]/90"
                                onClick={handleNext}
                                disabled={selectedAnswers[currentQuestionIndex] === null}
                            >
                                {currentQuestionIndex === quizQuestions.length - 1 ? "Finish" : "Next"}
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
    const categoryStats = getCategoryStats();

    return (
        <AppLayout>
            <div className="max-w-3xl mx-auto">
                <Card className="border-0 shadow-lg overflow-hidden">
                    <div className={`h-48 relative overflow-hidden ${score.percentage >= 70
                            ? "bg-gradient-to-br from-[#28a745] to-[#1e7e34]"
                            : "bg-gradient-to-br from-[#f59e0b] to-[#d97706]"
                        }`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                                <RiTrophyLine className="w-16 h-16 mx-auto mb-2" />
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
                                {score.percentage >= 70 ? "Great Job! 🎉" : "Keep Learning! 📚"}
                            </h2>
                            <p className="text-[#6b7280]">
                                {score.percentage >= 70
                                    ? "You've demonstrated a solid understanding of the material."
                                    : "Review the topics below to strengthen your knowledge."}
                            </p>
                        </div>

                        {/* XP Earned */}
                        <div className="p-4 bg-[#28a745]/10 rounded-lg mb-6 text-center">
                            <p className="text-sm text-[#6b7280]">XP Earned</p>
                            <p className="text-3xl font-bold text-[#28a745]">
                                +{Math.round(score.percentage)}
                            </p>
                        </div>

                        {/* Category Breakdown */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-[#222222] mb-4">Performance by Category</h3>
                            <div className="space-y-4">
                                {Object.entries(categoryStats).map(([category, stats]) => {
                                    const percentage = stats.total > 0
                                        ? Math.round((stats.correct / stats.total) * 100)
                                        : 0;
                                    return (
                                        <div key={category}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-[#222222]">{category}</span>
                                                <span className={`text-sm font-medium ${percentage >= 70 ? "text-[#28a745]" : "text-[#f59e0b]"
                                                    }`}>
                                                    {stats.correct}/{stats.total} ({percentage}%)
                                                </span>
                                            </div>
                                            <div className="w-full h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${percentage >= 70 ? "bg-[#28a745]" : "bg-[#f59e0b]"
                                                        }`}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={restartQuiz}
                            >
                                <RiRefreshLine className="w-4 h-4 mr-2" />
                                Try Again
                            </Button>
                            <Link href="/assessments" className="flex-1">
                                <Button className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90">
                                    Back to Assessments
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
