"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    RiSearchLine,
    RiAddLine,
    RiEditLine,
    RiDeleteBinLine,
    RiEyeLine,
    RiBookOpenLine,
    RiTimeLine,
    RiUserLine,
} from "react-icons/ri";
import { courses } from "@/lib/mock-data";

export default function AdminCoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = courses.filter(
        (c) =>
            c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Course Management</h1>
                        <p className="text-[#6b7280] mt-1">Create and manage course content</p>
                    </div>
                    <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">
                        <RiAddLine className="w-4 h-4 mr-2" />
                        Create Course
                    </Button>
                </div>

                {/* Search and Filter */}
                <div className="flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                        <Input
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>

                <Tabs defaultValue="all" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4]">
                        <TabsTrigger value="all">All Courses ({courses.length})</TabsTrigger>
                        <TabsTrigger value="published">Published</TabsTrigger>
                        <TabsTrigger value="draft">Draft</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-[#e5e7eb]">
                                                <th className="text-left py-4 px-4 text-sm font-medium text-[#6b7280]">Course</th>
                                                <th className="text-left py-4 px-4 text-sm font-medium text-[#6b7280]">Category</th>
                                                <th className="text-left py-4 px-4 text-sm font-medium text-[#6b7280]">Level</th>
                                                <th className="text-right py-4 px-4 text-sm font-medium text-[#6b7280]">Enrolled</th>
                                                <th className="text-center py-4 px-4 text-sm font-medium text-[#6b7280]">Status</th>
                                                <th className="text-right py-4 px-4 text-sm font-medium text-[#6b7280]">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredCourses.map((course) => (
                                                <tr key={course.id} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                                    <td className="py-4 px-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-12 h-12 bg-[#0063b3]/10 rounded-lg flex items-center justify-center">
                                                                <RiBookOpenLine className="w-6 h-6 text-[#0063b3]" />
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-[#222222]">{course.title}</p>
                                                                <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                                                                    <RiTimeLine className="w-3 h-3" />
                                                                    <span>{course.duration}</span>
                                                                    <span>•</span>
                                                                    <span>{course.lessons} lessons</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4">
                                                        <Badge variant="secondary">{course.category}</Badge>
                                                    </td>
                                                    <td className="py-4 px-4">
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
                                                    </td>
                                                    <td className="py-4 px-4 text-right">
                                                        <div className="flex items-center justify-end gap-1">
                                                            <RiUserLine className="w-4 h-4 text-[#6b7280]" />
                                                            <span className="text-[#222222]">{course.students.toLocaleString()}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 text-center">
                                                        <Badge className="bg-[#28a745]">Published</Badge>
                                                    </td>
                                                    <td className="py-4 px-4">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <Button variant="ghost" size="icon">
                                                                <RiEyeLine className="w-4 h-4" />
                                                            </Button>
                                                            <Button variant="ghost" size="icon">
                                                                <RiEditLine className="w-4 h-4" />
                                                            </Button>
                                                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                                                                <RiDeleteBinLine className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="published">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-8 text-center">
                                <p className="text-[#6b7280]">Same table filtered by published status</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="draft">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-8 text-center">
                                <p className="text-[#6b7280]">No draft courses</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
