"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    RiLineChartLine,
    RiArrowRightLine,
    RiArrowLeftLine,
    RiCheckLine,
    RiRocketLine,
} from "react-icons/ri";

const steps = [
    { id: 1, title: "Goals", description: "What do you want to achieve?" },
    { id: 2, title: "Experience", description: "Tell us about your background" },
    { id: 3, title: "Interests", description: "Select topics you're interested in" },
];

const goals = [
    { id: "learn", label: "Learn stock market basics", description: "Start from scratch" },
    { id: "improve", label: "Improve trading skills", description: "Level up your game" },
    { id: "simulate", label: "Practice with simulator", description: "Risk-free trading" },
    { id: "career", label: "Build a finance career", description: "Professional development" },
];

const experienceLevels = [
    { id: "beginner", label: "Complete Beginner", description: "New to trading and investing" },
    { id: "basic", label: "Basic Knowledge", description: "Understand fundamentals" },
    { id: "intermediate", label: "Intermediate", description: "Have trading experience" },
    { id: "advanced", label: "Advanced", description: "Looking for expert strategies" },
];

const topics = [
    "Stocks & Equities",
    "Technical Analysis",
    "Options Trading",
    "Forex Markets",
    "Cryptocurrency",
    "Value Investing",
    "Day Trading",
    "Mutual Funds",
    "Personal Finance",
    "Risk Management",
];

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedGoal, setSelectedGoal] = useState("");
    const [selectedExperience, setSelectedExperience] = useState("");
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    const progress = (currentStep / steps.length) * 100;

    const toggleTopic = (topic: string) => {
        setSelectedTopics((prev) =>
            prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
        );
    };

    const canProceed = () => {
        if (currentStep === 1) return selectedGoal !== "";
        if (currentStep === 2) return selectedExperience !== "";
        if (currentStep === 3) return selectedTopics.length >= 3;
        return false;
    };

    return (
        <div className="min-h-screen bg-[#f4f4f4] py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-[#0063b3] rounded-lg flex items-center justify-center">
                            <RiLineChartLine className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-[#222222]">Fintrix</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-[#222222]">Let&apos;s personalize your experience</h1>
                    <p className="text-[#6b7280] mt-1">Answer a few questions to get started</p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex items-center gap-2 ${step.id <= currentStep ? "text-[#0063b3]" : "text-[#6b7280]"
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step.id < currentStep
                                            ? "bg-[#28a745] text-white"
                                            : step.id === currentStep
                                                ? "bg-[#0063b3] text-white"
                                                : "bg-[#e5e7eb] text-[#6b7280]"
                                        }`}
                                >
                                    {step.id < currentStep ? <RiCheckLine className="w-4 h-4" /> : step.id}
                                </div>
                                <span className="hidden sm:inline text-sm font-medium">{step.title}</span>
                            </div>
                        ))}
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* Step Content */}
                <Card className="border-0 shadow-lg">
                    <CardHeader>
                        <CardTitle>{steps[currentStep - 1].title}</CardTitle>
                        <CardDescription>{steps[currentStep - 1].description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {currentStep === 1 && (
                            <RadioGroup value={selectedGoal} onValueChange={setSelectedGoal} className="space-y-4">
                                {goals.map((goal) => (
                                    <div
                                        key={goal.id}
                                        className={`flex items-center space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedGoal === goal.id
                                                ? "border-[#0063b3] bg-[#0063b3]/5"
                                                : "border-[#e5e7eb] hover:border-[#0063b3]/50"
                                            }`}
                                        onClick={() => setSelectedGoal(goal.id)}
                                    >
                                        <RadioGroupItem value={goal.id} id={goal.id} />
                                        <div className="flex-1">
                                            <Label htmlFor={goal.id} className="font-medium cursor-pointer">
                                                {goal.label}
                                            </Label>
                                            <p className="text-sm text-[#6b7280]">{goal.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </RadioGroup>
                        )}

                        {currentStep === 2 && (
                            <RadioGroup value={selectedExperience} onValueChange={setSelectedExperience} className="space-y-4">
                                {experienceLevels.map((level) => (
                                    <div
                                        key={level.id}
                                        className={`flex items-center space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedExperience === level.id
                                                ? "border-[#0063b3] bg-[#0063b3]/5"
                                                : "border-[#e5e7eb] hover:border-[#0063b3]/50"
                                            }`}
                                        onClick={() => setSelectedExperience(level.id)}
                                    >
                                        <RadioGroupItem value={level.id} id={level.id} />
                                        <div className="flex-1">
                                            <Label htmlFor={level.id} className="font-medium cursor-pointer">
                                                {level.label}
                                            </Label>
                                            <p className="text-sm text-[#6b7280]">{level.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </RadioGroup>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-4">
                                <p className="text-sm text-[#6b7280]">Select at least 3 topics that interest you</p>
                                <div className="flex flex-wrap gap-3">
                                    {topics.map((topic) => (
                                        <button
                                            key={topic}
                                            onClick={() => toggleTopic(topic)}
                                            className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-colors ${selectedTopics.includes(topic)
                                                    ? "border-[#0063b3] bg-[#0063b3] text-white"
                                                    : "border-[#e5e7eb] text-[#222222] hover:border-[#0063b3]"
                                                }`}
                                        >
                                            {selectedTopics.includes(topic) && <RiCheckLine className="w-4 h-4 inline mr-1" />}
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-sm text-[#6b7280]">
                                    {selectedTopics.length}/3 topics selected
                                </p>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e5e7eb]">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentStep((prev) => prev - 1)}
                                disabled={currentStep === 1}
                            >
                                <RiArrowLeftLine className="w-4 h-4 mr-2" />
                                Back
                            </Button>

                            {currentStep < steps.length ? (
                                <Button
                                    onClick={() => setCurrentStep((prev) => prev + 1)}
                                    disabled={!canProceed()}
                                    className="bg-[#0063b3] hover:bg-[#0063b3]/90"
                                >
                                    Continue
                                    <RiArrowRightLine className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button asChild className="bg-[#28a745] hover:bg-[#28a745]/90" disabled={!canProceed()}>
                                    <Link href="/dashboard">
                                        <RiRocketLine className="w-4 h-4 mr-2" />
                                        Get Started
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <p className="text-center text-sm text-[#6b7280] mt-6">
                    <Link href="/dashboard" className="text-[#0063b3] hover:underline">
                        Skip for now
                    </Link>
                </p>
            </div>
        </div>
    );
}
