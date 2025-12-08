"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
    RiChat3Line,
    RiTeamLine,
    RiSearchLine,
    RiAddLine,
    RiHeartLine,
    RiHeartFill,
    RiMessage2Line,
    RiShareLine,
    RiLineChartLine,
    RiTimeLine,
} from "react-icons/ri";
import { communityPosts, currentUser } from "@/lib/mock-data";

const rooms = [
    { id: 1, name: "Beginner Room", members: 2450, description: "For new traders learning the basics", color: "#28a745" },
    { id: 2, name: "Pro Room", members: 890, description: "Advanced strategies and analysis", color: "#0063b3" },
    { id: 3, name: "Forex Room", members: 1120, description: "Currency trading discussions", color: "#8b5cf6" },
    { id: 4, name: "US Markets Room", members: 780, description: "US stocks and ETFs", color: "#f59e0b" },
    { id: 5, name: "Crypto Room", members: 1560, description: "Cryptocurrency and DeFi", color: "#ec4899" },
];

export default function CommunityPage() {
    const [activeRoom, setActiveRoom] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [likedPosts, setLikedPosts] = useState<string[]>([]);

    const toggleLike = (postId: string) => {
        setLikedPosts((prev) =>
            prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
        );
    };

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Community</h1>
                        <p className="text-[#6b7280] mt-1">Connect with fellow traders and learn together</p>
                    </div>
                    <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                        <RiAddLine className="w-4 h-4 mr-2" />
                        Create Post
                    </Button>
                </div>

                {/* Search */}
                <div className="relative">
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                    <Input
                        placeholder="Search discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 max-w-md"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Rooms Sidebar */}
                    <Card className="border-0 shadow-sm lg:col-span-1">
                        <CardHeader>
                            <CardTitle className="text-lg">Discussion Rooms</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-[#e5e7eb]">
                                <button
                                    onClick={() => setActiveRoom("all")}
                                    className={`w-full p-4 text-left hover:bg-[#f4f4f4] ${activeRoom === "all" ? "bg-[#0063b3]/5" : ""
                                        }`}
                                >
                                    <p className="font-medium text-[#222222]">All Discussions</p>
                                    <p className="text-sm text-[#6b7280]">See all posts</p>
                                </button>
                                {rooms.map((room) => (
                                    <button
                                        key={room.id}
                                        onClick={() => setActiveRoom(room.name)}
                                        className={`w-full p-4 text-left hover:bg-[#f4f4f4] ${activeRoom === room.name ? "bg-[#0063b3]/5" : ""
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: room.color }}
                                            />
                                            <p className="font-medium text-[#222222]">{room.name}</p>
                                        </div>
                                        <p className="text-sm text-[#6b7280] mt-1">{room.members.toLocaleString()} members</p>
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Posts Feed */}
                    <div className="lg:col-span-2 space-y-4">
                        <Tabs defaultValue="trending">
                            <TabsList className="bg-[#f4f4f4]">
                                <TabsTrigger value="trending">Trending</TabsTrigger>
                                <TabsTrigger value="recent">Recent</TabsTrigger>
                                <TabsTrigger value="following">Following</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="space-y-4">
                            {communityPosts.map((post) => (
                                <Card key={post.id} className="border-0 shadow-sm">
                                    <CardContent className="p-4">
                                        <div className="flex items-start gap-3">
                                            <Avatar>
                                                <AvatarImage src={post.avatar} />
                                                <AvatarFallback className="bg-[#0063b3] text-white">
                                                    {post.author.split(" ").map((n) => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-semibold text-[#222222]">{post.author}</p>
                                                    <Badge variant="secondary" className="text-xs">{post.room}</Badge>
                                                    <span className="text-xs text-[#6b7280]">{post.time}</span>
                                                </div>
                                                <h4 className="font-medium text-[#222222] mt-2">{post.title}</h4>
                                                <p className="text-sm text-[#6b7280] mt-1">{post.content}</p>

                                                {post.hasChart && (
                                                    <div className="mt-3 p-4 bg-[#f4f4f4] rounded-lg flex items-center justify-center">
                                                        <RiLineChartLine className="w-16 h-16 text-[#0063b3]/30" />
                                                        <span className="ml-2 text-sm text-[#6b7280]">Chart attached</span>
                                                    </div>
                                                )}

                                                <div className="flex items-center gap-6 mt-4">
                                                    <button
                                                        onClick={() => toggleLike(post.id)}
                                                        className="flex items-center gap-1 text-sm text-[#6b7280] hover:text-red-500"
                                                    >
                                                        {likedPosts.includes(post.id) ? (
                                                            <RiHeartFill className="w-5 h-5 text-red-500" />
                                                        ) : (
                                                            <RiHeartLine className="w-5 h-5" />
                                                        )}
                                                        <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                                                    </button>
                                                    <button className="flex items-center gap-1 text-sm text-[#6b7280] hover:text-[#0063b3]">
                                                        <RiMessage2Line className="w-5 h-5" />
                                                        <span>{post.comments}</span>
                                                    </button>
                                                    <button className="flex items-center gap-1 text-sm text-[#6b7280] hover:text-[#0063b3]">
                                                        <RiShareLine className="w-5 h-5" />
                                                        <span>Share</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Top Contributors</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {[
                                        { name: "Vikram Reddy", posts: 156, likes: 2340 },
                                        { name: "Priya Sharma", posts: 124, likes: 1890 },
                                        { name: "Rahul Menon", posts: 98, likes: 1560 },
                                        { name: "Ananya Iyer", posts: 87, likes: 1234 },
                                    ].map((user, idx) => (
                                        <div key={user.name} className="flex items-center gap-3">
                                            <span className="w-6 h-6 bg-[#0063b3]/10 text-[#0063b3] rounded-full flex items-center justify-center text-xs font-bold">
                                                {idx + 1}
                                            </span>
                                            <Avatar className="w-8 h-8">
                                                <AvatarFallback className="bg-[#0063b3] text-white text-xs">
                                                    {user.name.split(" ").map((n) => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-[#222222]">{user.name}</p>
                                                <p className="text-xs text-[#6b7280]">{user.posts} posts</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Trending Topics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {["#NIFTY50", "#TechnicalAnalysis", "#SwingTrading", "#OptionsStrategy", "#BankNIFTY", "#ValueInvesting"].map(
                                        (tag) => (
                                            <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-[#0063b3]/10">
                                                {tag}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
