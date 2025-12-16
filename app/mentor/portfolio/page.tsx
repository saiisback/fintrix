"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
    RiPieChartLine,
    RiShieldCheckLine,
    RiAlertLine,
    RiCheckboxCircleLine,
    RiCloseCircleLine,
    RiTimeLine,
    RiVideoLine,
    RiMicLine,
    RiFileTextLine,
    RiArrowRightLine,
    RiRefreshLine,
    RiHistoryLine,
    RiStarFill,
    RiLightbulbLine,
    RiArrowUpLine,
    RiArrowDownLine,
    RiSendPlaneLine,
} from "react-icons/ri";

// Mock data for portfolio review
const currentPortfolio = {
    totalValue: 1156780,
    invested: 1000000,
    returns: 15.68,
    holdings: [
        { symbol: "RELIANCE", name: "Reliance Industries", allocation: 18.5, value: 214000, returns: 12.4, sector: "Energy", holdingDays: 45 },
        { symbol: "HDFCBANK", name: "HDFC Bank", allocation: 22.3, value: 258000, returns: 8.2, sector: "Banking", holdingDays: 62 },
        { symbol: "TCS", name: "Tata Consultancy", allocation: 15.8, value: 182800, returns: -3.1, sector: "IT", holdingDays: 30 },
        { symbol: "INFY", name: "Infosys", allocation: 12.4, value: 143400, returns: 5.6, sector: "IT", holdingDays: 28 },
        { symbol: "ICICIBANK", name: "ICICI Bank", allocation: 10.2, value: 118000, returns: 18.9, sector: "Banking", holdingDays: 55 },
        { symbol: "BHARTIARTL", name: "Bharti Airtel", allocation: 8.5, value: 98300, returns: 22.1, sector: "Telecom", holdingDays: 40 },
        { symbol: "Cash", name: "Available Cash", allocation: 12.3, value: 142280, returns: 0, sector: "Cash", holdingDays: 0 },
    ],
};

const sectorExposure = [
    { sector: "Banking", allocation: 32.5, benchmark: 25, status: "high" },
    { sector: "IT", allocation: 28.2, benchmark: 20, status: "high" },
    { sector: "Energy", allocation: 18.5, benchmark: 15, status: "normal" },
    { sector: "Telecom", allocation: 8.5, benchmark: 10, status: "normal" },
    { sector: "Cash", allocation: 12.3, benchmark: 10, status: "normal" },
];

const previousReviews = [
    {
        id: 1,
        date: "Dec 10, 2024",
        mentor: "Dr. Priya Mehta",
        mentorAvatar: "/placeholder-user.jpg",
        type: "video",
        duration: "8 min",
        overallScore: 7.5,
        summary: "Good diversification but over-concentrated in banking sector. Consider reducing HDFC position.",
        improvements: ["Reduced banking exposure by 5%", "Added Telecom position"],
    },
    {
        id: 2,
        date: "Nov 25, 2024",
        mentor: "Rajesh Kumar",
        mentorAvatar: "/placeholder-user.jpg",
        type: "written",
        overallScore: 6.8,
        summary: "Heavy IT sector exposure during uncertain market. Entry timing on TCS could have been better.",
        improvements: ["Improved entry timing on subsequent trades"],
    },
    {
        id: 3,
        date: "Nov 10, 2024",
        mentor: "Dr. Priya Mehta",
        mentorAvatar: "/placeholder-user.jpg",
        type: "voice",
        duration: "5 min",
        overallScore: 7.2,
        summary: "Solid stock selection but holding period too short for value plays. Consider longer horizons.",
        improvements: ["Extended average holding period from 15 to 45 days"],
    },
];

const mentorFeedback = {
    overallScore: 7.8,
    reviewDate: "Dec 16, 2024",
    mentor: {
        name: "Dr. Priya Mehta",
        title: "Investment Analyst",
        avatar: "/placeholder-user.jpg",
    },
    categories: [
        { name: "Asset Allocation", score: 8, feedback: "Good cash reserve. Banking and IT concentration needs attention." },
        { name: "Risk Exposure", score: 7, feedback: "Moderate risk level. Could benefit from defensive sector exposure." },
        { name: "Entry Logic", score: 8, feedback: "Most entries show clear technical or fundamental reasoning." },
        { name: "Holding Strategy", score: 7.5, feedback: "Average holding period improved. Stick to your conviction trades." },
        { name: "Diversification", score: 8, feedback: "6 stocks is reasonable. Consider adding 2-3 more for better spread." },
    ],
    strengths: [
        "Maintaining healthy cash reserve (12%) for opportunities",
        "Strong conviction trades in ICICIBANK and BHARTIARTL showing good returns",
        "Clear sector thesis for banking allocation",
    ],
    improvements: [
        {
            issue: "Over-concentration in Banking (32.5%)",
            why: "High correlation between HDFC and ICICI. Both move similarly on sector news, doubling your banking risk.",
            suggestion: "Consider trimming HDFC position by 5-7% and rotating into FMCG or Pharma for defensive balance.",
        },
        {
            issue: "IT Sector Timing",
            why: "TCS entry was near recent highs when sector faced headwinds from US market uncertainty.",
            suggestion: "For sector bets, wait for confirmed support levels. Your INFY entry was better timed.",
        },
        {
            issue: "Missing Defensive Sectors",
            why: "Portfolio lacks FMCG, Pharma, or Consumer exposure which typically offset during corrections.",
            suggestion: "Consider allocating 10-15% to defensive sectors like HINDUNILVR or SUNPHARMA.",
        },
    ],
    keepDoing: [
        "Your position sizing is disciplined - no single stock over 25%",
        "Good practice of maintaining trading cash for opportunities",
        "Documenting entry logic for each trade helps review process",
    ],
};

const availableMentors = [
    { id: 1, name: "Dr. Priya Mehta", specialty: "Value Investing", rating: 4.9, reviews: 245, available: true },
    { id: 2, name: "Rajesh Kumar", specialty: "Technical Analysis", rating: 4.8, reviews: 189, available: true },
    { id: 3, name: "Anil Verma", specialty: "Derivatives", rating: 4.7, reviews: 156, available: false },
];

export default function PortfolioReviewPage() {
    const [activeTab, setActiveTab] = useState("current");
    const [reviewNote, setReviewNote] = useState("");
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Portfolio Review</h1>
                        <p className="text-[#6b7280] mt-1">Get expert feedback on your portfolio from experienced mentors</p>
                    </div>
                    <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                        <RiSendPlaneLine className="w-4 h-4 mr-2" />
                        Request New Review
                    </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="current">Current Review</TabsTrigger>
                        <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
                        <TabsTrigger value="history">Review History</TabsTrigger>
                    </TabsList>

                    {/* Current Review */}
                    <TabsContent value="current" className="space-y-6">
                        {/* Review Summary Card */}
                        <Card className="border-0 shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-[#0063b3] to-[#004080] p-6 text-white">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="w-14 h-14 ring-2 ring-white/20">
                                            <AvatarImage src={mentorFeedback.mentor.avatar} />
                                            <AvatarFallback className="bg-white text-[#0063b3] font-bold">
                                                {mentorFeedback.mentor.name.split(" ").map(n => n[0]).join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-lg">{mentorFeedback.mentor.name}</p>
                                            <p className="text-white/70">{mentorFeedback.mentor.title}</p>
                                            <p className="text-white/60 text-sm">Reviewed: {mentorFeedback.reviewDate}</p>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <p className="text-white/70 text-sm">Overall Score</p>
                                        <p className="text-4xl font-bold">{mentorFeedback.overallScore}/10</p>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                    {mentorFeedback.categories.map((cat) => (
                                        <div key={cat.name} className="text-center p-3 bg-[#f4f4f4] rounded-lg">
                                            <p className="text-2xl font-bold text-[#222222]">{cat.score}</p>
                                            <p className="text-xs text-[#6b7280] mt-1">{cat.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* What's Working */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader className="pb-3">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <RiCheckboxCircleLine className="w-5 h-5 text-[#28a745]" />
                                        What You're Doing Right
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {mentorFeedback.strengths.map((strength, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-[#28a745]/5 rounded-lg">
                                                <RiCheckboxCircleLine className="w-5 h-5 text-[#28a745] shrink-0 mt-0.5" />
                                                <p className="text-sm text-[#222222]">{strength}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Keep Doing */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader className="pb-3">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <RiRefreshLine className="w-5 h-5 text-[#0063b3]" />
                                        Keep Doing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {mentorFeedback.keepDoing.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-[#0063b3]/5 rounded-lg">
                                                <RiArrowRightLine className="w-5 h-5 text-[#0063b3] shrink-0 mt-0.5" />
                                                <p className="text-sm text-[#222222]">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Areas to Improve */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <RiLightbulbLine className="w-5 h-5 text-[#f59e0b]" />
                                    Areas to Improve
                                </CardTitle>
                                <CardDescription>Detailed feedback on what could be better and why</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {mentorFeedback.improvements.map((item, idx) => (
                                        <div key={idx} className="p-4 border border-[#e5e7eb] rounded-lg">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
                                                    <RiAlertLine className="w-4 h-4 text-[#f59e0b]" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-[#222222]">{item.issue}</h4>
                                                    <div className="mt-2 space-y-2">
                                                        <div className="p-2 bg-[#f4f4f4] rounded">
                                                            <p className="text-xs text-[#6b7280] font-medium">WHY THIS MATTERS</p>
                                                            <p className="text-sm text-[#222222] mt-1">{item.why}</p>
                                                        </div>
                                                        <div className="p-2 bg-[#28a745]/5 rounded">
                                                            <p className="text-xs text-[#28a745] font-medium">SUGGESTION</p>
                                                            <p className="text-sm text-[#222222] mt-1">{item.suggestion}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Category Details */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Detailed Category Feedback</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {mentorFeedback.categories.map((cat) => (
                                        <div key={cat.name} className="p-4 border border-[#e5e7eb] rounded-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-[#222222]">{cat.name}</h4>
                                                <Badge
                                                    className={`${cat.score >= 8
                                                            ? "bg-[#28a745]/10 text-[#28a745]"
                                                            : cat.score >= 6
                                                                ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                                                                : "bg-[#dc2626]/10 text-[#dc2626]"
                                                        }`}
                                                >
                                                    {cat.score}/10
                                                </Badge>
                                            </div>
                                            <Progress value={cat.score * 10} className="h-2 mb-2" />
                                            <p className="text-sm text-[#6b7280]">{cat.feedback}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Portfolio Tab */}
                    <TabsContent value="portfolio" className="space-y-6">
                        {/* Portfolio Summary */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <p className="text-sm text-[#6b7280]">Portfolio Value</p>
                                    <p className="text-2xl font-bold text-[#222222]">
                                        ₹{(currentPortfolio.totalValue / 100000).toFixed(2)}L
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <p className="text-sm text-[#6b7280]">Total Returns</p>
                                    <p className={`text-2xl font-bold ${currentPortfolio.returns >= 0 ? "text-[#28a745]" : "text-[#dc2626]"}`}>
                                        +{currentPortfolio.returns}%
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <p className="text-sm text-[#6b7280]">Holdings</p>
                                    <p className="text-2xl font-bold text-[#222222]">{currentPortfolio.holdings.length - 1}</p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <p className="text-sm text-[#6b7280]">Cash Available</p>
                                    <p className="text-2xl font-bold text-[#222222]">12.3%</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Holdings */}
                            <Card className="border-0 shadow-sm lg:col-span-2">
                                <CardHeader>
                                    <CardTitle>Current Holdings</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {currentPortfolio.holdings.map((holding) => (
                                            <div key={holding.symbol} className="flex items-center justify-between p-3 rounded-lg border border-[#e5e7eb]">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-[#0063b3]/10 flex items-center justify-center font-bold text-[#0063b3]">
                                                        {holding.symbol.slice(0, 2)}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-[#222222]">{holding.symbol}</p>
                                                        <p className="text-xs text-[#6b7280]">{holding.sector} • {holding.holdingDays}d</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium text-[#222222]">{holding.allocation}%</p>
                                                    <p className={`text-sm ${holding.returns >= 0 ? "text-[#28a745]" : "text-[#dc2626]"}`}>
                                                        {holding.returns >= 0 ? "+" : ""}{holding.returns}%
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sector Exposure */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg">Sector Exposure</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {sectorExposure.map((sector) => (
                                            <div key={sector.sector}>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm text-[#222222]">{sector.sector}</span>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium">{sector.allocation}%</span>
                                                        {sector.status === "high" && (
                                                            <RiArrowUpLine className="w-4 h-4 text-[#f59e0b]" />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="relative h-2 bg-[#f4f4f4] rounded-full">
                                                    <div
                                                        className={`absolute h-2 rounded-full ${sector.status === "high" ? "bg-[#f59e0b]" : "bg-[#0063b3]"
                                                            }`}
                                                        style={{ width: `${Math.min(sector.allocation * 2, 100)}%` }}
                                                    />
                                                    <div
                                                        className="absolute h-4 w-0.5 bg-[#222222] -top-1"
                                                        style={{ left: `${sector.benchmark * 2}%` }}
                                                    />
                                                </div>
                                                <p className="text-xs text-[#6b7280] mt-1">Benchmark: {sector.benchmark}%</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Submit for Review */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Submit Portfolio for Review</CardTitle>
                                <CardDescription>Add notes about your strategy or specific questions for the mentor</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    placeholder="E.g., I'm concerned about my banking exposure. Should I reduce before earnings season? Also, what defensive sectors would you recommend for my risk profile?"
                                    value={reviewNote}
                                    onChange={(e) => setReviewNote(e.target.value)}
                                    rows={4}
                                />
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
                                    <div>
                                        <p className="text-sm font-medium text-[#222222]">Choose Mentor</p>
                                        <div className="flex gap-2 mt-2">
                                            {availableMentors.map((mentor) => (
                                                <Badge
                                                    key={mentor.id}
                                                    variant="outline"
                                                    className={`cursor-pointer ${mentor.available ? "hover:bg-[#0063b3]/10" : "opacity-50"}`}
                                                >
                                                    {mentor.name}
                                                    {!mentor.available && " (Busy)"}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                        <RiSendPlaneLine className="w-4 h-4 mr-2" />
                                        Submit for Review
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Review History */}
                    <TabsContent value="history" className="space-y-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <RiHistoryLine className="w-5 h-5 text-[#0063b3]" />
                                    Past Reviews
                                </CardTitle>
                                <CardDescription>Track how your portfolio has evolved based on mentor feedback</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {previousReviews.map((review) => (
                                        <div key={review.id} className="p-4 border border-[#e5e7eb] rounded-lg hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-start gap-3">
                                                    <Avatar className="w-10 h-10">
                                                        <AvatarFallback className="bg-[#0063b3] text-white text-xs">
                                                            {review.mentor.split(" ").map(n => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <p className="font-medium text-[#222222]">{review.mentor}</p>
                                                            <Badge variant="secondary" className="text-xs gap-1">
                                                                {review.type === "video" && <RiVideoLine className="w-3 h-3" />}
                                                                {review.type === "voice" && <RiMicLine className="w-3 h-3" />}
                                                                {review.type === "written" && <RiFileTextLine className="w-3 h-3" />}
                                                                {review.type.charAt(0).toUpperCase() + review.type.slice(1)}
                                                                {review.duration && ` • ${review.duration}`}
                                                            </Badge>
                                                        </div>
                                                        <p className="text-xs text-[#6b7280]">{review.date}</p>
                                                        <p className="text-sm text-[#6b7280] mt-2">{review.summary}</p>
                                                        {review.improvements && review.improvements.length > 0 && (
                                                            <div className="mt-3">
                                                                <p className="text-xs font-medium text-[#28a745]">Actions Taken:</p>
                                                                <div className="flex flex-wrap gap-1 mt-1">
                                                                    {review.improvements.map((imp, idx) => (
                                                                        <Badge key={idx} className="bg-[#28a745]/10 text-[#28a745] text-xs">
                                                                            <RiCheckboxCircleLine className="w-3 h-3 mr-1" />
                                                                            {imp}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-center shrink-0">
                                                    <p className="text-2xl font-bold text-[#222222]">{review.overallScore}</p>
                                                    <p className="text-xs text-[#6b7280]">Score</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Progress Over Time */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Your Progress</CardTitle>
                                <CardDescription>How your portfolio review scores have improved</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 space-y-3">
                                        {previousReviews.slice().reverse().map((review, idx) => (
                                            <div key={review.id} className="flex items-center gap-3">
                                                <span className="text-xs text-[#6b7280] w-20">{review.date.slice(0, 6)}</span>
                                                <div className="flex-1 h-3 bg-[#f4f4f4] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-[#0063b3] to-[#28a745] rounded-full"
                                                        style={{ width: `${review.overallScore * 10}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm font-medium w-10">{review.overallScore}</span>
                                            </div>
                                        ))}
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-[#6b7280] w-20">Dec 16</span>
                                            <div className="flex-1 h-3 bg-[#f4f4f4] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-[#0063b3] to-[#28a745] rounded-full"
                                                    style={{ width: `${mentorFeedback.overallScore * 10}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-bold text-[#28a745] w-10">{mentorFeedback.overallScore}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-[#28a745]/10 rounded-lg flex items-center gap-3">
                                    <RiArrowUpLine className="w-5 h-5 text-[#28a745]" />
                                    <p className="text-sm text-[#222222]">
                                        Your score improved by <span className="font-bold text-[#28a745]">+1.0 points</span> over the last 3 reviews!
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
