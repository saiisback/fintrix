"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    RiUserStarLine,
    RiStarFill,
    RiMessage3Line,
    RiCalendarLine,
    RiArrowRightLine,
    RiBookOpenLine,
    RiLineChartLine,
    RiLightbulbLine,
} from "react-icons/ri";
import Link from "next/link";
import { mentors } from "@/lib/mock-data";

const upcomingSessions = [
    { id: 1, mentor: "Dr. Priya Mehta", topic: "Portfolio Review", date: "Dec 10, 2024", time: "3:00 PM" },
    { id: 2, mentor: "Rajesh Kumar", topic: "Technical Analysis Q&A", date: "Dec 12, 2024", time: "5:00 PM" },
];

const recentAdvice = [
    {
        id: 1,
        mentor: "Dr. Priya Mehta",
        advice: "Consider reducing your banking exposure and diversifying into healthcare and IT sectors.",
        date: "Dec 5, 2024",
    },
    {
        id: 2,
        mentor: "Rajesh Kumar",
        advice: "Your entry timing on breakout trades is improving. Focus on trailing stop losses next.",
        date: "Dec 3, 2024",
    },
];

export default function MentorPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Mentor Dashboard</h1>
                        <p className="text-[#6b7280] mt-1">Get personalized guidance from expert mentors</p>
                    </div>
                    <Button asChild className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                        <Link href="/mentor/ask">
                            <RiMessage3Line className="w-4 h-4 mr-2" />
                            Ask a Mentor
                        </Link>
                    </Button>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                            <Link href="/mentor/portfolio" className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                    <RiLineChartLine className="w-6 h-6 text-[#0063b3]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[#222222]">Portfolio Review</p>
                                    <p className="text-sm text-[#6b7280]">Get expert feedback</p>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                            <Link href="/mentor/news-learning" className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#28a745]/10 rounded-xl flex items-center justify-center">
                                    <RiBookOpenLine className="w-6 h-6 text-[#28a745]" />
                                </div>
                                <div>
                                    <p className="font-medium text-[#222222]">News to Learning</p>
                                    <p className="text-sm text-[#6b7280]">Convert news to lessons</p>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                            <Link href="/mentor/reports" className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                    <RiLightbulbLine className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <p className="font-medium text-[#222222]">Improvement Reports</p>
                                    <p className="text-sm text-[#6b7280]">Personalized insights</p>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                            <Link href="/mentor/ask" className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                    <RiMessage3Line className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <p className="font-medium text-[#222222]">Ask Mentor</p>
                                    <p className="text-sm text-[#6b7280]">AI + Human support</p>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Mentors */}
                    <div className="lg:col-span-2">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Your Mentors</CardTitle>
                                <CardDescription>Expert guidance at your fingertips</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {mentors.map((mentor) => (
                                        <div
                                            key={mentor.id}
                                            className="flex items-start gap-4 p-4 rounded-lg border border-[#e5e7eb] hover:border-[#0063b3]/30 transition-colors"
                                        >
                                            <Avatar className="w-14 h-14">
                                                <AvatarImage src={mentor.avatar} />
                                                <AvatarFallback className="bg-[#0063b3] text-white">
                                                    {mentor.name.split(" ").map((n) => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h4 className="font-semibold text-[#222222]">{mentor.name}</h4>
                                                        <p className="text-sm text-[#0063b3]">{mentor.title}</p>
                                                    </div>
                                                    <Badge
                                                        variant="outline"
                                                        className={`${mentor.availability === "Available"
                                                                ? "text-[#28a745] border-[#28a745]"
                                                                : "text-orange-500 border-orange-500"
                                                            }`}
                                                    >
                                                        {mentor.availability}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-[#6b7280] mt-2">{mentor.bio}</p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {mentor.expertise.map((exp) => (
                                                        <Badge key={exp} variant="secondary" className="text-xs">
                                                            {exp}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-4 mt-3 text-sm">
                                                    <span className="flex items-center gap-1 text-[#6b7280]">
                                                        <RiStarFill className="w-4 h-4 text-yellow-500" />
                                                        {mentor.rating}
                                                    </span>
                                                    <span className="text-[#6b7280]">{mentor.students.toLocaleString()} students</span>
                                                    <span className="text-[#6b7280]">{mentor.experience} experience</span>
                                                </div>
                                                <div className="flex gap-2 mt-4">
                                                    <Button size="sm" className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                        <RiMessage3Line className="w-4 h-4 mr-1" />
                                                        Message
                                                    </Button>
                                                    <Button size="sm" variant="outline">
                                                        <RiCalendarLine className="w-4 h-4 mr-1" />
                                                        Book Session
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {upcomingSessions.length > 0 ? (
                                    <div className="space-y-3">
                                        {upcomingSessions.map((session) => (
                                            <div key={session.id} className="p-3 bg-[#f4f4f4] rounded-lg">
                                                <p className="font-medium text-[#222222]">{session.topic}</p>
                                                <p className="text-sm text-[#6b7280]">with {session.mentor}</p>
                                                <div className="flex items-center gap-2 mt-2 text-sm text-[#0063b3]">
                                                    <RiCalendarLine className="w-4 h-4" />
                                                    <span>{session.date} at {session.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#6b7280]">No upcoming sessions</p>
                                )}
                                <Button variant="outline" className="w-full mt-4">
                                    View All Sessions
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Recent Advice</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentAdvice.map((item) => (
                                        <div key={item.id} className="pb-4 border-b border-[#e5e7eb] last:border-0 last:pb-0">
                                            <p className="text-sm text-[#222222]">&quot;{item.advice}&quot;</p>
                                            <p className="text-xs text-[#6b7280] mt-2">
                                                {item.mentor} - {item.date}
                                            </p>
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
