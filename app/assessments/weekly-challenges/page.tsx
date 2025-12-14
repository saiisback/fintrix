"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    RiArrowLeftLine,
    RiArrowRightLine,
    RiCalendarLine,
    RiCheckLine,
    RiCloseLine,
    RiFireLine,
    RiFlashlightLine,
    RiGiftLine,
    RiLightbulbLine,
    RiQuestionLine,
    RiTimeLine,
    RiTrophyLine,
    RiMedalLine,
    RiGroupLine,
} from "react-icons/ri";
import Link from "next/link";

const currentWeek = {
    week: 24,
    year: 2024,
    startDate: "Dec 9, 2024",
    endDate: "Dec 15, 2024",
    theme: "Options Trading Mastery",
    description: "Master the fundamentals of options trading including Greeks, strategies, and risk management",
    totalParticipants: 1243,
    yourRank: 156,
    daysRemaining: 2,
};

const weeklyRewards = [
    { rank: "1st", reward: "500 XP + Premium Badge", icon: RiTrophyLine, color: "#ffd700" },
    { rank: "2nd-3rd", reward: "300 XP + Gold Badge", icon: RiMedalLine, color: "#c0c0c0" },
    { rank: "4th-10th", reward: "200 XP + Silver Badge", icon: RiMedalLine, color: "#cd7f32" },
    { rank: "Top 20%", reward: "100 XP + Bronze Badge", icon: RiMedalLine, color: "#0063b3" },
];

const challenges = [
    {
        id: 1,
        title: "Quick Fire Round",
        description: "Answer 10 rapid questions in 5 minutes",
        questions: 10,
        duration: "5 mins",
        xpReward: 50,
        status: "completed",
        score: 80,
        icon: RiFlashlightLine,
    },
    {
        id: 2,
        title: "Deep Dive",
        description: "Complex scenario-based questions on options strategies",
        questions: 5,
        duration: "15 mins",
        xpReward: 100,
        status: "available",
        score: null,
        icon: RiLightbulbLine,
    },
    {
        id: 3,
        title: "Case Study",
        description: "Analyze real market scenarios and make decisions",
        questions: 3,
        duration: "20 mins",
        xpReward: 150,
        status: "locked",
        score: null,
        icon: RiQuestionLine,
        unlockCondition: "Complete Deep Dive first",
    },
];

const leaderboard = [
    { rank: 1, name: "TradeMaster99", score: 980, avatar: "TM" },
    { rank: 2, name: "OptionsGuru", score: 945, avatar: "OG" },
    { rank: 3, name: "MarketWizard", score: 920, avatar: "MW" },
    { rank: 4, name: "StockNinja", score: 890, avatar: "SN" },
    { rank: 5, name: "BullRunner", score: 875, avatar: "BR" },
    { rank: 156, name: "You", score: 450, avatar: "YO", isYou: true },
];

const challengeQuestions = [
    {
        id: 1,
        question: "What does a positive Vega indicate for an options position?",
        options: [
            "The position loses value when volatility increases",
            "The position gains value when volatility increases",
            "The position is not affected by volatility",
            "The position is at maximum profit"
        ],
        correctAnswer: 1,
        explanation: "Positive Vega means the position benefits from increasing implied volatility. Long options have positive Vega."
    },
    {
        id: 2,
        question: "Which options strategy has unlimited profit potential and limited risk?",
        options: [
            "Short Call",
            "Short Put",
            "Long Call",
            "Covered Call"
        ],
        correctAnswer: 2,
        explanation: "A Long Call has limited risk (the premium paid) and unlimited profit potential as the stock can rise indefinitely."
    },
    {
        id: 3,
        question: "What is the maximum profit for a Bull Call Spread?",
        options: [
            "Unlimited",
            "Strike difference minus net premium",
            "Net premium received",
            "Strike price of long call"
        ],
        correctAnswer: 1,
        explanation: "Bull Call Spread max profit = (Higher Strike - Lower Strike) - Net Premium Paid."
    },
    {
        id: 4,
        question: "At-the-money options have the highest:",
        options: [
            "Delta",
            "Gamma",
            "Intrinsic value",
            "Time value"
        ],
        correctAnswer: 1,
        explanation: "ATM options have the highest Gamma because their Delta is most sensitive to underlying price changes around the strike."
    },
    {
        id: 5,
        question: "Which Greek measures the sensitivity of an option's price to interest rate changes?",
        options: [
            "Delta",
            "Theta",
            "Vega",
            "Rho"
        ],
        correctAnswer: 3,
        explanation: "Rho measures how much an option's price changes for every 1% change in interest rates."
    },
];

export default function WeeklyChallengesPage() {
    const [viewState, setViewState] = useState<"overview" | "challenge" | "results">("overview");
    const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(5).fill(null));
    const [showExplanation, setShowExplanation] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(15 * 60);

    // Timer effect
    useEffect(() => {
        if (viewState !== "challenge") return;

        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    setViewState("results");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [viewState]);

    const startChallenge = (challengeId: number) => {
        setSelectedChallenge(challengeId);
        setViewState("challenge");
        setCurrentQuestionIndex(0);
        setSelectedAnswers(Array(5).fill(null));
        setTimeRemaining(15 * 60);
    };

    const handleAnswerSelect = (answerIndex: number) => {
        if (showExplanation) return;
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestionIndex] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        setShowExplanation(false);
        if (currentQuestionIndex < challengeQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setViewState("results");
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
        challengeQuestions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswer) {
                correct++;
            }
        });
        return {
            correct,
            total: challengeQuestions.length,
            percentage: Math.round((correct / challengeQuestions.length) * 100),
        };
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const goBack = () => {
        setViewState("overview");
        setSelectedChallenge(null);
    };

    // Overview Screen
    if (viewState === "overview") {
        return (
            <AppLayout>
                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <Link href="/assessments">
                            <Button variant="ghost" size="icon">
                                <RiArrowLeftLine className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Weekly Challenges</h1>
                            <p className="text-[#6b7280] mt-1">Compete with other learners and climb the leaderboard</p>
                        </div>
                    </div>

                    {/* Current Week Banner */}
                    <Card className="border-0 shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-[#0063b3] via-[#004080] to-[#002855] p-6 text-white">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <RiCalendarLine className="w-5 h-5" />
                                        <span className="text-sm opacity-80">
                                            Week {currentWeek.week} • {currentWeek.startDate} - {currentWeek.endDate}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-1">{currentWeek.theme}</h2>
                                    <p className="text-white/80">{currentWeek.description}</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-center">
                                        <RiFireLine className="w-6 h-6 mx-auto mb-1 text-orange-400" />
                                        <p className="text-2xl font-bold">{currentWeek.daysRemaining}</p>
                                        <p className="text-xs opacity-80">Days Left</p>
                                    </div>
                                    <div className="text-center">
                                        <RiGroupLine className="w-6 h-6 mx-auto mb-1" />
                                        <p className="text-2xl font-bold">{currentWeek.totalParticipants.toLocaleString()}</p>
                                        <p className="text-xs opacity-80">Participants</p>
                                    </div>
                                    <div className="text-center">
                                        <RiTrophyLine className="w-6 h-6 mx-auto mb-1 text-yellow-400" />
                                        <p className="text-2xl font-bold">#{currentWeek.yourRank}</p>
                                        <p className="text-xs opacity-80">Your Rank</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Challenges */}
                        <div className="lg:col-span-2 space-y-4">
                            <h3 className="text-lg font-semibold text-[#222222]">This Week&apos;s Challenges</h3>
                            {challenges.map((challenge) => {
                                const IconComponent = challenge.icon;
                                const isLocked = challenge.status === "locked";
                                const isCompleted = challenge.status === "completed";

                                return (
                                    <Card
                                        key={challenge.id}
                                        className={`border-0 shadow-sm transition-all ${isLocked ? "opacity-60" : "hover:shadow-md"}`}
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${isCompleted
                                                            ? "bg-[#28a745]/10"
                                                            : isLocked
                                                                ? "bg-[#6b7280]/10"
                                                                : "bg-[#0063b3]/10"
                                                        }`}
                                                >
                                                    <IconComponent
                                                        className={`w-7 h-7 ${isCompleted
                                                                ? "text-[#28a745]"
                                                                : isLocked
                                                                    ? "text-[#6b7280]"
                                                                    : "text-[#0063b3]"
                                                            }`}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <h4 className="font-semibold text-[#222222]">{challenge.title}</h4>
                                                        {isCompleted && (
                                                            <Badge className="bg-[#28a745] text-white">
                                                                {challenge.score}%
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-[#6b7280] mb-3">{challenge.description}</p>
                                                    <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-4">
                                                        <div className="flex items-center gap-1">
                                                            <RiQuestionLine className="w-4 h-4" />
                                                            <span>{challenge.questions} questions</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <RiTimeLine className="w-4 h-4" />
                                                            <span>{challenge.duration}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <RiGiftLine className="w-4 h-4" />
                                                            <span>+{challenge.xpReward} XP</span>
                                                        </div>
                                                    </div>
                                                    {isLocked ? (
                                                        <p className="text-xs text-[#6b7280]">🔒 {challenge.unlockCondition}</p>
                                                    ) : (
                                                        <Button
                                                            className={`${isCompleted
                                                                    ? "bg-[#28a745] hover:bg-[#28a745]/90"
                                                                    : "bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                                }`}
                                                            onClick={() => startChallenge(challenge.id)}
                                                        >
                                                            {isCompleted ? "Retry Challenge" : "Start Challenge"}
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4">
                            {/* Rewards */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <RiGiftLine className="w-5 h-5 text-[#0063b3]" />
                                        Weekly Rewards
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="space-y-3">
                                        {weeklyRewards.map((reward, idx) => {
                                            const IconComponent = reward.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 p-2 rounded-lg bg-[#f4f4f4]"
                                                >
                                                    <IconComponent
                                                        className="w-5 h-5"
                                                        style={{ color: reward.color }}
                                                    />
                                                    <div className="flex-1">
                                                        <p className="font-medium text-sm text-[#222222]">
                                                            {reward.rank}
                                                        </p>
                                                        <p className="text-xs text-[#6b7280]">{reward.reward}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Leaderboard */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <RiTrophyLine className="w-5 h-5 text-[#f59e0b]" />
                                        Leaderboard
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="space-y-2">
                                        {leaderboard.map((player) => (
                                            <div
                                                key={player.rank}
                                                className={`flex items-center gap-3 p-2 rounded-lg ${player.isYou
                                                        ? "bg-[#0063b3]/10 border border-[#0063b3]/20"
                                                        : "bg-[#f4f4f4]"
                                                    }`}
                                            >
                                                <span
                                                    className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${player.rank === 1
                                                            ? "bg-yellow-400 text-white"
                                                            : player.rank === 2
                                                                ? "bg-gray-400 text-white"
                                                                : player.rank === 3
                                                                    ? "bg-orange-400 text-white"
                                                                    : "bg-[#e5e7eb] text-[#6b7280]"
                                                        }`}
                                                >
                                                    {player.rank}
                                                </span>
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${player.isYou
                                                            ? "bg-[#0063b3] text-white"
                                                            : "bg-[#e5e7eb] text-[#6b7280]"
                                                        }`}
                                                >
                                                    {player.avatar}
                                                </div>
                                                <div className="flex-1">
                                                    <p className={`font-medium text-sm ${player.isYou ? "text-[#0063b3]" : "text-[#222222]"}`}>
                                                        {player.name}
                                                    </p>
                                                </div>
                                                <span className="font-bold text-sm text-[#222222]">
                                                    {player.score}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
    }

    // Challenge Screen
    if (viewState === "challenge") {
        const currentQuestion = challengeQuestions[currentQuestionIndex];
        const progress = ((currentQuestionIndex + 1) / challengeQuestions.length) * 100;

        return (
            <AppLayout>
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-xl font-bold text-[#222222]">Deep Dive Challenge</h1>
                            <p className="text-sm text-[#6b7280]">
                                Question {currentQuestionIndex + 1} of {challengeQuestions.length}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" onClick={goBack}>
                                Exit
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
                                {currentQuestionIndex === challengeQuestions.length - 1 ? "Finish" : "Next"}
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
                                Challenge Complete! 🎉
                            </h2>
                            <p className="text-[#6b7280]">
                                You earned XP and moved up the leaderboard!
                            </p>
                        </div>

                        {/* Rewards Earned */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-[#28a745]/10 rounded-lg text-center">
                                <RiGiftLine className="w-8 h-8 text-[#28a745] mx-auto mb-2" />
                                <p className="text-2xl font-bold text-[#28a745]">+{Math.round(score.percentage)}</p>
                                <p className="text-sm text-[#6b7280]">XP Earned</p>
                            </div>
                            <div className="p-4 bg-[#0063b3]/10 rounded-lg text-center">
                                <RiTrophyLine className="w-8 h-8 text-[#0063b3] mx-auto mb-2" />
                                <p className="text-2xl font-bold text-[#0063b3]">#142</p>
                                <p className="text-sm text-[#6b7280]">New Rank (+14)</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button variant="outline" className="flex-1" onClick={() => startChallenge(2)}>
                                Try Again
                            </Button>
                            <Link href="/assessments/weekly-challenges" className="flex-1">
                                <Button className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90" onClick={goBack}>
                                    Back to Challenges
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
