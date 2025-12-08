"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    RiUserLine,
    RiBookOpenLine,
    RiCalendarLine,
    RiArrowUpLine,
    RiArrowDownLine,
    RiLineChartLine,
    RiStackLine,
    RiMedalLine,
    RiTeamLine,
    RiSettingsLine,
    RiArrowRightLine,
} from "react-icons/ri";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import Link from "next/link";
import { adminStats } from "@/lib/mock-data";

const userGrowthData = [
    { month: "Jul", users: 12500 },
    { month: "Aug", users: 14200 },
    { month: "Sep", users: 16800 },
    { month: "Oct", users: 19400 },
    { month: "Nov", users: 22100 },
    { month: "Dec", users: 25600 },
];

const courseEngagement = [
    { name: "Stock Basics", enrolled: 4500, completed: 3200 },
    { name: "Tech Analysis", enrolled: 3800, completed: 2100 },
    { name: "Options Trade", enrolled: 2900, completed: 1400 },
    { name: "Value Invest", enrolled: 2400, completed: 1800 },
];

const recentActivities = [
    { id: 1, action: "New course published", details: "Advanced Options Strategies", time: "2 hours ago", type: "course" },
    { id: 2, action: "User milestone", details: "1000th certificate issued", time: "5 hours ago", type: "achievement" },
    { id: 3, action: "Content flagged", details: "Community post needs review", time: "8 hours ago", type: "moderation" },
    { id: 4, action: "Creator application", details: "New mentor application pending", time: "1 day ago", type: "creator" },
];

export default function AdminPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Admin Dashboard</h1>
                        <p className="text-[#6b7280] mt-1">Platform overview and management</p>
                    </div>
                    <Button variant="outline">
                        <RiSettingsLine className="w-4 h-4 mr-2" />
                        Settings
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Total Users</p>
                                    <p className="text-2xl font-bold text-[#222222]">{adminStats.totalUsers.toLocaleString()}</p>
                                    <div className="flex items-center gap-1 text-sm text-[#28a745] mt-1">
                                        <RiArrowUpLine className="w-4 h-4" />
                                        <span>+{adminStats.newUsersThisMonth} this month</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                    <RiUserLine className="w-6 h-6 text-[#0063b3]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Active Courses</p>
                                    <p className="text-2xl font-bold text-[#222222]">{adminStats.activeCourses}</p>
                                    <div className="flex items-center gap-1 text-sm text-[#28a745] mt-1">
                                        <RiArrowUpLine className="w-4 h-4" />
                                        <span>+5 this month</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-[#28a745]/10 rounded-xl flex items-center justify-center">
                                    <RiBookOpenLine className="w-6 h-6 text-[#28a745]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Trades Today</p>
                                    <p className="text-2xl font-bold text-[#222222]">{adminStats.tradesToday.toLocaleString()}</p>
                                    <div className="flex items-center gap-1 text-sm text-[#28a745] mt-1">
                                        <RiArrowUpLine className="w-4 h-4" />
                                        <span>+12% vs yesterday</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                    <RiLineChartLine className="w-6 h-6 text-purple-500" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Certificates Issued</p>
                                    <p className="text-2xl font-bold text-[#222222]">{adminStats.certificatesIssued.toLocaleString()}</p>
                                    <div className="flex items-center gap-1 text-sm text-[#28a745] mt-1">
                                        <RiArrowUpLine className="w-4 h-4" />
                                        <span>+85 this week</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                    <RiMedalLine className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>User Growth</CardTitle>
                            <CardDescription>Monthly active users trend</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={userGrowthData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: "8px", color: "#fff" }}
                                            formatter={(value: number) => [`${value.toLocaleString()} users`, ""]}
                                        />
                                        <Line type="monotone" dataKey="users" stroke="#0063b3" strokeWidth={3} dot={{ fill: "#0063b3" }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Course Engagement</CardTitle>
                            <CardDescription>Enrollment vs completion rates</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={courseEngagement}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: "8px", color: "#fff" }}
                                        />
                                        <Bar dataKey="enrolled" fill="#0063b3" name="Enrolled" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="completed" fill="#28a745" name="Completed" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions & Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Quick Actions */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button asChild variant="outline" className="w-full justify-between">
                                <Link href="/admin/courses">
                                    <span className="flex items-center gap-2">
                                        <RiBookOpenLine className="w-4 h-4" />
                                        Manage Courses
                                    </span>
                                    <RiArrowRightLine className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full justify-between">
                                <Link href="/admin/quiz-bank">
                                    <span className="flex items-center gap-2">
                                        <RiStackLine className="w-4 h-4" />
                                        Quiz Bank
                                    </span>
                                    <RiArrowRightLine className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full justify-between">
                                <Link href="/admin/users">
                                    <span className="flex items-center gap-2">
                                        <RiUserLine className="w-4 h-4" />
                                        User Analytics
                                    </span>
                                    <RiArrowRightLine className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full justify-between">
                                <Link href="/admin/community">
                                    <span className="flex items-center gap-2">
                                        <RiTeamLine className="w-4 h-4" />
                                        Moderation
                                    </span>
                                    <RiArrowRightLine className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full justify-between">
                                <Link href="/admin/creators">
                                    <span className="flex items-center gap-2">
                                        <RiMedalLine className="w-4 h-4" />
                                        Creator Approvals
                                    </span>
                                    <RiArrowRightLine className="w-4 h-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="border-0 shadow-sm lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentActivities.map((activity) => (
                                    <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-[#e5e7eb] last:border-0 last:pb-0">
                                        <div
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${activity.type === "course"
                                                    ? "bg-[#0063b3]/10"
                                                    : activity.type === "achievement"
                                                        ? "bg-[#28a745]/10"
                                                        : activity.type === "moderation"
                                                            ? "bg-orange-500/10"
                                                            : "bg-purple-500/10"
                                                }`}
                                        >
                                            {activity.type === "course" && <RiBookOpenLine className="w-5 h-5 text-[#0063b3]" />}
                                            {activity.type === "achievement" && <RiMedalLine className="w-5 h-5 text-[#28a745]" />}
                                            {activity.type === "moderation" && <RiTeamLine className="w-5 h-5 text-orange-500" />}
                                            {activity.type === "creator" && <RiUserLine className="w-5 h-5 text-purple-500" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-[#222222]">{activity.action}</p>
                                            <p className="text-sm text-[#6b7280]">{activity.details}</p>
                                            <p className="text-xs text-[#6b7280] mt-1">{activity.time}</p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            View
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
