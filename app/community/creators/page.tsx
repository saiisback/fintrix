"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiSearchLine,
    RiAddLine,
    RiGroupLine,
    RiUserStarLine,
    RiHashtag,
    RiVipCrownLine,
    RiCheckLine,
    RiArrowRightLine,
    RiBookOpenLine,
    RiSwordLine,
    RiDiscussLine,
    RiMegaphoneLine,
    RiStarFill,
    RiUserFollowLine,
} from "react-icons/ri";

// Mock data for Creator Spaces
const creatorSpaces = [
    {
        id: "space_001",
        name: "Pro Swing Traders",
        creator: {
            name: "Vikram Reddy",
            avatar: "/placeholder-user.jpg",
            verified: true,
            followers: 12450,
        },
        description: "Master swing trading with proven strategies. Daily analysis, live sessions, and community trading battles.",
        members: 3420,
        topics: ["Swing Trading", "Technical Analysis", "NIFTY"],
        channels: ["#daily-analysis", "#trade-ideas", "#learning"],
        color: "#8b5cf6",
        featured: true,
        isJoined: true,
    },
    {
        id: "space_002",
        name: "Options Mastery Hub",
        creator: {
            name: "Priya Sharma",
            avatar: "/placeholder-user.jpg",
            verified: true,
            followers: 8920,
        },
        description: "Learn options from basics to advanced strategies. Greeks, spreads, and real-time market insights.",
        members: 2180,
        topics: ["Options", "Derivatives", "Risk Management"],
        channels: ["#options-basics", "#strategy-lab", "#live-trades"],
        color: "#0063b3",
        featured: true,
        isJoined: false,
    },
    {
        id: "space_003",
        name: "Value Investors Circle",
        creator: {
            name: "Dr. Priya Mehta",
            avatar: "/placeholder-user.jpg",
            verified: true,
            followers: 15680,
        },
        description: "Long-term wealth building through fundamental analysis. Weekly stock picks and portfolio reviews.",
        members: 4560,
        topics: ["Value Investing", "Fundamental Analysis", "Long-term"],
        channels: ["#stock-analysis", "#q-earnings", "#portfolio-review"],
        color: "#28a745",
        featured: true,
        isJoined: false,
    },
    {
        id: "space_004",
        name: "Intraday Warriors",
        creator: {
            name: "Rahul Menon",
            avatar: "/placeholder-user.jpg",
            verified: false,
            followers: 5670,
        },
        description: "Fast-paced intraday trading community. Scalping strategies, quick setups, and live market battles.",
        members: 1890,
        topics: ["Intraday", "Scalping", "Price Action"],
        channels: ["#morning-setups", "#live-calls", "#battles"],
        color: "#f59e0b",
        featured: false,
        isJoined: true,
    },
    {
        id: "space_005",
        name: "Crypto Alpha",
        creator: {
            name: "Arjun Patel",
            avatar: "/placeholder-user.jpg",
            verified: true,
            followers: 7230,
        },
        description: "Navigate crypto markets with confidence. DeFi, altcoins, and market cycles explained.",
        members: 2340,
        topics: ["Cryptocurrency", "DeFi", "Altcoins"],
        channels: ["#crypto-news", "#defi-gems", "#nft-drops"],
        color: "#ec4899",
        featured: false,
        isJoined: false,
    },
    {
        id: "space_006",
        name: "Forex Fundamentals",
        creator: {
            name: "Neha Singh",
            avatar: "/placeholder-user.jpg",
            verified: true,
            followers: 4890,
        },
        description: "Currency trading simplified. Macro analysis, forex pairs, and global market insights.",
        members: 1560,
        topics: ["Forex", "Currency", "Macro"],
        channels: ["#forex-signals", "#macro-view", "#pairs-analysis"],
        color: "#14b8a6",
        featured: false,
        isJoined: false,
    },
];

const categories = ["All", "Stocks", "Options", "Forex", "Crypto", "Technical", "Fundamental"];

export default function CreatorSpacesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [joinedSpaces, setJoinedSpaces] = useState<string[]>(
        creatorSpaces.filter(s => s.isJoined).map(s => s.id)
    );

    const featuredSpaces = creatorSpaces.filter(s => s.featured);
    const userSpaces = creatorSpaces.filter(s => joinedSpaces.includes(s.id));

    const filteredSpaces = creatorSpaces.filter(space => {
        const matchesSearch = space.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            space.creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            space.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesSearch;
    });

    const toggleJoin = (spaceId: string) => {
        setJoinedSpaces(prev =>
            prev.includes(spaceId)
                ? prev.filter(id => id !== spaceId)
                : [...prev, spaceId]
        );
    };

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Creator Spaces</h1>
                        <p className="text-[#6b7280] mt-1">Join trading communities led by expert creators</p>
                    </div>
                    <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                        <RiAddLine className="w-4 h-4 mr-2" />
                        Create Your Space
                    </Button>
                </div>

                {/* Search */}
                <div className="relative max-w-md">
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                    <Input
                        placeholder="Search spaces, creators, or topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Featured Creators */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <RiVipCrownLine className="w-5 h-5 text-[#f59e0b]" />
                                <h2 className="text-lg font-semibold text-[#222222]">Featured Spaces</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {featuredSpaces.map((space) => (
                                    <Card
                                        key={space.id}
                                        className="border-0 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                                    >
                                        <div
                                            className="h-2"
                                            style={{ backgroundColor: space.color }}
                                        />
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-3">
                                                <Avatar className="w-12 h-12 ring-2 ring-offset-2" style={{ ringColor: space.color }}>
                                                    <AvatarImage src={space.creator.avatar} />
                                                    <AvatarFallback style={{ backgroundColor: space.color }} className="text-white font-bold">
                                                        {space.creator.name.split(" ").map(n => n[0]).join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-1">
                                                        <p className="font-semibold text-[#222222] truncate">{space.name}</p>
                                                        {space.creator.verified && (
                                                            <RiCheckLine className="w-4 h-4 text-[#0063b3] shrink-0" />
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-[#6b7280]">by {space.creator.name}</p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-[#6b7280] mt-3 line-clamp-2">{space.description}</p>
                                            <div className="flex items-center gap-4 mt-3 text-sm text-[#6b7280]">
                                                <span className="flex items-center gap-1">
                                                    <RiGroupLine className="w-4 h-4" />
                                                    {space.members.toLocaleString()}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <RiHashtag className="w-4 h-4" />
                                                    {space.channels.length} channels
                                                </span>
                                            </div>
                                            <Button
                                                className={`w-full mt-4 ${joinedSpaces.includes(space.id)
                                                        ? "bg-[#28a745] hover:bg-[#28a745]/90"
                                                        : "bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                    }`}
                                                onClick={() => toggleJoin(space.id)}
                                            >
                                                {joinedSpaces.includes(space.id) ? (
                                                    <>
                                                        <RiCheckLine className="w-4 h-4 mr-2" />
                                                        Joined
                                                    </>
                                                ) : (
                                                    <>
                                                        <RiUserFollowLine className="w-4 h-4 mr-2" />
                                                        Join Space
                                                    </>
                                                )}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Category Tabs */}
                        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                            <TabsList className="bg-[#f4f4f4] flex-wrap">
                                {categories.map(cat => (
                                    <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>

                        {/* All Spaces Grid */}
                        <div>
                            <h2 className="text-lg font-semibold text-[#222222] mb-4">Browse All Spaces</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredSpaces.map((space) => (
                                    <Card
                                        key={space.id}
                                        className="border-0 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-4">
                                                <Avatar className="w-14 h-14">
                                                    <AvatarImage src={space.creator.avatar} />
                                                    <AvatarFallback style={{ backgroundColor: space.color }} className="text-white font-bold text-lg">
                                                        {space.creator.name.split(" ").map(n => n[0]).join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-semibold text-[#222222]">{space.name}</h3>
                                                        {space.creator.verified && (
                                                            <Badge className="bg-[#0063b3]/10 text-[#0063b3] text-xs">
                                                                <RiCheckLine className="w-3 h-3 mr-1" />
                                                                Verified
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-[#6b7280]">by {space.creator.name} • {space.creator.followers.toLocaleString()} followers</p>
                                                    <p className="text-sm text-[#6b7280] mt-2 line-clamp-2">{space.description}</p>

                                                    {/* Topics */}
                                                    <div className="flex flex-wrap gap-1 mt-3">
                                                        {space.topics.map(topic => (
                                                            <Badge key={topic} variant="secondary" className="text-xs">
                                                                {topic}
                                                            </Badge>
                                                        ))}
                                                    </div>

                                                    {/* Channels Preview */}
                                                    <div className="flex items-center gap-3 mt-3 text-xs text-[#6b7280]">
                                                        {space.channels.slice(0, 3).map(channel => (
                                                            <span key={channel} className="flex items-center gap-1">
                                                                <RiHashtag className="w-3 h-3" />
                                                                {channel.replace("#", "")}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Footer */}
                                                    <div className="flex items-center justify-between mt-4">
                                                        <span className="flex items-center gap-1 text-sm text-[#6b7280]">
                                                            <RiGroupLine className="w-4 h-4" />
                                                            {space.members.toLocaleString()} members
                                                        </span>
                                                        <Button
                                                            size="sm"
                                                            className={`${joinedSpaces.includes(space.id)
                                                                    ? "bg-[#28a745] hover:bg-[#28a745]/90"
                                                                    : "bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                                }`}
                                                            onClick={() => toggleJoin(space.id)}
                                                        >
                                                            {joinedSpaces.includes(space.id) ? "Joined" : "Join"}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Your Spaces */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <RiUserStarLine className="w-5 h-5 text-[#0063b3]" />
                                    Your Spaces
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {userSpaces.length > 0 ? (
                                    <div className="space-y-3">
                                        {userSpaces.map(space => (
                                            <div key={space.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#f4f4f4] cursor-pointer transition-colors">
                                                <div
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                                                    style={{ backgroundColor: space.color }}
                                                >
                                                    {space.name.charAt(0)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-sm text-[#222222] truncate">{space.name}</p>
                                                    <p className="text-xs text-[#6b7280]">{space.members.toLocaleString()} members</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#6b7280]">You haven't joined any spaces yet</p>
                                )}
                            </CardContent>
                        </Card>

                        {/* What's Inside a Space */}
                        <Card className="border-0 shadow-sm bg-gradient-to-br from-[#f4f4f4] to-white">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">What's Inside a Space?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#0063b3]/10 flex items-center justify-center shrink-0">
                                            <RiDiscussLine className="w-4 h-4 text-[#0063b3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Discussions</p>
                                            <p className="text-xs text-[#6b7280]">Real-time market talks</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#28a745]/10 flex items-center justify-center shrink-0">
                                            <RiBookOpenLine className="w-4 h-4 text-[#28a745]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Learning Materials</p>
                                            <p className="text-xs text-[#6b7280]">Exclusive content & guides</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
                                            <RiSwordLine className="w-4 h-4 text-[#f59e0b]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Private Battles</p>
                                            <p className="text-xs text-[#6b7280]">Community trading competitions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center shrink-0">
                                            <RiMegaphoneLine className="w-4 h-4 text-[#8b5cf6]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Announcements</p>
                                            <p className="text-xs text-[#6b7280]">Updates from the creator</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Top Creators */}
                        <Card className="border-0 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">Top Creators</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {creatorSpaces.slice(0, 4).map((space, idx) => (
                                        <div key={space.id} className="flex items-center gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center text-xs font-bold">
                                                {idx + 1}
                                            </span>
                                            <Avatar className="w-8 h-8">
                                                <AvatarFallback style={{ backgroundColor: space.color }} className="text-white text-xs">
                                                    {space.creator.name.split(" ").map(n => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-[#222222] truncate">{space.creator.name}</p>
                                                <p className="text-xs text-[#6b7280]">{space.creator.followers.toLocaleString()} followers</p>
                                            </div>
                                            {space.creator.verified && (
                                                <RiCheckLine className="w-4 h-4 text-[#0063b3]" />
                                            )}
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
