"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    RiLineChartLine,
    RiCheckLine,
    RiStarFill,
    RiCloseLine,
} from "react-icons/ri";
import { pricingPlans } from "@/lib/mock-data";

export default function PricingPage() {
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
            <section className="py-20 px-4 bg-gradient-to-b from-[#f4f4f4] to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="bg-[#0063b3] mb-4">Pricing</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-[#6b7280]">
                        Start learning for free. Upgrade anytime for premium features.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan) => (
                            <Card
                                key={plan.name}
                                className={`border-2 relative ${plan.popular ? "border-[#0063b3] shadow-xl scale-105" : "border-[#e5e7eb]"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-[#0063b3]">
                                            <RiStarFill className="w-3 h-3 mr-1" />
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <CardContent className="p-8">
                                    <h3 className="text-xl font-bold text-[#222222] mb-2">{plan.name}</h3>
                                    <p className="text-[#6b7280] mb-6">{plan.description}</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-[#222222]">{plan.price}</span>
                                        {plan.period && (
                                            <span className="text-[#6b7280]">/{plan.period}</span>
                                        )}
                                    </div>
                                    <Button
                                        asChild
                                        className={`w-full ${plan.popular
                                                ? "bg-[#0063b3] hover:bg-[#0063b3]/90"
                                                : "bg-[#222222] hover:bg-[#222222]/90"
                                            }`}
                                    >
                                        <Link href="/auth/register">{plan.cta}</Link>
                                    </Button>
                                    <div className="mt-8 space-y-3">
                                        {plan.features.map((feature) => (
                                            <div
                                                key={feature.name}
                                                className={`flex items-center gap-3 ${feature.included ? "text-[#222222]" : "text-[#6b7280]"
                                                    }`}
                                            >
                                                {feature.included ? (
                                                    <RiCheckLine className="w-5 h-5 text-[#28a745]" />
                                                ) : (
                                                    <RiCloseLine className="w-5 h-5 text-[#6b7280]" />
                                                )}
                                                <span className="text-sm">{feature.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 bg-[#f4f4f4]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#222222] text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can I cancel anytime?",
                                a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
                            },
                            {
                                q: "Is the free plan really free?",
                                a: "Yes! Our free plan includes access to basic courses, the trading simulator with limited capital, and community features.",
                            },
                            {
                                q: "What payment methods do you accept?",
                                a: "We accept all major credit cards, debit cards, UPI, and net banking through our secure payment partner.",
                            },
                            {
                                q: "Do you offer refunds?",
                                a: "We offer a 7-day money-back guarantee for Pro and Premium plans if you're not satisfied.",
                            },
                        ].map((faq) => (
                            <div key={faq.q} className="bg-white p-6 rounded-lg">
                                <h3 className="font-semibold text-[#222222] mb-2">{faq.q}</h3>
                                <p className="text-[#6b7280]">{faq.a}</p>
                            </div>
                        ))}
                    </div>
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
