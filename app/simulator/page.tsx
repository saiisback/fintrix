"use client";

import React, { useState } from "react";
import AppLayout from "@/components/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    RiArrowUpLine,
    RiArrowDownLine,
    RiSearchLine,
    RiAddLine,
    RiStarLine,
    RiStarFill,
    RiRefreshLine,
    RiWalletLine,
    RiExchangeLine,
    RiTimeLine,
} from "react-icons/ri";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { stocks, watchlist, stockChartData, currentUser, trades } from "@/lib/mock-data";

export default function SimulatorPage() {
    const [selectedStock, setSelectedStock] = useState(stocks[0]);
    const [orderType, setOrderType] = useState("buy");
    const [orderCategory, setOrderCategory] = useState("market");
    const [quantity, setQuantity] = useState("10");
    const [price, setPrice] = useState(selectedStock.price.toString());
    const [searchQuery, setSearchQuery] = useState("");
    const [watchlistItems, setWatchlistItems] = useState(watchlist.map((w) => w.symbol));

    const filteredStocks = stocks.filter(
        (s) =>
            s.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleWatchlist = (symbol: string) => {
        setWatchlistItems((prev) =>
            prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
        );
    };

    const calculateTotal = () => {
        const qty = parseInt(quantity) || 0;
        const p = orderCategory === "market" ? selectedStock.price : parseFloat(price) || 0;
        return qty * p;
    };

    const recentTrades = trades.slice(0, 6);

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#222222]">Virtual Trading Platform</h1>
                        <p className="text-[#6b7280] mt-1">Practice trading with virtual money</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-3 flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#0063b3]/10 rounded-lg flex items-center justify-center">
                                    <RiWalletLine className="w-5 h-5 text-[#0063b3]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280]">Virtual Balance</p>
                                    <p className="font-bold text-[#222222]">
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                            maximumFractionDigits: 0,
                                        }).format(currentUser.virtualBalance)}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Button variant="outline" size="icon">
                            <RiRefreshLine className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Watchlist */}
                    <Card className="border-0 shadow-sm lg:col-span-1">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Watchlist</CardTitle>
                                <Badge variant="outline">{watchlistItems.length}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="px-4 pb-2">
                                <div className="relative">
                                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                                    <Input
                                        placeholder="Search stocks..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-9 h-9"
                                    />
                                </div>
                            </div>
                            <ScrollArea className="h-[400px]">
                                {filteredStocks.map((stock) => (
                                    <button
                                        key={stock.symbol}
                                        onClick={() => {
                                            setSelectedStock(stock);
                                            setPrice(stock.price.toString());
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 border-b border-[#e5e7eb] hover:bg-[#f4f4f4] transition-colors ${selectedStock.symbol === stock.symbol ? "bg-[#0063b3]/5" : ""
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleWatchlist(stock.symbol);
                                                }}
                                                className="text-[#6b7280] hover:text-yellow-500"
                                            >
                                                {watchlistItems.includes(stock.symbol) ? (
                                                    <RiStarFill className="w-4 h-4 text-yellow-500" />
                                                ) : (
                                                    <RiStarLine className="w-4 h-4" />
                                                )}
                                            </button>
                                            <div className="text-left">
                                                <p className="font-medium text-[#222222]">{stock.symbol}</p>
                                                <p className="text-xs text-[#6b7280] truncate max-w-[100px]">{stock.name}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-[#222222]">{stock.price.toFixed(2)}</p>
                                            <p
                                                className={`text-xs flex items-center justify-end gap-0.5 ${stock.changePercent >= 0 ? "text-[#28a745]" : "text-red-500"
                                                    }`}
                                            >
                                                {stock.changePercent >= 0 ? (
                                                    <RiArrowUpLine className="w-3 h-3" />
                                                ) : (
                                                    <RiArrowDownLine className="w-3 h-3" />
                                                )}
                                                {Math.abs(stock.changePercent).toFixed(2)}%
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>

                    {/* Chart */}
                    <Card className="border-0 shadow-sm lg:col-span-2">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <CardTitle className="text-xl">{selectedStock.symbol}</CardTitle>
                                        <Badge
                                            className={`${selectedStock.changePercent >= 0 ? "bg-[#28a745]" : "bg-red-500"
                                                } text-white`}
                                        >
                                            {selectedStock.changePercent >= 0 ? "+" : ""}
                                            {selectedStock.changePercent.toFixed(2)}%
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-[#6b7280]">{selectedStock.name}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-[#222222]">
                                        {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
                                            selectedStock.price
                                        )}
                                    </p>
                                    <p
                                        className={`text-sm ${selectedStock.change >= 0 ? "text-[#28a745]" : "text-red-500"
                                            }`}
                                    >
                                        {selectedStock.change >= 0 ? "+" : ""}
                                        {selectedStock.change.toFixed(2)} Today
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {/* Time Filters */}
                            <div className="flex gap-2 mb-4">
                                {["1D", "1W", "1M", "3M", "1Y", "ALL"].map((period) => (
                                    <Button
                                        key={period}
                                        variant={period === "1D" ? "default" : "outline"}
                                        size="sm"
                                        className={period === "1D" ? "bg-[#0063b3]" : ""}
                                    >
                                        {period}
                                    </Button>
                                ))}
                            </div>

                            {/* Chart */}
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={stockChartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="time" tick={{ fill: "#6b7280", fontSize: 12 }} />
                                        <YAxis
                                            domain={["auto", "auto"]}
                                            tick={{ fill: "#6b7280", fontSize: 12 }}
                                            tickFormatter={(value) => value.toFixed(0)}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "#222222",
                                                border: "none",
                                                borderRadius: "8px",
                                                color: "#fff",
                                            }}
                                            formatter={(value: number) => [
                                                new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
                                                    value
                                                ),
                                                "Price",
                                            ]}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="price"
                                            stroke={selectedStock.changePercent >= 0 ? "#28a745" : "#ef4444"}
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Stock Info */}
                            <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-[#e5e7eb]">
                                <div>
                                    <p className="text-xs text-[#6b7280]">Open</p>
                                    <p className="font-medium text-[#222222]">{(selectedStock.price - 10).toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280]">High</p>
                                    <p className="font-medium text-[#222222]">{(selectedStock.price + 15).toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280]">Low</p>
                                    <p className="font-medium text-[#222222]">{(selectedStock.price - 20).toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280]">Volume</p>
                                    <p className="font-medium text-[#222222]">{(selectedStock.volume / 1000000).toFixed(1)}M</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Order Panel */}
                    <Card className="border-0 shadow-sm lg:col-span-1">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Place Order</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs value={orderType} onValueChange={setOrderType}>
                                <TabsList className="w-full">
                                    <TabsTrigger value="buy" className="flex-1 data-[state=active]:bg-[#28a745] data-[state=active]:text-white">
                                        Buy
                                    </TabsTrigger>
                                    <TabsTrigger value="sell" className="flex-1 data-[state=active]:bg-red-500 data-[state=active]:text-white">
                                        Sell
                                    </TabsTrigger>
                                </TabsList>

                                <div className="mt-4 space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-[#222222]">Order Type</label>
                                        <Select value={orderCategory} onValueChange={setOrderCategory}>
                                            <SelectTrigger className="mt-1">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="market">Market Order</SelectItem>
                                                <SelectItem value="limit">Limit Order</SelectItem>
                                                <SelectItem value="stop">Stop Loss</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-[#222222]">Quantity</label>
                                        <Input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            className="mt-1"
                                            min="1"
                                        />
                                    </div>

                                    {orderCategory !== "market" && (
                                        <div>
                                            <label className="text-sm font-medium text-[#222222]">
                                                {orderCategory === "limit" ? "Limit Price" : "Stop Price"}
                                            </label>
                                            <Input
                                                type="number"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="mt-1"
                                                step="0.05"
                                            />
                                        </div>
                                    )}

                                    <div className="p-4 bg-[#f4f4f4] rounded-lg space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#6b7280]">Price</span>
                                            <span className="text-[#222222]">
                                                {orderCategory === "market"
                                                    ? `${selectedStock.price.toFixed(2)} (Market)`
                                                    : parseFloat(price).toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#6b7280]">Quantity</span>
                                            <span className="text-[#222222]">{quantity}</span>
                                        </div>
                                        <div className="flex justify-between font-medium border-t border-[#e5e7eb] pt-2">
                                            <span className="text-[#222222]">Total</span>
                                            <span className="text-[#222222]">
                                                {new Intl.NumberFormat("en-IN", {
                                                    style: "currency",
                                                    currency: "INR",
                                                }).format(calculateTotal())}
                                            </span>
                                        </div>
                                    </div>

                                    <Button
                                        className={`w-full ${orderType === "buy"
                                                ? "bg-[#28a745] hover:bg-[#28a745]/90"
                                                : "bg-red-500 hover:bg-red-500/90"
                                            }`}
                                    >
                                        {orderType === "buy" ? "Buy" : "Sell"} {selectedStock.symbol}
                                    </Button>
                                </div>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Trades */}
                <Card className="border-0 shadow-sm">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Recent Trades</CardTitle>
                            <Button variant="outline" size="sm">
                                View All
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Time</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Symbol</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6b7280]">Type</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Qty</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Price</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Total</th>
                                        <th className="text-right py-3 px-4 text-sm font-medium text-[#6b7280]">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentTrades.map((trade) => (
                                        <tr key={trade.id} className="border-b border-[#e5e7eb] hover:bg-[#f4f4f4]">
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <RiTimeLine className="w-4 h-4 text-[#6b7280]" />
                                                    <span className="text-[#222222]">{trade.time}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 font-medium text-[#222222]">{trade.symbol}</td>
                                            <td className="py-3 px-4">
                                                <Badge
                                                    className={`${trade.type === "BUY" ? "bg-[#28a745]" : "bg-red-500"
                                                        } text-white`}
                                                >
                                                    {trade.type}
                                                </Badge>
                                            </td>
                                            <td className="py-3 px-4 text-right text-[#222222]">{trade.qty}</td>
                                            <td className="py-3 px-4 text-right text-[#222222]">{trade.price.toFixed(2)}</td>
                                            <td className="py-3 px-4 text-right font-medium text-[#222222]">
                                                {new Intl.NumberFormat("en-IN", {
                                                    style: "currency",
                                                    currency: "INR",
                                                    maximumFractionDigits: 0,
                                                }).format(trade.total)}
                                            </td>
                                            <td className="py-3 px-4 text-right">
                                                <Badge variant="outline" className="text-[#28a745] border-[#28a745]">
                                                    {trade.status}
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
