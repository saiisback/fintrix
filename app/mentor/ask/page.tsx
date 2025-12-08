"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiRobot2Line,
    RiUserLine,
    RiSendPlane2Line,
    RiMessage3Line,
    RiTimeLine,
    RiCheckDoubleLine,
} from "react-icons/ri";
import { mentors } from "@/lib/mock-data";

const aiMessages = [
    {
        id: 1,
        type: "ai",
        content: "Hello! I'm your AI mentor assistant. I can help you with trading strategies, market analysis, and learning recommendations. What would you like to know?",
        time: "10:00 AM",
    },
    {
        id: 2,
        type: "user",
        content: "I'm confused about when to use RSI vs MACD indicators. Can you explain?",
        time: "10:02 AM",
    },
    {
        id: 3,
        type: "ai",
        content: "Great question! Here's a simple breakdown:\n\n**RSI (Relative Strength Index):**\n- Best for identifying overbought/oversold conditions\n- Use when looking for potential reversal points\n- Values above 70 = overbought, below 30 = oversold\n\n**MACD (Moving Average Convergence Divergence):**\n- Best for identifying trend direction and momentum\n- Use when analyzing trend strength\n- Look for crossovers between MACD line and signal line\n\n**When to use each:**\n- Use RSI in ranging/sideways markets\n- Use MACD in trending markets\n- Consider using both together for confirmation\n\nWould you like me to suggest some practice exercises in the simulator?",
        time: "10:02 AM",
    },
];

const humanConversations = [
    {
        id: 1,
        mentor: "Dr. Priya Mehta",
        lastMessage: "Your portfolio allocation looks good, but consider...",
        time: "2 hours ago",
        unread: 2,
    },
    {
        id: 2,
        mentor: "Rajesh Kumar",
        lastMessage: "The breakout setup you identified was perfect!",
        time: "Yesterday",
        unread: 0,
    },
];

export default function AskMentorPage() {
    const [aiInput, setAiInput] = useState("");
    const [messages, setMessages] = useState(aiMessages);
    const [activeTab, setActiveTab] = useState("ai");

    const handleSendMessage = () => {
        if (!aiInput.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            type: "user",
            content: aiInput,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages([...messages, newMessage]);
        setAiInput("");

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                id: messages.length + 2,
                type: "ai",
                content: "I understand your question. Based on your trading history and learning progress, I recommend focusing on risk management principles first. Would you like me to suggest specific courses or practice scenarios?",
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((prev) => [...prev, aiResponse]);
        }, 1000);
    };

    return (
        <AppLayout>
            <div className="h-[calc(100vh-8rem)]">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-2xl font-bold text-[#222222]">Ask Mentor</h1>
                            <p className="text-[#6b7280]">Get help from AI or human mentors</p>
                        </div>
                        <TabsList className="bg-[#f4f4f4]">
                            <TabsTrigger value="ai" className="gap-2">
                                <RiRobot2Line className="w-4 h-4" />
                                AI Mentor
                            </TabsTrigger>
                            <TabsTrigger value="human" className="gap-2">
                                <RiUserLine className="w-4 h-4" />
                                Human Mentors
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="ai" className="flex-1 m-0">
                        <Card className="border-0 shadow-sm h-full flex flex-col">
                            <CardHeader className="border-b border-[#e5e7eb] py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#0063b3] rounded-full flex items-center justify-center">
                                        <RiRobot2Line className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base">Fintrix AI Mentor</CardTitle>
                                        <p className="text-xs text-[#28a745]">Online</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <ScrollArea className="flex-1 p-4">
                                <div className="space-y-4">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-4 rounded-2xl ${msg.type === "user"
                                                        ? "bg-[#0063b3] text-white rounded-br-sm"
                                                        : "bg-[#f4f4f4] text-[#222222] rounded-bl-sm"
                                                    }`}
                                            >
                                                <p className="text-sm whitespace-pre-line">{msg.content}</p>
                                                <p
                                                    className={`text-xs mt-2 ${msg.type === "user" ? "text-white/70" : "text-[#6b7280]"
                                                        }`}
                                                >
                                                    {msg.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                            <div className="p-4 border-t border-[#e5e7eb]">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Ask anything about trading, investing, or the markets..."
                                        value={aiInput}
                                        onChange={(e) => setAiInput(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                        className="flex-1"
                                    />
                                    <Button
                                        onClick={handleSendMessage}
                                        className="bg-[#0063b3] hover:bg-[#0063b3]/90"
                                    >
                                        <RiSendPlane2Line className="w-5 h-5" />
                                    </Button>
                                </div>
                                <div className="flex gap-2 mt-3">
                                    {["How do I read candlestick patterns?", "Explain options Greeks", "Risk management tips"].map(
                                        (suggestion) => (
                                            <Button
                                                key={suggestion}
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setAiInput(suggestion)}
                                                className="text-xs"
                                            >
                                                {suggestion}
                                            </Button>
                                        )
                                    )}
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="human" className="flex-1 m-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                            {/* Conversations List */}
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg">Conversations</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-[#e5e7eb]">
                                        {humanConversations.map((conv) => (
                                            <div
                                                key={conv.id}
                                                className="p-4 hover:bg-[#f4f4f4] cursor-pointer"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <Avatar>
                                                        <AvatarFallback className="bg-[#0063b3] text-white">
                                                            {conv.mentor.split(" ").map((n) => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between">
                                                            <p className="font-medium text-[#222222]">{conv.mentor}</p>
                                                            <span className="text-xs text-[#6b7280]">{conv.time}</span>
                                                        </div>
                                                        <p className="text-sm text-[#6b7280] truncate">{conv.lastMessage}</p>
                                                    </div>
                                                    {conv.unread > 0 && (
                                                        <Badge className="bg-[#0063b3]">{conv.unread}</Badge>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Available Mentors */}
                            <Card className="border-0 shadow-sm lg:col-span-2">
                                <CardHeader>
                                    <CardTitle className="text-lg">Available Mentors</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {mentors.map((mentor) => (
                                            <div
                                                key={mentor.id}
                                                className="p-4 rounded-lg border border-[#e5e7eb] hover:border-[#0063b3]/30"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <Avatar>
                                                        <AvatarImage src={mentor.avatar} />
                                                        <AvatarFallback className="bg-[#0063b3] text-white">
                                                            {mentor.name.split(" ").map((n) => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="font-medium text-[#222222]">{mentor.name}</h4>
                                                            <Badge
                                                                variant="outline"
                                                                className={`text-xs ${mentor.availability === "Available"
                                                                        ? "text-[#28a745] border-[#28a745]"
                                                                        : "text-orange-500 border-orange-500"
                                                                    }`}
                                                            >
                                                                {mentor.availability}
                                                            </Badge>
                                                        </div>
                                                        <p className="text-sm text-[#0063b3]">{mentor.title}</p>
                                                        <div className="flex gap-1 mt-2">
                                                            {mentor.expertise.slice(0, 2).map((exp) => (
                                                                <Badge key={exp} variant="secondary" className="text-xs">
                                                                    {exp}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                        <Button size="sm" className="mt-3 w-full bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                            <RiMessage3Line className="w-4 h-4 mr-1" />
                                                            Start Chat
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
