"use client";

import React from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    RiShieldLine,
    RiAlertLine,
    RiPieChartLine,
    RiLineChartLine,
    RiArrowUpLine,
    RiArrowDownLine,
    RiCheckLine,
    RiCloseLine,
    RiInformationLine,
} from "react-icons/ri";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
} from "recharts";
import { portfolioHoldings } from "@/lib/mock-data";

const riskMetrics = {
    overallScore: 72,
    volatility: "Medium",
    diversification: "Good",
    concentration: "Moderate",
    beta: 1.15,
};

const sectorAllocation = [
    { name: "Technology", value: 35, color: "#0063b3" },
    { name: "Banking", value: 25, color: "#28a745" },
    { name: "Energy", value: 20, color: "#f59e0b" },
    { name: "Metals", value: 12, color: "#8b5cf6" },
    { name: "FMCG", value: 8, color: "#ec4899" },
];

const healthMetrics = [
    { metric: "Diversification", score: 80 },
    { metric: "Risk-Reward", score: 65 },
    { metric: "Sector Balance", score: 70 },
    { metric: "Liquidity", score: 90 },
    { metric: "Concentration", score: 55 },
];

export default function PortfolioAnalysisPage() {
    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Portfolio Analysis</h1>
                    <p className="text-[#6b7280] mt-1">Comprehensive analysis of your portfolio health</p>
                </div>

                {/* Risk Score Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="border-0 shadow-sm lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <RiShieldLine className="w-5 h-5 text-[#0063b3]" />
                                Portfolio Health Score
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="relative">
                                    <svg className="w-40 h-40 transform -rotate-90">
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="70"
                                            stroke="#e5e7eb"
                                            strokeWidth="12"
                                            fill="none"
                                        />
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="70"
                                            stroke={riskMetrics.overallScore >= 70 ? "#28a745" : riskMetrics.overallScore >= 50 ? "#f59e0b" : "#ef4444"}
                                            strokeWidth="12"
                                            fill="none"
                                            strokeDasharray={`${(riskMetrics.overallScore / 100) * 440} 440`}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-[#222222]">{riskMetrics.overallScore}</p>
                                            <p className="text-sm text-[#6b7280]">out of 100</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-[#f4f4f4] rounded-lg">
                                        <p className="text-sm text-[#6b7280]">Volatility</p>
                                        <p className="text-lg font-bold text-[#222222]">{riskMetrics.volatility}</p>
                                    </div>
                                    <div className="p-4 bg-[#f4f4f4] rounded-lg">
                                        <p className="text-sm text-[#6b7280]">Diversification</p>
                                        <p className="text-lg font-bold text-[#28a745]">{riskMetrics.diversification}</p>
                                    </div>
                                    <div className="p-4 bg-[#f4f4f4] rounded-lg">
                                        <p className="text-sm text-[#6b7280]">Concentration</p>
                                        <p className="text-lg font-bold text-[#f59e0b]">{riskMetrics.concentration}</p>
                                    </div>
                                    <div className="p-4 bg-[#f4f4f4] rounded-lg">
                                        <p className="text-sm text-[#6b7280]">Portfolio Beta</p>
                                        <p className="text-lg font-bold text-[#222222]">{riskMetrics.beta}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Sector Allocation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-40">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={sectorAllocation} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" paddingAngle={2}>
                                            {sectorAllocation.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-2 mt-4">
                                {sectorAllocation.map((sector) => (
                                    <div key={sector.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }} />
                                            <span className="text-sm text-[#6b7280]">{sector.name}</span>
                                        </div>
                                        <span className="text-sm font-medium text-[#222222]">{sector.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Health Metrics Radar */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Health Metrics</CardTitle>
                            <CardDescription>Multi-dimensional portfolio analysis</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart data={healthMetrics}>
                                        <PolarGrid stroke="#e5e7eb" />
                                        <PolarAngleAxis dataKey="metric" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <Radar name="Score" dataKey="score" stroke="#0063b3" fill="#0063b3" fillOpacity={0.3} strokeWidth={2} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Recommendations</CardTitle>
                            <CardDescription>Suggestions to improve your portfolio</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-3 bg-[#f59e0b]/5 border border-[#f59e0b]/30 rounded-lg">
                                    <RiAlertLine className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-[#222222]">Reduce IT sector concentration</p>
                                        <p className="text-sm text-[#6b7280]">Your Technology allocation (35%) is above the recommended 25%</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-[#28a745]/5 border border-[#28a745]/30 rounded-lg">
                                    <RiCheckLine className="w-5 h-5 text-[#28a745] shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-[#222222]">Good liquidity profile</p>
                                        <p className="text-sm text-[#6b7280]">90% of your holdings are highly liquid stocks</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-[#0063b3]/5 border border-[#0063b3]/30 rounded-lg">
                                    <RiInformationLine className="w-5 h-5 text-[#0063b3] shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-[#222222]">Consider adding defensive stocks</p>
                                        <p className="text-sm text-[#6b7280]">Add pharma or FMCG stocks to reduce portfolio beta</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Holdings Risk Breakdown */}
                <Card className="border-0 shadow-sm">
                    <CardHeader>
                        <CardTitle>Holdings Risk Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Stock</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Weight</th>
                                        <th className="text-center py-3 px-4 text-sm font-medium text-[#6b7280]">Volatility</th>
                                        <th className="text-center py-3 px-4 text-sm font-medium text-[#6b7280]">Beta</th>
                                        <th className="text-center py-3 px-4 text-sm font-medium text-[#6b7280]">Risk Level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {portfolioHoldings.slice(0, 5).map((holding) => (
                                        <tr key={holding.symbol} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                            <td className="py-4 px-4">
                                                <p className="font-medium text-[#222222]">{holding.symbol}</p>
                                                <p className="text-sm text-[#6b7280]">{holding.name}</p>
                                            </td>
                                            <td className="py-4 px-4 text-right font-medium">
                                                {(((holding.currentValue) / 1240000) * 100).toFixed(1)}%
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <Badge variant="secondary">Medium</Badge>
                                            </td>
                                            <td className="py-4 px-4 text-center font-medium">
                                                {(0.8 + Math.random() * 0.6).toFixed(2)}
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <Badge className={`${Math.random() > 0.5 ? "bg-[#28a745]" : "bg-[#f59e0b]"}`}>
                                                    {Math.random() > 0.5 ? "Low" : "Medium"}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
