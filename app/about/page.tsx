"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    RiLineChartLine,
    RiTeamLine,
    RiTrophyLine,
    RiLightbulbLine,
    RiHeartLine,
    RiGlobalLine,
} from "react-icons/ri";

const team = [
    { name: "Vikram Sharma", role: "CEO & Founder", bio: "Former Goldman Sachs, IIT Delhi" },
    { name: "Priya Mehta", role: "Chief Learning Officer", bio: "10+ years in EdTech" },
    { name: "Rajesh Kumar", role: "Head of Trading", bio: "Ex-NSE, 15 years experience" },
    { name: "Ananya Iyer", role: "VP of Technology", bio: "Former Google, IIT Bombay" },
];

const stats = [
    { value: "25,000+", label: "Active Learners" },
    { value: "50+", label: "Expert Courses" },
    { value: "500K+", label: "Virtual Trades" },
    { value: "98%", label: "Satisfaction Rate" },
];

const values = [
    {
        icon: RiLightbulbLine,
        title: "Practical Learning",
        description: "We believe in learning by doing. Our simulator and case studies provide hands-on experience.",
    },
    {
        icon: RiTeamLine,
        title: "Community First",
        description: "Learning is better together. Our community connects traders at all levels.",
    },
    {
        icon: RiHeartLine,
        title: "Accessibility",
        description: "Quality financial education should be accessible to everyone, regardless of background.",
    },
    {
        icon: RiGlobalLine,
        title: "Global Standards",
        description: "Our curriculum meets international standards while being tailored for Indian markets.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="border-b border-[#e5e7eb] bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#0063b3] rounded-lg flex items-center justify-center">
                                <RiLineChartLine className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-[#222222]">Fintrix</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/auth/login" className="text-[#6b7280] hover:text-[#222222]">
                                Sign In
                            </Link>
                            <Button asChild className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                <Link href="/auth/register">Get Started Free</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="py-20 px-4 bg-gradient-to-b from-[#0063b3] to-[#004080] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="bg-white/20 text-white mb-4">Our Story</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Democratizing Financial Education
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Fintrix was founded with a simple mission: make quality financial education accessible
                        to everyone, empowering individuals to take control of their financial future.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 px-4 bg-[#f4f4f4]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl md:text-4xl font-bold text-[#0063b3]">{stat.value}</p>
                                <p className="text-[#6b7280] mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#222222] mb-6">Our Mission</h2>
                            <p className="text-[#6b7280] mb-4">
                                Many young Indians are interested in stock markets but lack proper guidance.
                                Traditional learning resources are often theoretical, expensive, or outdated.
                            </p>
                            <p className="text-[#6b7280] mb-4">
                                Fintrix bridges this gap by providing interactive, practical financial education
                                combined with a risk-free trading simulator where learners can apply their knowledge.
                            </p>
                            <p className="text-[#6b7280]">
                                Our AI-powered platform personalizes the learning experience, while our community
                                of mentors and peers provides support at every step of the journey.
                            </p>
                        </div>
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-[#0063b3]/5 to-[#28a745]/5">
                            <CardContent className="p-8">
                                <RiTrophyLine className="w-12 h-12 text-[#0063b3] mb-4" />
                                <h3 className="text-xl font-bold text-[#222222] mb-2">Our Vision</h3>
                                <p className="text-[#6b7280]">
                                    To become India&apos;s leading platform for financial literacy, helping 1 million
                                    learners become confident investors and traders by 2025.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4 bg-[#f4f4f4]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#222222] text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <Card key={value.title} className="border-0 shadow-sm">
                                <CardContent className="p-6 text-center">
                                    <div className="w-14 h-14 bg-[#0063b3]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-7 h-7 text-[#0063b3]" />
                                    </div>
                                    <h3 className="font-bold text-[#222222] mb-2">{value.title}</h3>
                                    <p className="text-sm text-[#6b7280]">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#222222] text-center mb-4">Meet Our Team</h2>
                    <p className="text-[#6b7280] text-center mb-12 max-w-2xl mx-auto">
                        Our team combines deep expertise in finance, education, and technology to create
                        the best learning experience for you.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member) => (
                            <Card key={member.name} className="border-0 shadow-sm">
                                <CardContent className="p-6 text-center">
                                    <div className="w-20 h-20 bg-[#0063b3] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                        {member.name.split(" ").map((n) => n[0]).join("")}
                                    </div>
                                    <h3 className="font-bold text-[#222222]">{member.name}</h3>
                                    <p className="text-sm text-[#0063b3] mb-2">{member.role}</p>
                                    <p className="text-xs text-[#6b7280]">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-[#0063b3]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-xl opacity-90 mb-8">
                        Start your journey to financial mastery today. It&apos;s free to get started.
                    </p>
                    <Button asChild size="lg" className="bg-white text-[#0063b3] hover:bg-white/90">
                        <Link href="/auth/register">Create Free Account</Link>
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-[#e5e7eb]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0063b3] rounded-lg flex items-center justify-center">
                            <RiLineChartLine className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-[#222222]">Fintrix</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-[#6b7280]">
                        <Link href="/terms" className="hover:text-[#222222]">Terms</Link>
                        <Link href="/privacy" className="hover:text-[#222222]">Privacy</Link>
                        <Link href="/contact" className="hover:text-[#222222]">Contact</Link>
                    </div>
                    <p className="text-sm text-[#6b7280]">© 2024 Fintrix. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
