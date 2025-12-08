"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    RiMailLine,
    RiLockLine,
    RiEyeLine,
    RiEyeOffLine,
    RiGoogleLine,
    RiLineChartLine,
    RiUserLine,
    RiCheckLine,
} from "react-icons/ri";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const passwordRequirements = [
        { text: "At least 8 characters", met: password.length >= 8 },
        { text: "One uppercase letter", met: /[A-Z]/.test(password) },
        { text: "One number", met: /\d/.test(password) },
        { text: "One special character", met: /[!@#$%^&*]/.test(password) },
    ];

    return (
        <div className="min-h-screen flex">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0063b3] to-[#004080] p-12 flex-col justify-between">
                <div>
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <RiLineChartLine className="w-6 h-6 text-[#0063b3]" />
                        </div>
                        <span className="text-2xl font-bold">Fintrix</span>
                    </Link>
                </div>

                <div className="text-white">
                    <h1 className="text-4xl font-bold mb-4">Start Your Journey</h1>
                    <p className="text-lg opacity-80 mb-8">
                        Create your free account and unlock access to premium financial education.
                    </p>
                    <div className="space-y-4">
                        {[
                            "Access to 50+ expert-led courses",
                            "Virtual trading simulator with $10L capital",
                            "AI-powered personalized learning",
                            "Community of 25,000+ traders",
                            "Certificates to showcase your skills",
                        ].map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                    <RiCheckLine className="w-4 h-4" />
                                </div>
                                <span className="opacity-90">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-white/60 text-sm">
                    © 2024 Fintrix. All rights reserved.
                </div>
            </div>

            {/* Right Panel - Register Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[#f4f4f4]">
                <Card className="w-full max-w-md border-0 shadow-lg">
                    <CardHeader className="text-center">
                        <div className="lg:hidden flex justify-center mb-4">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-[#0063b3] rounded-lg flex items-center justify-center">
                                    <RiLineChartLine className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold text-[#222222]">Fintrix</span>
                            </Link>
                        </div>
                        <CardTitle className="text-2xl">Create Account</CardTitle>
                        <CardDescription>Join Fintrix and start learning today</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Button variant="outline" className="w-full h-12">
                            <RiGoogleLine className="w-5 h-5 mr-2" />
                            Continue with Google
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-[#e5e7eb]" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-4 text-[#6b7280]">or register with email</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <div className="relative mt-1">
                                    <RiUserLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="pl-10 h-12"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="email">Email</Label>
                                <div className="relative mt-1">
                                    <RiMailLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 h-12"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <div className="relative mt-1">
                                    <RiLockLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 pr-10 h-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#222222]"
                                    >
                                        {showPassword ? <RiEyeOffLine className="w-4 h-4" /> : <RiEyeLine className="w-4 h-4" />}
                                    </button>
                                </div>
                                {password && (
                                    <div className="mt-2 space-y-1">
                                        {passwordRequirements.map((req) => (
                                            <div key={req.text} className="flex items-center gap-2 text-sm">
                                                <RiCheckLine
                                                    className={`w-4 h-4 ${req.met ? "text-[#28a745]" : "text-[#6b7280]"}`}
                                                />
                                                <span className={req.met ? "text-[#28a745]" : "text-[#6b7280]"}>
                                                    {req.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-start gap-2">
                                <Checkbox id="terms" className="mt-1" />
                                <Label htmlFor="terms" className="text-sm text-[#6b7280] font-normal leading-relaxed">
                                    I agree to the{" "}
                                    <Link href="/terms" className="text-[#0063b3] hover:underline">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy" className="text-[#0063b3] hover:underline">
                                        Privacy Policy
                                    </Link>
                                </Label>
                            </div>

                            <Button asChild className="w-full h-12 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                <Link href="/auth/onboarding">Create Account</Link>
                            </Button>
                        </div>

                        <p className="text-center text-sm text-[#6b7280]">
                            Already have an account?{" "}
                            <Link href="/auth/login" className="text-[#0063b3] hover:underline font-medium">
                                Sign in
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
