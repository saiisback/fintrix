"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    RiCalculatorLine,
    RiPercentLine,
    RiPieChartLine,
    RiLineChartLine,
    RiMoneyDollarCircleLine,
    RiArrowRightLine,
} from "react-icons/ri";

export default function ToolsPage() {
    // SIP Calculator State
    const [sipAmount, setSipAmount] = useState("5000");
    const [sipYears, setSipYears] = useState("10");
    const [sipRate, setSipRate] = useState("12");

    // Lumpsum Calculator State
    const [lumpsum, setLumpsum] = useState("100000");
    const [lumpsumYears, setLumpsumYears] = useState("10");
    const [lumpsumRate, setLumpsumRate] = useState("12");

    // Goal Calculator State
    const [goalAmount, setGoalAmount] = useState("1000000");
    const [goalYears, setGoalYears] = useState("15");
    const [goalRate, setGoalRate] = useState("12");

    // Position Size Calculator State
    const [capital, setCapital] = useState("100000");
    const [riskPercent, setRiskPercent] = useState("2");
    const [entryPrice, setEntryPrice] = useState("100");
    const [stopLoss, setStopLoss] = useState("95");

    const calculateSIP = () => {
        const P = parseFloat(sipAmount);
        const r = parseFloat(sipRate) / 100 / 12;
        const n = parseFloat(sipYears) * 12;
        const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        return {
            invested: P * n,
            returns: FV - P * n,
            total: FV,
        };
    };

    const calculateLumpsum = () => {
        const P = parseFloat(lumpsum);
        const r = parseFloat(lumpsumRate) / 100;
        const n = parseFloat(lumpsumYears);
        const FV = P * Math.pow(1 + r, n);
        return {
            invested: P,
            returns: FV - P,
            total: FV,
        };
    };

    const calculateGoalSIP = () => {
        const FV = parseFloat(goalAmount);
        const r = parseFloat(goalRate) / 100 / 12;
        const n = parseFloat(goalYears) * 12;
        const P = FV / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        return P;
    };

    const calculatePositionSize = () => {
        const cap = parseFloat(capital);
        const risk = parseFloat(riskPercent) / 100;
        const entry = parseFloat(entryPrice);
        const sl = parseFloat(stopLoss);
        const riskAmount = cap * risk;
        const riskPerShare = entry - sl;
        const shares = Math.floor(riskAmount / riskPerShare);
        return {
            riskAmount,
            shares,
            positionValue: shares * entry,
        };
    };

    const sipResult = calculateSIP();
    const lumpsumResult = calculateLumpsum();
    const goalSip = calculateGoalSIP();
    const positionResult = calculatePositionSize();

    const formatCurrency = (value: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Smart Tools</h1>
                    <p className="text-[#6b7280] mt-1">Financial calculators to help you plan better</p>
                </div>

                <Tabs defaultValue="sip" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4] flex-wrap">
                        <TabsTrigger value="sip" className="gap-2">
                            <RiCalculatorLine className="w-4 h-4" />
                            SIP Calculator
                        </TabsTrigger>
                        <TabsTrigger value="lumpsum" className="gap-2">
                            <RiMoneyDollarCircleLine className="w-4 h-4" />
                            Lumpsum
                        </TabsTrigger>
                        <TabsTrigger value="goal" className="gap-2">
                            <RiLineChartLine className="w-4 h-4" />
                            Goal Planner
                        </TabsTrigger>
                        <TabsTrigger value="position" className="gap-2">
                            <RiPieChartLine className="w-4 h-4" />
                            Position Size
                        </TabsTrigger>
                    </TabsList>

                    {/* SIP Calculator */}
                    <TabsContent value="sip">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>SIP Calculator</CardTitle>
                                    <CardDescription>Calculate returns on your systematic investments</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Monthly Investment</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={sipAmount}
                                                onChange={(e) => setSipAmount(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Investment Period (Years)</Label>
                                        <Input
                                            type="number"
                                            value={sipYears}
                                            onChange={(e) => setSipYears(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>Expected Annual Return (%)</Label>
                                        <Input
                                            type="number"
                                            value={sipRate}
                                            onChange={(e) => setSipRate(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm bg-gradient-to-br from-[#0063b3] to-[#004080] text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-medium opacity-80">Results</h3>
                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <p className="text-sm opacity-70">Invested Amount</p>
                                            <p className="text-2xl font-bold">{formatCurrency(sipResult.invested)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70">Estimated Returns</p>
                                            <p className="text-2xl font-bold text-[#86efac]">{formatCurrency(sipResult.returns)}</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/20">
                                            <p className="text-sm opacity-70">Total Value</p>
                                            <p className="text-3xl font-bold">{formatCurrency(sipResult.total)}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Lumpsum Calculator */}
                    <TabsContent value="lumpsum">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Lumpsum Calculator</CardTitle>
                                    <CardDescription>Calculate returns on one-time investments</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Investment Amount</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={lumpsum}
                                                onChange={(e) => setLumpsum(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Investment Period (Years)</Label>
                                        <Input
                                            type="number"
                                            value={lumpsumYears}
                                            onChange={(e) => setLumpsumYears(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>Expected Annual Return (%)</Label>
                                        <Input
                                            type="number"
                                            value={lumpsumRate}
                                            onChange={(e) => setLumpsumRate(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm bg-gradient-to-br from-[#28a745] to-[#1a6b2d] text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-medium opacity-80">Results</h3>
                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <p className="text-sm opacity-70">Invested Amount</p>
                                            <p className="text-2xl font-bold">{formatCurrency(lumpsumResult.invested)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70">Estimated Returns</p>
                                            <p className="text-2xl font-bold">{formatCurrency(lumpsumResult.returns)}</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/20">
                                            <p className="text-sm opacity-70">Total Value</p>
                                            <p className="text-3xl font-bold">{formatCurrency(lumpsumResult.total)}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Goal Planner */}
                    <TabsContent value="goal">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Goal Planner</CardTitle>
                                    <CardDescription>Find out how much to invest to reach your goal</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Target Amount</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={goalAmount}
                                                onChange={(e) => setGoalAmount(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Time Horizon (Years)</Label>
                                        <Input
                                            type="number"
                                            value={goalYears}
                                            onChange={(e) => setGoalYears(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>Expected Annual Return (%)</Label>
                                        <Input
                                            type="number"
                                            value={goalRate}
                                            onChange={(e) => setGoalRate(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-600 to-purple-800 text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-medium opacity-80">Required Monthly SIP</h3>
                                    <div className="mt-6">
                                        <p className="text-4xl font-bold">{formatCurrency(goalSip)}</p>
                                        <p className="text-sm opacity-70 mt-2">per month</p>
                                    </div>
                                    <div className="mt-8 p-4 bg-white/10 rounded-lg">
                                        <p className="text-sm">
                                            To reach {formatCurrency(parseFloat(goalAmount))} in {goalYears} years,
                                            invest {formatCurrency(goalSip)} monthly at {goalRate}% expected returns.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Position Size Calculator */}
                    <TabsContent value="position">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Position Size Calculator</CardTitle>
                                    <CardDescription>Calculate optimal position size based on risk</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Total Capital</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={capital}
                                                onChange={(e) => setCapital(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Risk per Trade (%)</Label>
                                        <Input
                                            type="number"
                                            value={riskPercent}
                                            onChange={(e) => setRiskPercent(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>Entry Price</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={entryPrice}
                                                onChange={(e) => setEntryPrice(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Stop Loss Price</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={stopLoss}
                                                onChange={(e) => setStopLoss(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-500 to-orange-700 text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-medium opacity-80">Results</h3>
                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <p className="text-sm opacity-70">Risk Amount</p>
                                            <p className="text-2xl font-bold">{formatCurrency(positionResult.riskAmount)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70">Number of Shares</p>
                                            <p className="text-2xl font-bold">{positionResult.shares}</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/20">
                                            <p className="text-sm opacity-70">Position Value</p>
                                            <p className="text-3xl font-bold">{formatCurrency(positionResult.positionValue)}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
