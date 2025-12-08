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
} from "react-icons/ri";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <h1 className="text-4xl font-bold mb-4">Master the Markets</h1>
                    <p className="text-lg opacity-80 mb-8">
                        Join thousands of learners who have transformed their trading skills with Fintrix.
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <p className="text-3xl font-bold">25K+</p>
                            <p className="text-sm opacity-70">Active Learners</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">50+</p>
                            <p className="text-sm opacity-70">Expert Courses</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">95%</p>
                            <p className="text-sm opacity-70">Success Rate</p>
                        </div>
                    </div>
                </div>

                <div className="text-white/60 text-sm">
                    © 2024 Fintrix. All rights reserved.
                </div>
            </div>

            {/* Right Panel - Login Form */}
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
                        <CardTitle className="text-2xl">Welcome Back</CardTitle>
                        <CardDescription>Sign in to continue your learning journey</CardDescription>
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
                                <span className="bg-white px-4 text-[#6b7280]">or continue with email</span>
                            </div>
                        </div>

                        <div className="space-y-4">
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
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <Link href="/auth/forgot-password" className="text-sm text-[#0063b3] hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative mt-1">
                                    <RiLockLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
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
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember" className="text-sm text-[#6b7280] font-normal">
                                    Remember me for 30 days
                                </Label>
                            </div>

                            <Button asChild className="w-full h-12 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                <Link href="/dashboard">Sign In</Link>
                            </Button>
                        </div>

                        <p className="text-center text-sm text-[#6b7280]">
                            Don&apos;t have an account?{" "}
                            <Link href="/auth/register" className="text-[#0063b3] hover:underline font-medium">
                                Sign up for free
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
