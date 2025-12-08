"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    RiUserLine,
    RiLockLine,
    RiNotification3Line,
    RiPaletteLine,
    RiCameraLine,
    RiShieldLine,
} from "react-icons/ri";
import { currentUser } from "@/lib/mock-data";

export default function SettingsPage() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [marketingEmails, setMarketingEmails] = useState(false);
    const [weeklyDigest, setWeeklyDigest] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Settings</h1>
                    <p className="text-[#6b7280] mt-1">Manage your account preferences</p>
                </div>

                <Tabs defaultValue="profile" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4] flex-wrap">
                        <TabsTrigger value="profile" className="gap-2">
                            <RiUserLine className="w-4 h-4" />
                            Profile
                        </TabsTrigger>
                        <TabsTrigger value="security" className="gap-2">
                            <RiLockLine className="w-4 h-4" />
                            Security
                        </TabsTrigger>
                        <TabsTrigger value="notifications" className="gap-2">
                            <RiNotification3Line className="w-4 h-4" />
                            Notifications
                        </TabsTrigger>
                        <TabsTrigger value="appearance" className="gap-2">
                            <RiPaletteLine className="w-4 h-4" />
                            Appearance
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="profile">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                                <CardDescription>Update your personal details</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src={currentUser.avatar} />
                                        <AvatarFallback className="bg-[#0063b3] text-white text-2xl">
                                            {currentUser.name.split(" ").map((n) => n[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <Button variant="outline">
                                        <RiCameraLine className="w-4 h-4 mr-2" />
                                        Change Photo
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" defaultValue={currentUser.name} className="mt-1" />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" defaultValue="arjun@example.com" className="mt-1" />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" defaultValue="+91 98765 43210" className="mt-1" />
                                    </div>
                                    <div>
                                        <Label htmlFor="college">College/University</Label>
                                        <Input id="college" defaultValue={currentUser.college} className="mt-1" />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="bio">Bio</Label>
                                    <Input id="bio" defaultValue="Aspiring trader learning the markets" className="mt-1" />
                                </div>

                                <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">Save Changes</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="security">
                        <div className="space-y-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Change Password</CardTitle>
                                    <CardDescription>Update your password regularly for security</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        <Input id="currentPassword" type="password" className="mt-1 max-w-md" />
                                    </div>
                                    <div>
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <Input id="newPassword" type="password" className="mt-1 max-w-md" />
                                    </div>
                                    <div>
                                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                        <Input id="confirmPassword" type="password" className="mt-1 max-w-md" />
                                    </div>
                                    <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">Update Password</Button>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Two-Factor Authentication</CardTitle>
                                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#28a745]/10 rounded-xl flex items-center justify-center">
                                                <RiShieldLine className="w-6 h-6 text-[#28a745]" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#222222]">Authenticator App</p>
                                                <p className="text-sm text-[#6b7280]">Use an authenticator app to generate codes</p>
                                            </div>
                                        </div>
                                        <Button variant="outline">Enable</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm border-red-200">
                                <CardHeader>
                                    <CardTitle className="text-red-500">Danger Zone</CardTitle>
                                    <CardDescription>Irreversible actions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="destructive">Delete Account</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="notifications">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Notification Preferences</CardTitle>
                                <CardDescription>Choose how you want to be notified</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb]">
                                    <div>
                                        <p className="font-medium text-[#222222]">Email Notifications</p>
                                        <p className="text-sm text-[#6b7280]">Receive notifications via email</p>
                                    </div>
                                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb]">
                                    <div>
                                        <p className="font-medium text-[#222222]">Push Notifications</p>
                                        <p className="text-sm text-[#6b7280]">Receive push notifications on your device</p>
                                    </div>
                                    <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb]">
                                    <div>
                                        <p className="font-medium text-[#222222]">Weekly Digest</p>
                                        <p className="text-sm text-[#6b7280]">Get a weekly summary of your progress</p>
                                    </div>
                                    <Switch checked={weeklyDigest} onCheckedChange={setWeeklyDigest} />
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb]">
                                    <div>
                                        <p className="font-medium text-[#222222]">Marketing Emails</p>
                                        <p className="text-sm text-[#6b7280]">Receive updates about new features and offers</p>
                                    </div>
                                    <Switch checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                                </div>

                                <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">Save Preferences</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="appearance">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Appearance</CardTitle>
                                <CardDescription>Customize how Fintrix looks for you</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between p-4 rounded-lg border border-[#e5e7eb]">
                                    <div>
                                        <p className="font-medium text-[#222222]">Dark Mode</p>
                                        <p className="text-sm text-[#6b7280]">Use dark theme for reduced eye strain</p>
                                    </div>
                                    <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                                </div>

                                <div>
                                    <Label>Language</Label>
                                    <Select defaultValue="en">
                                        <SelectTrigger className="mt-1 max-w-xs">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="hi">Hindi</SelectItem>
                                            <SelectItem value="ta">Tamil</SelectItem>
                                            <SelectItem value="te">Telugu</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Chart Theme</Label>
                                    <Select defaultValue="default">
                                        <SelectTrigger className="mt-1 max-w-xs">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="default">Default</SelectItem>
                                            <SelectItem value="tradingview">TradingView Style</SelectItem>
                                            <SelectItem value="minimal">Minimal</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button className="bg-[#0063b3] hover:bg-[#0063b3]/90">Save Preferences</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
