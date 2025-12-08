"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    RiHome5Line,
    RiBookOpenLine,
    RiLineChartLine,
    RiPieChartLine,
    RiQuestionLine,
    RiUserStarLine,
    RiTrophyLine,
    RiTeamLine,
    RiDashboardLine,
    RiSettings4Line,
    RiLogoutBoxLine,
    RiMenuLine,
    RiCloseLine,
    RiSearchLine,
    RiNotification3Line,
    RiArrowDownSLine,
    RiArrowRightSLine,
    RiCalculatorLine,
    RiNewspaperLine,
    RiBarChartGroupedLine,
    RiMedalLine,
    RiMessage3Line,
    RiAdminLine,
    RiFileListLine,
    RiGroupLine,
    RiCalendarCheckLine,
    RiAwardLine,
    RiWalletLine,
    RiStockLine,
    RiExchangeLine,
    RiFireLine,
    RiListCheck2,
    RiRobot2Line,
    RiBriefcase4Line,
    RiCommunityLine,
    RiSwordLine,
    RiLightbulbLine,
    RiGraduationCapLine,
} from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { currentUser } from "@/lib/mock-data";

interface NavItem {
    title: string;
    href?: string;
    icon: React.ElementType;
    children?: { title: string; href: string; icon?: React.ElementType }[];
    badge?: string;
}

const navigation: NavItem[] = [
    { title: "Dashboard", href: "/dashboard", icon: RiDashboardLine },
    {
        title: "Courses",
        icon: RiBookOpenLine,
        children: [
            { title: "Course Catalog", href: "/courses", icon: RiBookOpenLine },
            { title: "My Learning", href: "/courses/my-learning", icon: RiGraduationCapLine },
        ],
    },
    {
        title: "Assessments",
        icon: RiQuestionLine,
        children: [
            { title: "All Quizzes", href: "/assessments", icon: RiListCheck2 },
            { title: "AI Quiz", href: "/assessments/ai-quiz", icon: RiRobot2Line },
            { title: "Stage Tests", href: "/assessments/stage-test", icon: RiFileListLine },
            { title: "Weekly Challenges", href: "/assessments/weekly-challenges", icon: RiCalendarCheckLine },
            { title: "Results & Certificates", href: "/assessments/results", icon: RiAwardLine },
        ],
    },
    {
        title: "Simulator",
        icon: RiLineChartLine,
        badge: "Live",
        children: [
            { title: "Trading Platform", href: "/simulator", icon: RiStockLine },
            { title: "Portfolio", href: "/simulator/portfolio", icon: RiWalletLine },
            { title: "Trade Analysis", href: "/simulator/analysis", icon: RiBarChartGroupedLine },
            { title: "Market Data", href: "/simulator/market", icon: RiExchangeLine },
            { title: "News", href: "/simulator/news", icon: RiNewspaperLine },
        ],
    },
    {
        title: "Tools",
        icon: RiCalculatorLine,
        children: [
            { title: "Portfolio Analysis", href: "/tools/portfolio-analysis", icon: RiPieChartLine },
            { title: "Trade Insights", href: "/tools/trade-insights", icon: RiLightbulbLine },
            { title: "Calculators", href: "/tools/calculators", icon: RiCalculatorLine },
        ],
    },
    {
        title: "Mentor",
        icon: RiUserStarLine,
        children: [
            { title: "Mentor Dashboard", href: "/mentor", icon: RiUserStarLine },
            { title: "Portfolio Review", href: "/mentor/portfolio", icon: RiBriefcase4Line },
            { title: "News to Learning", href: "/mentor/news-learning", icon: RiNewspaperLine },
            { title: "Improvement Reports", href: "/mentor/reports", icon: RiFileListLine },
            { title: "Ask Mentor", href: "/mentor/ask", icon: RiMessage3Line },
        ],
    },
    {
        title: "Gamification",
        icon: RiTrophyLine,
        children: [
            { title: "Challenges", href: "/gamification/challenges", icon: RiFireLine },
            { title: "Leaderboards", href: "/gamification/leaderboards", icon: RiMedalLine },
            { title: "Achievements", href: "/gamification/achievements", icon: RiTrophyLine },
        ],
    },
    {
        title: "Community",
        icon: RiTeamLine,
        children: [
            { title: "Discussions", href: "/community", icon: RiCommunityLine },
            { title: "Creator Space", href: "/community/creators", icon: RiGroupLine },
            { title: "Trading Battles", href: "/community/battles", icon: RiSwordLine },
        ],
    },
    {
        title: "Admin",
        icon: RiAdminLine,
        children: [
            { title: "Overview", href: "/admin", icon: RiDashboardLine },
            { title: "Course Management", href: "/admin/courses", icon: RiBookOpenLine },
            { title: "Quiz Bank", href: "/admin/quizzes", icon: RiQuestionLine },
            { title: "User Analytics", href: "/admin/users", icon: RiGroupLine },
            { title: "Market Data Setup", href: "/admin/market", icon: RiLineChartLine },
            { title: "Moderation", href: "/admin/moderation", icon: RiSettings4Line },
            { title: "Certificates", href: "/admin/certificates", icon: RiAwardLine },
        ],
    },
];

function NavItemComponent({ item, isCollapsed }: { item: NavItem; isCollapsed: boolean }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = item.href ? pathname === item.href : item.children?.some(child => pathname === child.href);

    if (hasChildren) {
        return (
            <div className="mb-1">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                            ? "bg-[#0063b3] text-white"
                            : "text-[#222222] hover:bg-[#f4f4f4]"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        {!isCollapsed && <span>{item.title}</span>}
                    </div>
                    {!isCollapsed && (
                        <div className="flex items-center gap-2">
                            {item.badge && (
                                <Badge className="bg-[#28a745] text-white text-xs px-1.5 py-0">{item.badge}</Badge>
                            )}
                            {isOpen ? <RiArrowDownSLine className="w-4 h-4" /> : <RiArrowRightSLine className="w-4 h-4" />}
                        </div>
                    )}
                </button>
                {!isCollapsed && isOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#e5e7eb] pl-3">
                        {item.children?.map((child) => (
                            <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${pathname === child.href
                                        ? "bg-[#0063b3]/10 text-[#0063b3] font-medium"
                                        : "text-[#6b7280] hover:text-[#222222] hover:bg-[#f4f4f4]"
                                    }`}
                            >
                                {child.icon && <child.icon className="w-4 h-4" />}
                                <span>{child.title}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.href || "#"}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${isActive
                    ? "bg-[#0063b3] text-white"
                    : "text-[#222222] hover:bg-[#f4f4f4]"
                }`}
        >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && <span>{item.title}</span>}
        </Link>
    );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f4f4f4]">
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full bg-white border-r border-[#e5e7eb] transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"
                    } ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-[#e5e7eb]">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0063b3] rounded-lg flex items-center justify-center">
                            <RiLineChartLine className="w-5 h-5 text-white" />
                        </div>
                        {sidebarOpen && (
                            <span className="font-bold text-xl text-[#222222]">Fintrix</span>
                        )}
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="hidden lg:flex p-1.5 rounded-lg hover:bg-[#f4f4f4] text-[#6b7280]"
                    >
                        <RiMenuLine className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="lg:hidden p-1.5 rounded-lg hover:bg-[#f4f4f4] text-[#6b7280]"
                    >
                        <RiCloseLine className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <ScrollArea className="h-[calc(100vh-8rem)] py-4 px-3">
                    {navigation.map((item) => (
                        <NavItemComponent key={item.title} item={item} isCollapsed={!sidebarOpen} />
                    ))}
                </ScrollArea>

                {/* User Section */}
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-[#e5e7eb] bg-white">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-[#f4f4f4] transition-colors">
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src={currentUser.avatar} />
                                    <AvatarFallback className="bg-[#0063b3] text-white text-sm">
                                        {currentUser.name.split(" ").map(n => n[0]).join("")}
                                    </AvatarFallback>
                                </Avatar>
                                {sidebarOpen && (
                                    <div className="flex-1 text-left min-w-0">
                                        <p className="text-sm font-medium text-[#222222] truncate">{currentUser.name}</p>
                                        <p className="text-xs text-[#6b7280]">Level: {currentUser.level}</p>
                                    </div>
                                )}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <RiSettings4Line className="w-4 h-4 mr-2" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                                <RiLogoutBoxLine className="w-4 h-4 mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </aside>

            {/* Main Content */}
            <div className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
                {/* Top Header */}
                <header className="sticky top-0 z-30 h-16 bg-white border-b border-[#e5e7eb] flex items-center justify-between px-4 lg:px-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="lg:hidden p-2 rounded-lg hover:bg-[#f4f4f4] text-[#6b7280]"
                        >
                            <RiMenuLine className="w-5 h-5" />
                        </button>
                        <div className="relative hidden sm:block">
                            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                            <Input
                                placeholder="Search courses, stocks, tools..."
                                className="w-64 lg:w-80 pl-9 bg-[#f4f4f4] border-0 focus-visible:ring-[#0063b3]"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#e9f7ef] rounded-lg">
                            <RiFireLine className="w-4 h-4 text-[#28a745]" />
                            <span className="text-sm font-medium text-[#28a745]">{currentUser.streak} Day Streak</span>
                        </div>
                        <Button variant="ghost" size="icon" className="relative">
                            <RiNotification3Line className="w-5 h-5 text-[#6b7280]" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </Button>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#0063b3]/10 rounded-lg">
                            <RiWalletLine className="w-4 h-4 text-[#0063b3]" />
                            <span className="text-sm font-medium text-[#0063b3]">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(currentUser.virtualBalance)}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
