"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    RiLineChartLine,
    RiMailLine,
    RiMapPinLine,
    RiPhoneLine,
    RiCheckLine,
} from "react-icons/ri";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

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

            {/* Header */}
            <section className="py-16 px-4 bg-gradient-to-b from-[#f4f4f4] to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-[#222222] mb-4">Contact Us</h1>
                    <p className="text-xl text-[#6b7280]">
                        Have questions? We&apos;d love to hear from you. Send us a message
                        and we&apos;ll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-[#222222] mb-4">Get in Touch</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#0063b3]/10 rounded-lg flex items-center justify-center shrink-0">
                                            <RiMailLine className="w-5 h-5 text-[#0063b3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Email</p>
                                            <p className="text-[#6b7280]">support@fintrix.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#0063b3]/10 rounded-lg flex items-center justify-center shrink-0">
                                            <RiPhoneLine className="w-5 h-5 text-[#0063b3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Phone</p>
                                            <p className="text-[#6b7280]">+91 80 1234 5678</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#0063b3]/10 rounded-lg flex items-center justify-center shrink-0">
                                            <RiMapPinLine className="w-5 h-5 text-[#0063b3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#222222]">Office</p>
                                            <p className="text-[#6b7280]">
                                                123 Financial District<br />
                                                Bangalore, Karnataka 560001
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-[#222222] mb-4">Office Hours</h3>
                                <div className="space-y-2 text-[#6b7280]">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <Card className="border-0 shadow-lg lg:col-span-2">
                            <CardContent className="p-8">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-[#28a745]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <RiCheckLine className="w-8 h-8 text-[#28a745]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#222222] mb-2">Message Sent!</h3>
                                        <p className="text-[#6b7280] mb-6">
                                            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                        </p>
                                        <Button variant="outline" onClick={() => setSubmitted(false)}>
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input id="firstName" placeholder="John" className="mt-1" required />
                                            </div>
                                            <div>
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" placeholder="Doe" className="mt-1" required />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="you@example.com" className="mt-1" required />
                                        </div>
                                        <div>
                                            <Label htmlFor="topic">Topic</Label>
                                            <Select>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Select a topic" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="general">General Inquiry</SelectItem>
                                                    <SelectItem value="support">Technical Support</SelectItem>
                                                    <SelectItem value="billing">Billing Question</SelectItem>
                                                    <SelectItem value="partnership">Partnership</SelectItem>
                                                    <SelectItem value="feedback">Feedback</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="How can we help you?"
                                                className="mt-1 min-h-[150px]"
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90">
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-[#e5e7eb] mt-12">
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
                        <Link href="/about" className="hover:text-[#222222]">About</Link>
                    </div>
                    <p className="text-sm text-[#6b7280]">© 2024 Fintrix. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
