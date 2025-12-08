"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiSearchLine,
    RiBookOpenLine,
    RiTimeLine,
    RiUserLine,
    RiStarFill,
    RiPlayCircleLine,
    RiCheckLine,
    RiFilterLine,
} from "react-icons/ri";
import Link from "next/link";
import { courses } from "@/lib/mock-data";

const categories = ["All", "Stocks", "Technical Analysis", "Options", "Forex", "Crypto", "Investing"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [activeTab, setActiveTab] = useState("all");

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
        const matchesTab =
            activeTab === "all" ||
            (activeTab === "in-progress" && course.progress > 0 && course.progress < 100) ||
            (activeTab === "completed" && course.progress === 100) ||
            (activeTab === "not-started" && course.progress === 0);

        return matchesSearch && matchesCategory && matchesLevel && matchesTab;
    });

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Course Catalog</h1>
                    <p className="text-[#6b7280] mt-1">
                        Master financial trading with our comprehensive courses
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1">
                        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                        <Input
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-[160px]">
                                <RiFilterLine className="w-4 h-4 mr-2" />
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {cat}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                            <SelectTrigger className="w-[160px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {levels.map((level) => (
                                    <SelectItem key={level} value={level}>
                                        {level}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="all">All Courses</TabsTrigger>
                        <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                        <TabsTrigger value="not-started">Not Started</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                        <Card key={course.id} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                            <div className="relative h-40 bg-gradient-to-br from-[#0063b3] to-[#004080]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <RiBookOpenLine className="w-16 h-16 text-white/30" />
                                </div>
                                <div className="absolute top-3 left-3">
                                    <Badge
                                        className={`${course.level === "Beginner"
                                                ? "bg-[#28a745]"
                                                : course.level === "Intermediate"
                                                    ? "bg-[#0063b3]"
                                                    : "bg-purple-600"
                                            } text-white`}
                                    >
                                        {course.level}
                                    </Badge>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <Badge variant="secondary" className="bg-white/90 text-[#222222]">
                                        {course.category}
                                    </Badge>
                                </div>
                                {course.progress > 0 && (
                                    <div className="absolute bottom-0 left-0 right-0">
                                        <Progress value={course.progress} className="h-1 rounded-none" />
                                    </div>
                                )}
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-4">
                                    <div className="flex items-center gap-1">
                                        <RiUserLine className="w-4 h-4" />
                                        <span>{course.instructor}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-4">
                                    <div className="flex items-center gap-1">
                                        <RiTimeLine className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RiBookOpenLine className="w-4 h-4" />
                                        <span>{course.lessons} lessons</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RiStarFill className="w-4 h-4 text-yellow-500" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[#6b7280]">
                                        {course.students.toLocaleString()} students
                                    </span>
                                    <Button asChild size="sm" className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                                        <Link href={`/courses/${course.id}`}>
                                            {course.progress > 0 && course.progress < 100 ? (
                                                <>
                                                    <RiPlayCircleLine className="w-4 h-4 mr-1" />
                                                    Continue
                                                </>
                                            ) : course.progress === 100 ? (
                                                <>
                                                    <RiCheckLine className="w-4 h-4 mr-1" />
                                                    Review
                                                </>
                                            ) : (
                                                <>
                                                    <RiPlayCircleLine className="w-4 h-4 mr-1" />
                                                    Start
                                                </>
                                            )}
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-12">
                        <RiBookOpenLine className="w-16 h-16 text-[#e5e7eb] mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-[#222222]">No courses found</h3>
                        <p className="text-[#6b7280] mt-1">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
