"use client";

import React, { useState, use } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    RiPlayCircleLine,
    RiTimeLine,
    RiBookOpenLine,
    RiStarFill,
    RiUserLine,
    RiCheckLine,
    RiLockLine,
    RiArrowLeftLine,
    RiDownloadLine,
    RiShareLine,
    RiMedalLine,
    RiRoadMapLine,
} from "react-icons/ri";
import Link from "next/link";
import { courses } from "@/lib/mock-data";

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const course = courses.find((c) => c.id === resolvedParams.id) || courses[0];
    const [activeTab, setActiveTab] = useState("overview");

    const roadmapSteps = [
        { title: "Foundation", description: "Basic concepts and terminology", status: "completed" },
        { title: "Core Concepts", description: "Deep dive into key principles", status: "current" },
        { title: "Practical Application", description: "Hands-on exercises and simulations", status: "locked" },
        { title: "Advanced Strategies", description: "Expert-level techniques", status: "locked" },
        { title: "Certification", description: "Final assessment and certificate", status: "locked" },
    ];

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Back Button */}
                <Button variant="ghost" asChild className="mb-4">
                    <Link href="/courses">
                        <RiArrowLeftLine className="w-4 h-4 mr-2" />
                        Back to Courses
                    </Link>
                </Button>

                {/* Course Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="relative h-64 md:h-80 rounded-xl bg-gradient-to-br from-[#0063b3] to-[#004080] overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <RiBookOpenLine className="w-24 h-24 text-white/20" />
                            </div>
                            <div className="absolute top-4 left-4 flex gap-2">
                                <Badge className={`${course.level === "Beginner" ? "bg-[#28a745]" :
                                        course.level === "Intermediate" ? "bg-[#0063b3]" : "bg-purple-600"
                                    } text-white`}>
                                    {course.level}
                                </Badge>
                                <Badge variant="secondary" className="bg-white/90 text-[#222222]">
                                    {course.category}
                                </Badge>
                            </div>
                            {course.progress > 0 && (
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50">
                                    <div className="flex items-center justify-between text-white mb-2">
                                        <span className="text-sm">Progress</span>
                                        <span className="text-sm font-medium">{course.progress}%</span>
                                    </div>
                                    <Progress value={course.progress} className="h-2" />
                                </div>
                            )}
                        </div>

                        <div className="mt-6">
                            <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">{course.title}</h1>
                            <p className="text-[#6b7280] mt-2">{course.description}</p>

                            <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-[#6b7280]">
                                <div className="flex items-center gap-2">
                                    <RiTimeLine className="w-4 h-4" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RiBookOpenLine className="w-4 h-4" />
                                    <span>{course.lessons} lessons</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RiStarFill className="w-4 h-4 text-yellow-500" />
                                    <span>{course.rating} ({course.students.toLocaleString()} students)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Actions Card */}
                    <Card className="border-0 shadow-sm h-fit">
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-[#222222]">Free</span>
                                    <p className="text-sm text-[#6b7280] mt-1">Lifetime access</p>
                                </div>

                                <Button asChild className="w-full bg-[#0063b3] hover:bg-[#0063b3]/90" size="lg">
                                    <Link href={`/courses/${course.id}/learn`}>
                                        <RiPlayCircleLine className="w-5 h-5 mr-2" />
                                        {course.progress > 0 ? "Continue Learning" : "Start Course"}
                                    </Link>
                                </Button>

                                <div className="flex gap-2">
                                    <Button variant="outline" className="flex-1">
                                        <RiDownloadLine className="w-4 h-4 mr-2" />
                                        Resources
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                        <RiShareLine className="w-4 h-4 mr-2" />
                                        Share
                                    </Button>
                                </div>

                                <div className="border-t border-[#e5e7eb] pt-4 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <RiCheckLine className="w-5 h-5 text-[#28a745]" />
                                        <span className="text-sm text-[#222222]">{course.lessons} video lessons</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RiCheckLine className="w-5 h-5 text-[#28a745]" />
                                        <span className="text-sm text-[#222222]">Downloadable resources</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RiCheckLine className="w-5 h-5 text-[#28a745]" />
                                        <span className="text-sm text-[#222222]">Quizzes & assessments</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RiCheckLine className="w-5 h-5 text-[#28a745]" />
                                        <span className="text-sm text-[#222222]">Certificate of completion</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="bg-[#f4f4f4] w-full justify-start">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                        <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                        <TabsTrigger value="instructor">Instructor</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-6">
                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle>What You Will Learn</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "Understand market fundamentals and mechanics",
                                                "Read and analyze financial charts",
                                                "Build and manage a diversified portfolio",
                                                "Apply risk management strategies",
                                                "Execute trades confidently",
                                                "Develop a trading plan",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <RiCheckLine className="w-5 h-5 text-[#28a745] shrink-0 mt-0.5" />
                                                    <span className="text-sm text-[#222222]">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle>Course Description</CardTitle>
                                    </CardHeader>
                                    <CardContent className="prose prose-sm max-w-none">
                                        <p className="text-[#6b7280]">
                                            This comprehensive course is designed to take you from a complete beginner to a confident
                                            market participant. You will learn the fundamental concepts that drive financial markets,
                                            understand how to analyze stocks, and develop practical skills for building your investment
                                            portfolio.
                                        </p>
                                        <p className="text-[#6b7280] mt-4">
                                            Through a combination of video lessons, interactive exercises, and real-world case studies,
                                            you will gain hands-on experience that you can immediately apply in our virtual trading
                                            simulator. By the end of this course, you will have the knowledge and confidence to make
                                            informed investment decisions.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle>Prerequisites</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0063b3] rounded-full mt-2" />
                                                <span className="text-sm text-[#6b7280]">No prior financial knowledge required</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0063b3] rounded-full mt-2" />
                                                <span className="text-sm text-[#6b7280]">Basic math skills (percentages, ratios)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0063b3] rounded-full mt-2" />
                                                <span className="text-sm text-[#6b7280]">Willingness to learn and practice</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle>Course Tags</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {course.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="bg-[#f4f4f4]">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <CardTitle>Certificate</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-center p-4 bg-[#f4f4f4] rounded-lg">
                                            <RiMedalLine className="w-12 h-12 text-[#0063b3] mx-auto mb-3" />
                                            <p className="text-sm text-[#222222] font-medium">Certificate of Completion</p>
                                            <p className="text-xs text-[#6b7280] mt-1">
                                                Complete all modules to earn your certificate
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="syllabus" className="mt-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Course Syllabus</CardTitle>
                                <CardDescription>
                                    {course.lessons} lessons across {course.syllabus.length} modules
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {course.syllabus.map((module, idx) => (
                                        <AccordionItem key={idx} value={`module-${idx}`}>
                                            <AccordionTrigger className="hover:no-underline">
                                                <div className="flex items-center justify-between w-full pr-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-[#0063b3]/10 rounded-lg flex items-center justify-center">
                                                            <span className="text-sm font-bold text-[#0063b3]">{idx + 1}</span>
                                                        </div>
                                                        <span className="font-medium text-[#222222]">{module.module}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-sm text-[#6b7280]">
                                                        <span>{module.lessons} lessons</span>
                                                        <span>{module.duration}</span>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="pl-11 space-y-3">
                                                    {Array.from({ length: module.lessons }).map((_, lessonIdx) => (
                                                        <div
                                                            key={lessonIdx}
                                                            className="flex items-center justify-between py-2 border-b border-[#e5e7eb] last:border-0"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                {lessonIdx < 2 ? (
                                                                    <RiCheckLine className="w-4 h-4 text-[#28a745]" />
                                                                ) : (
                                                                    <RiLockLine className="w-4 h-4 text-[#6b7280]" />
                                                                )}
                                                                <span className="text-sm text-[#222222]">
                                                                    Lesson {lessonIdx + 1}: Sample Lesson Title
                                                                </span>
                                                            </div>
                                                            <span className="text-xs text-[#6b7280]">12 min</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="roadmap" className="mt-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <RiRoadMapLine className="w-5 h-5 text-[#0063b3]" />
                                    Learning Roadmap
                                </CardTitle>
                                <CardDescription>Your journey through this course</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#e5e7eb]" />
                                    <div className="space-y-6">
                                        {roadmapSteps.map((step, idx) => (
                                            <div key={idx} className="relative flex items-start gap-4 pl-12">
                                                <div
                                                    className={`absolute left-4 w-5 h-5 rounded-full flex items-center justify-center ${step.status === "completed"
                                                            ? "bg-[#28a745]"
                                                            : step.status === "current"
                                                                ? "bg-[#0063b3]"
                                                                : "bg-[#e5e7eb]"
                                                        }`}
                                                >
                                                    {step.status === "completed" ? (
                                                        <RiCheckLine className="w-3 h-3 text-white" />
                                                    ) : step.status === "locked" ? (
                                                        <RiLockLine className="w-3 h-3 text-[#6b7280]" />
                                                    ) : (
                                                        <div className="w-2 h-2 bg-white rounded-full" />
                                                    )}
                                                </div>
                                                <div className="flex-1 pb-6">
                                                    <h4
                                                        className={`font-medium ${step.status === "locked" ? "text-[#6b7280]" : "text-[#222222]"
                                                            }`}
                                                    >
                                                        {step.title}
                                                    </h4>
                                                    <p className="text-sm text-[#6b7280] mt-1">{step.description}</p>
                                                    {step.status === "current" && (
                                                        <Button size="sm" className="mt-3 bg-[#0063b3] hover:bg-[#0063b3]/90">
                                                            Continue
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="instructor" className="mt-6">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <Avatar className="w-24 h-24">
                                        <AvatarImage src={course.instructorAvatar} />
                                        <AvatarFallback className="bg-[#0063b3] text-white text-2xl">
                                            {course.instructor.split(" ").map((n) => n[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#222222]">{course.instructor}</h3>
                                        <p className="text-[#0063b3] font-medium">Course Instructor</p>
                                        <p className="text-[#6b7280] mt-4">{course.instructorBio}</p>
                                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-[#6b7280]">
                                            <div className="flex items-center gap-2">
                                                <RiStarFill className="w-4 h-4 text-yellow-500" />
                                                <span>4.9 Instructor Rating</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RiUserLine className="w-4 h-4" />
                                                <span>25,000+ Students</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RiBookOpenLine className="w-4 h-4" />
                                                <span>8 Courses</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
