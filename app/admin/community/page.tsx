"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiSearchLine,
    RiFlagLine,
    RiCheckLine,
    RiCloseLine,
    RiEyeLine,
    RiAlertLine,
    RiTimeLine,
    RiDeleteBinLine,
    RiShieldLine,
} from "react-icons/ri";

const flaggedContent = [
    {
        id: 1,
        type: "post",
        author: "User123",
        content: "This is a sample flagged post content that may violate community guidelines...",
        reason: "Spam/Promotion",
        reportedBy: 3,
        time: "2 hours ago",
        status: "pending",
    },
    {
        id: 2,
        type: "comment",
        author: "Trader456",
        content: "Inappropriate comment that was reported by multiple users...",
        reason: "Harassment",
        reportedBy: 5,
        time: "4 hours ago",
        status: "pending",
    },
    {
        id: 3,
        type: "post",
        author: "Investor789",
        content: "Misleading financial advice shared in the community...",
        reason: "Misinformation",
        reportedBy: 8,
        time: "6 hours ago",
        status: "pending",
    },
];

const recentActions = [
    { id: 1, action: "Post removed", by: "Admin1", target: "User789", reason: "Spam", time: "1 hour ago" },
    { id: 2, action: "Warning issued", by: "Admin2", target: "Trader456", reason: "Off-topic", time: "3 hours ago" },
    { id: 3, action: "User suspended", by: "Admin1", target: "Spammer123", reason: "Multiple violations", time: "1 day ago" },
];

export default function AdminCommunityPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Community Moderation</h1>
                    <p className="text-[#6b7280] mt-1">Review and moderate community content</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                                <RiFlagLine className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Pending Reports</p>
                                <p className="text-2xl font-bold text-[#222222]">12</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#28a745]/10 rounded-xl flex items-center justify-center">
                                <RiCheckLine className="w-6 h-6 text-[#28a745]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Resolved Today</p>
                                <p className="text-2xl font-bold text-[#222222]">28</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                <RiAlertLine className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Warnings Issued</p>
                                <p className="text-2xl font-bold text-[#222222]">5</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#0063b3]/10 rounded-xl flex items-center justify-center">
                                <RiShieldLine className="w-6 h-6 text-[#0063b3]" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6b7280]">Active Bans</p>
                                <p className="text-2xl font-bold text-[#222222]">3</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="flagged" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="flagged">Flagged Content ({flaggedContent.length})</TabsTrigger>
                        <TabsTrigger value="recent">Recent Actions</TabsTrigger>
                        <TabsTrigger value="appeals">Appeals</TabsTrigger>
                    </TabsList>

                    <TabsContent value="flagged">
                        <div className="space-y-4">
                            {flaggedContent.map((item) => (
                                <Card key={item.id} className="border-0 shadow-sm border-l-4 border-l-red-500">
                                    <CardContent className="p-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="secondary">{item.type}</Badge>
                                                    <Badge className="bg-red-500">{item.reason}</Badge>
                                                    <span className="text-sm text-[#6b7280] flex items-center gap-1">
                                                        <RiTimeLine className="w-3 h-3" />
                                                        {item.time}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Avatar className="w-6 h-6">
                                                        <AvatarFallback className="bg-[#6b7280] text-white text-xs">
                                                            {item.author.slice(0, 2)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span className="text-sm font-medium text-[#222222]">{item.author}</span>
                                                    <span className="text-sm text-red-500">Reported by {item.reportedBy} users</span>
                                                </div>
                                                <p className="text-[#6b7280] bg-[#f4f4f4] p-3 rounded-lg">{item.content}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Button variant="outline" size="sm">
                                                    <RiEyeLine className="w-4 h-4 mr-1" />
                                                    View
                                                </Button>
                                                <Button size="sm" className="bg-[#28a745] hover:bg-[#28a745]/90">
                                                    <RiCheckLine className="w-4 h-4 mr-1" />
                                                    Approve
                                                </Button>
                                                <Button size="sm" variant="destructive">
                                                    <RiDeleteBinLine className="w-4 h-4 mr-1" />
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="recent">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Recent Moderation Actions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActions.map((action) => (
                                        <div key={action.id} className="flex items-center justify-between p-4 rounded-lg bg-[#f4f4f4]">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.action.includes("removed") ? "bg-red-500/10" :
                                                        action.action.includes("Warning") ? "bg-orange-500/10" : "bg-purple-500/10"
                                                    }`}>
                                                    {action.action.includes("removed") && <RiDeleteBinLine className="w-5 h-5 text-red-500" />}
                                                    {action.action.includes("Warning") && <RiAlertLine className="w-5 h-5 text-orange-500" />}
                                                    {action.action.includes("suspended") && <RiShieldLine className="w-5 h-5 text-purple-500" />}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-[#222222]">{action.action}</p>
                                                    <p className="text-sm text-[#6b7280]">
                                                        {action.target} - {action.reason}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-[#6b7280]">by {action.by}</p>
                                                <p className="text-xs text-[#6b7280]">{action.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="appeals">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-8 text-center">
                                <RiCheckLine className="w-12 h-12 text-[#28a745] mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-[#222222]">No pending appeals</h3>
                                <p className="text-[#6b7280] mt-1">All user appeals have been reviewed</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
