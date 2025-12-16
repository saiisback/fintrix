"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
    RiScales3Line,
    RiPercentLine,
    RiMoneyDollarCircleLine,
    RiStockLine,
    RiLineChartLine,
    RiArrowUpLine,
    RiArrowDownLine,
    RiCheckLine,
    RiCloseLine,
    RiInformationLine,
} from "react-icons/ri";

export default function CalculatorsPage() {
    // Position Size Calculator
    const [capital, setCapital] = useState("100000");
    const [riskPercent, setRiskPercent] = useState("2");
    const [entryPrice, setEntryPrice] = useState("100");
    const [stopLossPrice, setStopLossPrice] = useState("95");

    // Risk-Reward Calculator
    const [rrEntry, setRrEntry] = useState("100");
    const [rrStopLoss, setRrStopLoss] = useState("95");
    const [rrTarget, setRrTarget] = useState("115");

    // PnL Calculator
    const [pnlQty, setPnlQty] = useState("100");
    const [pnlBuyPrice, setPnlBuyPrice] = useState("100");
    const [pnlSellPrice, setPnlSellPrice] = useState("110");
    const [pnlTradeType, setPnlTradeType] = useState<"long" | "short">("long");

    // Options Calculator
    const [optionType, setOptionType] = useState<"call" | "put">("call");
    const [optStrikePrice, setOptStrikePrice] = useState("100");
    const [optPremium, setOptPremium] = useState("5");
    const [optQty, setOptQty] = useState("1");
    const [optLotSize, setOptLotSize] = useState("50");

    // Compound Growth Calculator
    const [cgInitial, setCgInitial] = useState("100000");
    const [cgMonthlyReturn, setCgMonthlyReturn] = useState("3");
    const [cgMonths, setCgMonths] = useState("12");

    // Format currency
    const formatCurrency = (value: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);

    // Position Size Calculations
    const calculatePositionSize = () => {
        const cap = parseFloat(capital) || 0;
        const risk = parseFloat(riskPercent) / 100 || 0;
        const entry = parseFloat(entryPrice) || 0;
        const sl = parseFloat(stopLossPrice) || 0;

        const riskAmount = cap * risk;
        const riskPerShare = Math.abs(entry - sl);
        const shares = riskPerShare > 0 ? Math.floor(riskAmount / riskPerShare) : 0;
        const positionValue = shares * entry;
        const positionPercent = cap > 0 ? (positionValue / cap) * 100 : 0;

        return { riskAmount, shares, positionValue, positionPercent, riskPerShare };
    };

    // Risk-Reward Calculations
    const calculateRiskReward = () => {
        const entry = parseFloat(rrEntry) || 0;
        const sl = parseFloat(rrStopLoss) || 0;
        const target = parseFloat(rrTarget) || 0;

        const risk = Math.abs(entry - sl);
        const reward = Math.abs(target - entry);
        const ratio = risk > 0 ? reward / risk : 0;
        const riskPercent = entry > 0 ? (risk / entry) * 100 : 0;
        const rewardPercent = entry > 0 ? (reward / entry) * 100 : 0;
        const breakeven = entry;
        const isWorthIt = ratio >= 2;

        return { risk, reward, ratio, riskPercent, rewardPercent, breakeven, isWorthIt };
    };

    // PnL Calculations
    const calculatePnL = () => {
        const qty = parseFloat(pnlQty) || 0;
        const buy = parseFloat(pnlBuyPrice) || 0;
        const sell = parseFloat(pnlSellPrice) || 0;

        let pnl: number;
        if (pnlTradeType === "long") {
            pnl = (sell - buy) * qty;
        } else {
            pnl = (buy - sell) * qty;
        }

        const investment = buy * qty;
        const pnlPercent = investment > 0 ? (pnl / investment) * 100 : 0;

        return { pnl, pnlPercent, investment };
    };

    // Options Calculations
    const calculateOptions = () => {
        const strike = parseFloat(optStrikePrice) || 0;
        const premium = parseFloat(optPremium) || 0;
        const qty = parseFloat(optQty) || 0;
        const lotSize = parseFloat(optLotSize) || 0;

        const totalPremium = premium * qty * lotSize;
        const maxLoss = totalPremium;

        let breakeven: number;
        if (optionType === "call") {
            breakeven = strike + premium;
        } else {
            breakeven = strike - premium;
        }

        // Max profit is unlimited for calls, limited for puts (strike - premium)
        const maxProfit = optionType === "call" ? "Unlimited" : formatCurrency((strike - premium) * qty * lotSize);

        return { totalPremium, maxLoss, breakeven, maxProfit };
    };

    // Compound Growth Calculations
    const calculateCompoundGrowth = () => {
        const initial = parseFloat(cgInitial) || 0;
        const monthlyReturn = parseFloat(cgMonthlyReturn) / 100 || 0;
        const months = parseInt(cgMonths) || 0;

        const finalValue = initial * Math.pow(1 + monthlyReturn, months);
        const totalGain = finalValue - initial;
        const totalReturnPercent = initial > 0 ? (totalGain / initial) * 100 : 0;

        // Generate monthly breakdown
        const breakdown = [];
        let current = initial;
        for (let i = 1; i <= Math.min(months, 12); i++) {
            current = current * (1 + monthlyReturn);
            breakdown.push({
                month: i,
                value: current,
                gain: current - initial,
            });
        }

        return { finalValue, totalGain, totalReturnPercent, breakdown };
    };

    const positionResult = calculatePositionSize();
    const rrResult = calculateRiskReward();
    const pnlResult = calculatePnL();
    const optResult = calculateOptions();
    const cgResult = calculateCompoundGrowth();

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Trading Calculators</h1>
                    <p className="text-[#6b7280] mt-1">Quick tools to help you make better trading decisions</p>
                </div>

                <Tabs defaultValue="position" className="space-y-6">
                    <TabsList className="bg-[#f4f4f4] flex-wrap h-auto gap-1 p-1">
                        <TabsTrigger value="position" className="gap-2">
                            <RiScales3Line className="w-4 h-4" />
                            Position Size
                        </TabsTrigger>
                        <TabsTrigger value="riskreward" className="gap-2">
                            <RiPercentLine className="w-4 h-4" />
                            Risk-Reward
                        </TabsTrigger>
                        <TabsTrigger value="pnl" className="gap-2">
                            <RiMoneyDollarCircleLine className="w-4 h-4" />
                            PnL
                        </TabsTrigger>
                        <TabsTrigger value="options" className="gap-2">
                            <RiStockLine className="w-4 h-4" />
                            Options
                        </TabsTrigger>
                        <TabsTrigger value="compound" className="gap-2">
                            <RiLineChartLine className="w-4 h-4" />
                            Compound Growth
                        </TabsTrigger>
                    </TabsList>

                    {/* Position Size Calculator */}
                    <TabsContent value="position">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <RiScales3Line className="w-5 h-5 text-[#0063b3]" />
                                        Position Size Calculator
                                    </CardTitle>
                                    <CardDescription>
                                        Calculate how many shares to buy based on your risk tolerance
                                    </CardDescription>
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
                                        <Label>Risk Per Trade (%)</Label>
                                        <div className="relative mt-1">
                                            <Input
                                                type="number"
                                                value={riskPercent}
                                                onChange={(e) => setRiskPercent(e.target.value)}
                                                className="pr-8"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280]">%</span>
                                        </div>
                                        <p className="text-xs text-[#6b7280] mt-1">Recommended: 1-2% per trade</p>
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
                                                value={stopLossPrice}
                                                onChange={(e) => setStopLossPrice(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm bg-gradient-to-br from-[#0063b3] to-[#004080] text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-medium opacity-80">Results</h3>
                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <p className="text-sm opacity-70">Risk Amount</p>
                                            <p className="text-2xl font-bold">{formatCurrency(positionResult.riskAmount)}</p>
                                            <p className="text-xs opacity-60">Maximum you can lose on this trade</p>
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70">Risk Per Share</p>
                                            <p className="text-2xl font-bold">{formatCurrency(positionResult.riskPerShare)}</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/20">
                                            <p className="text-sm opacity-70">Number of Shares</p>
                                            <p className="text-4xl font-bold">{positionResult.shares}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70">Position Value</p>
                                            <p className="text-2xl font-bold">{formatCurrency(positionResult.positionValue)}</p>
                                            <p className="text-xs opacity-60">{positionResult.positionPercent.toFixed(1)}% of capital</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Risk-Reward Calculator */}
                    <TabsContent value="riskreward">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <RiPercentLine className="w-5 h-5 text-[#8b5cf6]" />
                                        Risk-Reward Calculator
                                    </CardTitle>
                                    <CardDescription>
                                        Check if a trade is worth taking based on risk vs potential reward
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Entry Price</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={rrEntry}
                                                onChange={(e) => setRrEntry(e.target.value)}
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
                                                value={rrStopLoss}
                                                onChange={(e) => setRrStopLoss(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Target Price</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={rrTarget}
                                                onChange={(e) => setRrTarget(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-medium text-[#222222]">Results</h3>
                                        {rrResult.isWorthIt ? (
                                            <Badge className="bg-[#28a745]/10 text-[#28a745] gap-1">
                                                <RiCheckLine className="w-4 h-4" />
                                                Good Trade
                                            </Badge>
                                        ) : (
                                            <Badge className="bg-[#dc2626]/10 text-[#dc2626] gap-1">
                                                <RiCloseLine className="w-4 h-4" />
                                                Poor R:R
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Visual Ratio Bar */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm text-[#6b7280]">Risk-Reward Ratio</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 h-12 bg-[#dc2626]/20 rounded-lg flex items-center justify-center">
                                                <div className="text-center">
                                                    <p className="text-lg font-bold text-[#dc2626]">1</p>
                                                    <p className="text-xs text-[#6b7280]">Risk</p>
                                                </div>
                                            </div>
                                            <span className="text-xl font-bold text-[#222222]">:</span>
                                            <div
                                                className="flex-1 h-12 bg-[#28a745]/20 rounded-lg flex items-center justify-center"
                                                style={{ flex: Math.max(rrResult.ratio, 0.5) }}
                                            >
                                                <div className="text-center">
                                                    <p className="text-lg font-bold text-[#28a745]">{rrResult.ratio.toFixed(2)}</p>
                                                    <p className="text-xs text-[#6b7280]">Reward</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-[#dc2626]/10 rounded-lg">
                                            <p className="text-sm text-[#6b7280]">Risk</p>
                                            <p className="text-xl font-bold text-[#dc2626]">{formatCurrency(rrResult.risk)}</p>
                                            <p className="text-xs text-[#6b7280]">{rrResult.riskPercent.toFixed(2)}%</p>
                                        </div>
                                        <div className="p-3 bg-[#28a745]/10 rounded-lg">
                                            <p className="text-sm text-[#6b7280]">Reward</p>
                                            <p className="text-xl font-bold text-[#28a745]">{formatCurrency(rrResult.reward)}</p>
                                            <p className="text-xs text-[#6b7280]">{rrResult.rewardPercent.toFixed(2)}%</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-[#f4f4f4] rounded-lg flex items-start gap-2">
                                        <RiInformationLine className="w-5 h-5 text-[#0063b3] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#6b7280]">
                                            {rrResult.ratio >= 2
                                                ? "This trade has a favorable risk-reward ratio. Consider taking it if your analysis supports the setup."
                                                : rrResult.ratio >= 1
                                                    ? "This trade is marginal. Aim for at least 1:2 risk-reward for better long-term results."
                                                    : "The risk outweighs the reward. Reconsider your entry, stop loss, or target levels."
                                            }
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* PnL Calculator */}
                    <TabsContent value="pnl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <RiMoneyDollarCircleLine className="w-5 h-5 text-[#28a745]" />
                                        PnL Calculator
                                    </CardTitle>
                                    <CardDescription>
                                        Quickly calculate profit or loss on your trades
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Trade Type</Label>
                                        <div className="flex gap-2 mt-1">
                                            <Button
                                                variant={pnlTradeType === "long" ? "default" : "outline"}
                                                className={`flex-1 ${pnlTradeType === "long" ? "bg-[#28a745] hover:bg-[#28a745]/90" : ""}`}
                                                onClick={() => setPnlTradeType("long")}
                                            >
                                                <RiArrowUpLine className="w-4 h-4 mr-2" />
                                                Long (Buy)
                                            </Button>
                                            <Button
                                                variant={pnlTradeType === "short" ? "default" : "outline"}
                                                className={`flex-1 ${pnlTradeType === "short" ? "bg-[#dc2626] hover:bg-[#dc2626]/90" : ""}`}
                                                onClick={() => setPnlTradeType("short")}
                                            >
                                                <RiArrowDownLine className="w-4 h-4 mr-2" />
                                                Short (Sell)
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Quantity (Shares)</Label>
                                        <Input
                                            type="number"
                                            value={pnlQty}
                                            onChange={(e) => setPnlQty(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>{pnlTradeType === "long" ? "Buy Price" : "Sell Price (Entry)"}</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={pnlBuyPrice}
                                                onChange={(e) => setPnlBuyPrice(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>{pnlTradeType === "long" ? "Sell Price" : "Buy Price (Exit)"}</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={pnlSellPrice}
                                                onChange={(e) => setPnlSellPrice(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className={`border-0 shadow-sm ${pnlResult.pnl >= 0
                                ? "bg-gradient-to-br from-[#28a745] to-[#1a6b2d]"
                                : "bg-gradient-to-br from-[#dc2626] to-[#991b1b]"} text-white`}
                            >
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-medium opacity-80">Results</h3>
                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <p className="text-sm opacity-70">Investment</p>
                                            <p className="text-2xl font-bold">{formatCurrency(pnlResult.investment)}</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/20">
                                            <p className="text-sm opacity-70">{pnlResult.pnl >= 0 ? "Profit" : "Loss"}</p>
                                            <p className="text-4xl font-bold">
                                                {pnlResult.pnl >= 0 ? "+" : ""}{formatCurrency(pnlResult.pnl)}
                                            </p>
                                            <p className="text-lg opacity-80">
                                                ({pnlResult.pnlPercent >= 0 ? "+" : ""}{pnlResult.pnlPercent.toFixed(2)}%)
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Options Calculator */}
                    <TabsContent value="options">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <RiStockLine className="w-5 h-5 text-[#f59e0b]" />
                                        Options Payoff Calculator
                                    </CardTitle>
                                    <CardDescription>
                                        Understand your max profit, max loss, and breakeven before trading
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Option Type</Label>
                                        <div className="flex gap-2 mt-1">
                                            <Button
                                                variant={optionType === "call" ? "default" : "outline"}
                                                className={`flex-1 ${optionType === "call" ? "bg-[#28a745] hover:bg-[#28a745]/90" : ""}`}
                                                onClick={() => setOptionType("call")}
                                            >
                                                Call Option
                                            </Button>
                                            <Button
                                                variant={optionType === "put" ? "default" : "outline"}
                                                className={`flex-1 ${optionType === "put" ? "bg-[#dc2626] hover:bg-[#dc2626]/90" : ""}`}
                                                onClick={() => setOptionType("put")}
                                            >
                                                Put Option
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Strike Price</Label>
                                            <div className="relative mt-1">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                                <Input
                                                    type="number"
                                                    value={optStrikePrice}
                                                    onChange={(e) => setOptStrikePrice(e.target.value)}
                                                    className="pl-8"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label>Premium</Label>
                                            <div className="relative mt-1">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                                <Input
                                                    type="number"
                                                    value={optPremium}
                                                    onChange={(e) => setOptPremium(e.target.value)}
                                                    className="pl-8"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Quantity (Lots)</Label>
                                            <Input
                                                type="number"
                                                value={optQty}
                                                onChange={(e) => setOptQty(e.target.value)}
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label>Lot Size</Label>
                                            <Input
                                                type="number"
                                                value={optLotSize}
                                                onChange={(e) => setOptLotSize(e.target.value)}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-sm bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-medium opacity-80">Options Payoff</h3>
                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <p className="text-sm opacity-70">Total Premium Paid</p>
                                            <p className="text-2xl font-bold">{formatCurrency(optResult.totalPremium)}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                                            <div>
                                                <p className="text-sm opacity-70">Max Loss</p>
                                                <p className="text-xl font-bold">{formatCurrency(optResult.maxLoss)}</p>
                                                <p className="text-xs opacity-60">Premium paid</p>
                                            </div>
                                            <div>
                                                <p className="text-sm opacity-70">Max Profit</p>
                                                <p className="text-xl font-bold">{optResult.maxProfit}</p>
                                                <p className="text-xs opacity-60">{optionType === "call" ? "Theoretically unlimited" : "If stock goes to zero"}</p>
                                            </div>
                                        </div>
                                        <div className="pt-4 border-t border-white/20">
                                            <p className="text-sm opacity-70">Breakeven Price</p>
                                            <p className="text-3xl font-bold">{formatCurrency(optResult.breakeven)}</p>
                                            <p className="text-xs opacity-60">
                                                Stock needs to {optionType === "call" ? "rise above" : "fall below"} this price to profit
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Compound Growth Calculator */}
                    <TabsContent value="compound">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <RiLineChartLine className="w-5 h-5 text-[#8b5cf6]" />
                                        Compound Growth Calculator
                                    </CardTitle>
                                    <CardDescription>
                                        See how consistent returns can grow your capital over time
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Initial Capital</Label>
                                        <div className="relative mt-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">₹</span>
                                            <Input
                                                type="number"
                                                value={cgInitial}
                                                onChange={(e) => setCgInitial(e.target.value)}
                                                className="pl-8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Monthly Return (%)</Label>
                                        <div className="relative mt-1">
                                            <Input
                                                type="number"
                                                value={cgMonthlyReturn}
                                                onChange={(e) => setCgMonthlyReturn(e.target.value)}
                                                className="pr-8"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280]">%</span>
                                        </div>
                                        <p className="text-xs text-[#6b7280] mt-1">Enter your average monthly return target</p>
                                    </div>
                                    <div>
                                        <Label>Time Period (Months)</Label>
                                        <Input
                                            type="number"
                                            value={cgMonths}
                                            onChange={(e) => setCgMonths(e.target.value)}
                                            className="mt-1"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="space-y-6">
                                <Card className="border-0 shadow-sm bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] text-white">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-medium opacity-80">Growth Projection</h3>
                                        <div className="mt-6 space-y-6">
                                            <div>
                                                <p className="text-sm opacity-70">Starting Capital</p>
                                                <p className="text-2xl font-bold">{formatCurrency(parseFloat(cgInitial) || 0)}</p>
                                            </div>
                                            <div className="pt-4 border-t border-white/20">
                                                <p className="text-sm opacity-70">Final Value</p>
                                                <p className="text-4xl font-bold">{formatCurrency(cgResult.finalValue)}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm opacity-70">Total Gain</p>
                                                    <p className="text-xl font-bold">{formatCurrency(cgResult.totalGain)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm opacity-70">Total Return</p>
                                                    <p className="text-xl font-bold">{cgResult.totalReturnPercent.toFixed(1)}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Monthly Breakdown */}
                                <Card className="border-0 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">Monthly Breakdown</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 max-h-48 overflow-y-auto">
                                            {cgResult.breakdown.map((month) => (
                                                <div key={month.month} className="flex items-center justify-between p-2 rounded-lg bg-[#f4f4f4]">
                                                    <span className="text-sm font-medium text-[#222222]">Month {month.month}</span>
                                                    <div className="text-right">
                                                        <span className="text-sm font-medium text-[#222222]">{formatCurrency(month.value)}</span>
                                                        <span className="text-xs text-[#28a745] ml-2">+{formatCurrency(month.gain)}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
