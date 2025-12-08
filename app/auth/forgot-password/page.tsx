"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    RiMailLine,
    RiLineChartLine,
    RiArrowLeftLine,
    RiCheckLine,
} from "react-icons/ri";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-[#f4f4f4]">
            <Card className="w-full max-w-md border-0 shadow-lg">
                <CardHeader className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 justify-center mb-4">
                        <div className="w-10 h-10 bg-[#0063b3] rounded-lg flex items-center justify-center">
                            <RiLineChartLine className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-[#222222]">Fintrix</span>
                    </Link>
                    <CardTitle className="text-2xl">
                        {submitted ? "Check your email" : "Forgot Password"}
                    </CardTitle>
                    <CardDescription>
                        {submitted
                            ? "We've sent you a password reset link"
                            : "Enter your email to receive a reset link"}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {submitted ? (
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-[#28a745]/10 rounded-full flex items-center justify-center mx-auto">
                                <RiCheckLine className="w-8 h-8 text-[#28a745]" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-[#222222]">
                                    We sent an email to <strong>{email}</strong>
                                </p>
                                <p className="text-sm text-[#6b7280]">
                                    Click the link in the email to reset your password.
                                    If you don&apos;t see it, check your spam folder.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <Button asChild className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90">
                                    <Link href="/auth/login">Back to Sign In</Link>
                                </Button>
                                <Button variant="outline" className="w-full" onClick={() => setSubmitted(false)}>
                                    Try another email
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                        required
                                    />
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-12 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                Send Reset Link
                            </Button>

                            <div className="text-center">
                                <Link
                                    href="/auth/login"
                                    className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#0063b3]"
                                >
                                    <RiArrowLeftLine className="w-4 h-4" />
                                    Back to Sign In
                                </Link>
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
