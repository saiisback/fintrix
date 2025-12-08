"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
    RiArrowUpLine,
    RiArrowDownLine,
    RiSearchLine,
    RiTimeLine,
    RiBookmarkLine,
    RiExternalLinkLine,
    RiRobot2Line,
    RiLightbulbLine,
    RiCalendarEventLine,
} from "react-icons/ri";
import { news } from "@/lib/mock-data";

const categories = ["All", "Economy", "Earnings", "Sector", "Regulation", "Auto", "Tech"];

const earningsCalendar = [
    { company: "Reliance Industries", date: "Dec 15, 2024", time: "After Market", expected: "Q3 Results" },
    { company: "TCS", date: "Dec 18, 2024", time: "Before Market", expected: "Q3 Results" },
    { company: "HDFC Bank", date: "Dec 20, 2024", time: "After Market", expected: "Q3 Results" },
    { company: "Infosys", date: "Dec 22, 2024", time: "Before Market", expected: "Q3 Results" },
    { company: "ICICI Bank", date: "Dec 24, 2024", time: "After Market", expected: "Q3 Results" },
];

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedAI, setExpandedAI] = useState<string | null>(null);

    const filteredNews = news.filter((item) => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Market News</h1>
                        <p className="text-[#6b7280] mt-1">Stay updated with the latest market news and events</p>
                    </div>
                    <div className="relative w-full lg:w-80">
                        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                        <Input
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>

                <Tabs defaultValue="feed" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="feed">Real-Time Feed</TabsTrigger>
                        <TabsTrigger value="categories">Categories</TabsTrigger>
                        <TabsTrigger value="earnings">Earnings & Events</TabsTrigger>
                    </TabsList>

                    <TabsContent value="feed">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-4">
                                {/* Category Filter */}
                                <div className="flex gap-2 flex-wrap">
                                    {categories.map((cat) => (
                                        <Button
                                            key={cat}
                                            variant={selectedCategory === cat ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setSelectedCategory(cat)}
                                            className={selectedCategory === cat ? "bg-[#0063b3]" : ""}
                                        >
                                            {cat}
                                        </Button>
                                    ))}
                                </div>

                                {/* News Feed */}
                                <div className="space-y-4">
                                    {filteredNews.map((item) => (
                                        <Card key={item.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                                            <CardContent className="p-4">
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className={`w-1 h-full min-h-[80px] rounded-full ${item.impact === "positive"
                                                                ? "bg-[#28a745]"
                                                                : item.impact === "negative"
                                                                    ? "bg-red-500"
                                                                    : "bg-[#6b7280]"
                                                            }`}
                                                    />
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div>
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <Badge variant="secondary" className="text-xs">
                                                                        {item.category}
                                                                    </Badge>
                                                                    <span className="text-xs text-[#6b7280] flex items-center gap-1">
                                                                        <RiTimeLine className="w-3 h-3" />
                                                                        {item.time}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-semibold text-[#222222] mb-1">{item.title}</h3>
                                                                <p className="text-sm text-[#6b7280]">{item.summary}</p>
                                                                <p className="text-xs text-[#6b7280] mt-2">Source: {item.source}</p>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <Button variant="ghost" size="icon" className="shrink-0">
                                                                    <RiBookmarkLine className="w-4 h-4" />
                                                                </Button>
                                                                <Button variant="ghost" size="icon" className="shrink-0">
                                                                    <RiExternalLinkLine className="w-4 h-4" />
                                                                </Button>
                                                            </div>
                                                        </div>

                                                        {/* AI Summary Toggle */}
                                                        <div className="mt-3">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() =>
                                                                    setExpandedAI(expandedAI === item.id ? null : item.id)
                                                                }
                                                                className="text-[#0063b3] border-[#0063b3]/30"
                                                            >
                                                                <RiRobot2Line className="w-4 h-4 mr-2" />
                                                                {expandedAI === item.id ? "Hide AI Analysis" : "What this means"}
                                                            </Button>

                                                            {expandedAI === item.id && (
                                                                <div className="mt-3 p-4 bg-[#0063b3]/5 rounded-lg border border-[#0063b3]/20">
                                                                    <div className="flex items-start gap-3">
                                                                        <RiLightbulbLine className="w-5 h-5 text-[#0063b3] shrink-0 mt-0.5" />
                                                                        <div>
                                                                            <p className="font-medium text-[#0063b3] text-sm">AI Analysis</p>
                                                                            <p className="text-sm text-[#6b7280] mt-1">{item.aiSummary}</p>
                                                                            {item.relatedStock && (
                                                                                <div className="mt-2 flex items-center gap-2">
                                                                                    <Badge className="bg-[#0063b3] text-white">
                                                                                        Related: {item.relatedStock}
                                                                                    </Badge>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
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
                                        <CardTitle className="text-lg">Trending Topics</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {["RBI Policy", "Q3 Earnings", "US Fed", "IT Sector", "Oil Prices"].map((topic, idx) => (
                                                <div
                                                    key={topic}
                                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#f4f4f4] cursor-pointer"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-6 h-6 bg-[#0063b3]/10 text-[#0063b3] rounded flex items-center justify-center text-xs font-bold">
                                                            {idx + 1}
                                                        </span>
                                                        <span className="text-sm font-medium text-[#222222]">{topic}</span>
                                                    </div>
                                                    <Badge variant="secondary" className="text-xs">
                                                        {Math.floor(Math.random() * 50) + 10} articles
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Market Sentiment</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-[#6b7280]">Bullish</span>
                                                <span className="text-sm text-[#6b7280]">Bearish</span>
                                            </div>
                                            <div className="h-3 bg-[#e5e7eb] rounded-full overflow-hidden flex">
                                                <div className="h-full bg-[#28a745]" style={{ width: "62%" }} />
                                                <div className="h-full bg-red-500" style={{ width: "38%" }} />
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#28a745] font-medium">62% Bullish</span>
                                                <span className="text-red-500 font-medium">38% Bearish</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="categories">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {["Economy", "Earnings", "Sector", "Regulation", "Global", "Crypto"].map((category) => (
                                <Card key={category} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-semibold text-[#222222]">{category}</h3>
                                        <p className="text-sm text-[#6b7280] mt-1">
                                            {Math.floor(Math.random() * 20) + 5} new articles today
                                        </p>
                                        <div className="mt-4 space-y-2">
                                            {news
                                                .filter((n) => n.category === category)
                                                .slice(0, 2)
                                                .map((n) => (
                                                    <p key={n.id} className="text-sm text-[#222222] line-clamp-1">
                                                        {n.title}
                                                    </p>
                                                ))}
                                        </div>
                                        <Button variant="outline" size="sm" className="mt-4">
                                            View All
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="earnings">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <RiCalendarEventLine className="w-5 h-5 text-[#0063b3]" />
                                    <CardTitle>Upcoming Earnings</CardTitle>
                                </div>
                                <CardDescription>Quarterly results scheduled this month</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-[#e5e7eb]">
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Company</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Date</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Time</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Expected</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {earningsCalendar.map((earning, idx) => (
                                                <tr key={idx} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                                    <td className="py-4 px-4 font-medium text-[#222222]">{earning.company}</td>
                                                    <td className="py-4 px-4 text-[#6b7280]">{earning.date}</td>
                                                    <td className="py-4 px-4">
                                                        <Badge variant="secondary">{earning.time}</Badge>
                                                    </td>
                                                    <td className="py-4 px-4 text-[#6b7280]">{earning.expected}</td>
                                                    <td className="py-4 px-4 text-right">
                                                        <Button variant="outline" size="sm">
                                                            Set Reminder
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
