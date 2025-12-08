"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiSearchLine,
    RiUserLine,
    RiBookOpenLine,
    RiLineChartLine,
    RiMedalLine,
    RiArrowUpLine,
    RiArrowDownLine,
    RiFilter3Line,
} from "react-icons/ri";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const users = [
    { id: 1, name: "Arjun Sharma", email: "arjun@example.com", joined: "Oct 15, 2024", xp: 4520, courses: 5, trades: 156, status: "Active" },
    { id: 2, name: "Priya Singh", email: "priya@example.com", joined: "Sep 20, 2024", xp: 3890, courses: 4, trades: 89, status: "Active" },
    { id: 3, name: "Vikram Reddy", email: "vikram@example.com", joined: "Nov 5, 2024", xp: 2340, courses: 3, trades: 234, status: "Active" },
    { id: 4, name: "Sneha Iyer", email: "sneha@example.com", joined: "Nov 12, 2024", xp: 1560, courses: 2, trades: 45, status: "Inactive" },
    { id: 5, name: "Rahul Menon", email: "rahul@example.com", joined: "Oct 28, 2024", xp: 3210, courses: 4, trades: 112, status: "Active" },
];

const userActivityData = [
    { hour: "00", active: 120 },
    { hour: "04", active: 45 },
    { hour: "08", active: 340 },
    { hour: "12", active: 890 },
    { hour: "16", active: 1200 },
    { hour: "20", active: 780 },
];

const userDistribution = [
    { name: "Beginner", value: 45, color: "#28a745" },
    { name: "Intermediate", value: 35, color: "#0063b3" },
    { name: "Advanced", value: 15, color: "#8b5cf6" },
    { name: "Expert", value: 5, color: "#f59e0b" },
];

export default function AdminUsersPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">User Analytics</h1>
                    <p className="text-[#6b7280] mt-1">Monitor user activity and engagement</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Total Users</p>
                                    <p className="text-2xl font-bold text-[#222222]">25,678</p>
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
                                    <p className="text-sm text-[#6b7280]">Active Today</p>
                                    <p className="text-2xl font-bold text-[#222222]">3,456</p>
                                </div>
                                <Badge className="bg-[#28a745]">+12%</Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Avg Session</p>
                                    <p className="text-2xl font-bold text-[#222222]">24 min</p>
                                </div>
                                <Badge className="bg-[#28a745]">+5%</Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#6b7280]">Retention Rate</p>
                                    <p className="text-2xl font-bold text-[#222222]">78%</p>
                                </div>
                                <Badge className="bg-[#28a745]">+3%</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-sm lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Daily Activity Pattern</CardTitle>
                            <CardDescription>Active users by hour</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={userActivityData}>
                                        <defs>
                                            <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0063b3" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#0063b3" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="hour" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <Tooltip contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: "8px", color: "#fff" }} />
                                        <Area type="monotone" dataKey="active" stroke="#0063b3" strokeWidth={2} fill="url(#activityGradient)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>User Levels</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={userDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={2}>
                                            {userDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: "8px", color: "#fff" }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-4 justify-center">
                                {userDistribution.map((item) => (
                                    <div key={item.name} className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-sm text-[#6b7280]">{item.name} ({item.value}%)</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* User Table */}
                <Card className="border-0 shadow-sm">
                    <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <CardTitle>All Users</CardTitle>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                                    <Input
                                        placeholder="Search users..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-9 w-64"
                                    />
                                </div>
                                <Button variant="outline">
                                    <RiFilter3Line className="w-4 h-4 mr-2" />
                                    Filter
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">User</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Joined</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">XP</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Courses</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Trades</th>
                                        <th className="text-center py-3 px-4 text-sm font-medium text-[#6b7280]">Status</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarFallback className="bg-[#0063b3] text-white">
                                                            {user.name.split(" ").map((n) => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium text-[#222222]">{user.name}</p>
                                                        <p className="text-sm text-[#6b7280]">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-[#6b7280]">{user.joined}</td>
                                            <td className="py-4 px-4 text-right font-medium text-[#222222]">{user.xp.toLocaleString()}</td>
                                            <td className="py-4 px-4 text-right text-[#222222]">{user.courses}</td>
                                            <td className="py-4 px-4 text-right text-[#222222]">{user.trades}</td>
                                            <td className="py-4 px-4 text-center">
                                                <Badge className={`${user.status === "Active" ? "bg-[#28a745]" : "bg-[#6b7280]"}`}>
                                                    {user.status}
                                                </Badge>
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <Button variant="outline" size="sm">View Profile</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
