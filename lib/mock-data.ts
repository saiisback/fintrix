// Fintrix Mock Data Store
// Comprehensive mock data for all platform features

// ============================================
// USER DATA
// ============================================
export const currentUser = {
    id: "user_001",
    name: "Arjun Sharma",
    email: "arjun.sharma@email.com",
    avatar: "/placeholder-user.jpg",
    college: "IIT Delhi",
    joinedDate: "2024-01-15",
    level: "Intermediate",
    xp: 4520,
    rank: 156,
    streak: 12,
    virtualBalance: 1000000,
    portfolioValue: 1156780,
    totalProfitLoss: 156780,
    totalProfitLossPercent: 15.68,
    completedCourses: 8,
    activeCourses: 3,
    certificatesEarned: 5,
    badges: ["first_trade", "week_streak", "quiz_master", "diversifier"],
};

// ============================================
// COURSES DATA
// ============================================
export const courses = [
    {
        id: "course_001",
        title: "Stock Market Fundamentals",
        description: "Learn the basics of stock market investing, understanding market mechanics, and building your first portfolio.",
        instructor: "Dr. Priya Mehta",
        instructorAvatar: "/placeholder-user.jpg",
        instructorBio: "Former Goldman Sachs analyst with 15+ years of experience in equity research.",
        duration: "8 hours",
        lessons: 24,
        level: "Beginner",
        rating: 4.8,
        students: 12450,
        price: 0,
        category: "Stocks",
        thumbnail: "/placeholder.svg",
        progress: 75,
        tags: ["stocks", "investing", "fundamentals"],
        syllabus: [
            { module: "Introduction to Markets", lessons: 4, duration: "1h 20m" },
            { module: "Understanding Stocks", lessons: 5, duration: "1h 45m" },
            { module: "Market Participants", lessons: 4, duration: "1h 15m" },
            { module: "Order Types & Execution", lessons: 5, duration: "1h 40m" },
            { module: "Building Your Portfolio", lessons: 6, duration: "2h" },
        ],
    },
    {
        id: "course_002",
        title: "Technical Analysis Masterclass",
        description: "Master chart patterns, indicators, and technical analysis strategies used by professional traders.",
        instructor: "Rajesh Kumar",
        instructorAvatar: "/placeholder-user.jpg",
        instructorBio: "Professional trader and technical analyst with a track record of 18% annual returns.",
        duration: "12 hours",
        lessons: 36,
        level: "Intermediate",
        rating: 4.9,
        students: 8920,
        price: 0,
        category: "Technical Analysis",
        thumbnail: "/placeholder.svg",
        progress: 45,
        tags: ["technical analysis", "charts", "indicators"],
        syllabus: [
            { module: "Chart Basics", lessons: 6, duration: "2h" },
            { module: "Candlestick Patterns", lessons: 8, duration: "2h 40m" },
            { module: "Support & Resistance", lessons: 6, duration: "2h" },
            { module: "Technical Indicators", lessons: 10, duration: "3h 20m" },
            { module: "Trading Strategies", lessons: 6, duration: "2h" },
        ],
    },
    {
        id: "course_003",
        title: "Options Trading Strategies",
        description: "Comprehensive guide to options trading, from basics to advanced strategies like Iron Condors and Straddles.",
        instructor: "Anil Verma",
        instructorAvatar: "/placeholder-user.jpg",
        instructorBio: "Options trading specialist with experience at SEBI-registered firms.",
        duration: "15 hours",
        lessons: 42,
        level: "Advanced",
        rating: 4.7,
        students: 5640,
        price: 0,
        category: "Options",
        thumbnail: "/placeholder.svg",
        progress: 0,
        tags: ["options", "derivatives", "strategies"],
        syllabus: [
            { module: "Options Fundamentals", lessons: 8, duration: "3h" },
            { module: "Greeks Explained", lessons: 6, duration: "2h 30m" },
            { module: "Basic Strategies", lessons: 10, duration: "3h 30m" },
            { module: "Advanced Strategies", lessons: 12, duration: "4h" },
            { module: "Risk Management", lessons: 6, duration: "2h" },
        ],
    },
    {
        id: "course_004",
        title: "Forex Trading Essentials",
        description: "Learn currency markets, forex pairs, and develop effective forex trading strategies.",
        instructor: "Neha Singh",
        instructorAvatar: "/placeholder-user.jpg",
        instructorBio: "Forex trader with 10+ years experience in currency markets.",
        duration: "10 hours",
        lessons: 28,
        level: "Intermediate",
        rating: 4.6,
        students: 7230,
        price: 0,
        category: "Forex",
        thumbnail: "/placeholder.svg",
        progress: 20,
        tags: ["forex", "currency", "trading"],
        syllabus: [
            { module: "Currency Markets 101", lessons: 6, duration: "2h" },
            { module: "Forex Pairs Analysis", lessons: 8, duration: "2h 40m" },
            { module: "Trading Sessions", lessons: 4, duration: "1h 20m" },
            { module: "Risk in Forex", lessons: 6, duration: "2h" },
            { module: "Strategy Development", lessons: 4, duration: "2h" },
        ],
    },
    {
        id: "course_005",
        title: "Cryptocurrency Investing",
        description: "Navigate the world of crypto - from Bitcoin basics to DeFi and blockchain technology.",
        instructor: "Vikram Patel",
        instructorAvatar: "/placeholder-user.jpg",
        instructorBio: "Early Bitcoin adopter and blockchain technology consultant.",
        duration: "8 hours",
        lessons: 22,
        level: "Beginner",
        rating: 4.5,
        students: 15680,
        price: 0,
        category: "Crypto",
        thumbnail: "/placeholder.svg",
        progress: 0,
        tags: ["crypto", "bitcoin", "blockchain"],
        syllabus: [
            { module: "Blockchain Fundamentals", lessons: 5, duration: "1h 40m" },
            { module: "Major Cryptocurrencies", lessons: 6, duration: "2h" },
            { module: "Wallets & Security", lessons: 4, duration: "1h 20m" },
            { module: "DeFi & NFTs", lessons: 4, duration: "1h 40m" },
            { module: "Investment Strategies", lessons: 3, duration: "1h 20m" },
        ],
    },
    {
        id: "course_006",
        title: "Value Investing Principles",
        description: "Learn Warren Buffett's investment philosophy and fundamental analysis techniques.",
        instructor: "Dr. Priya Mehta",
        instructorAvatar: "/placeholder-user.jpg",
        instructorBio: "Former Goldman Sachs analyst with 15+ years of experience in equity research.",
        duration: "10 hours",
        lessons: 30,
        level: "Intermediate",
        rating: 4.9,
        students: 9840,
        price: 0,
        category: "Investing",
        thumbnail: "/placeholder.svg",
        progress: 60,
        tags: ["value investing", "fundamental analysis", "buffett"],
        syllabus: [
            { module: "Value Investing Philosophy", lessons: 6, duration: "2h" },
            { module: "Financial Statement Analysis", lessons: 8, duration: "2h 40m" },
            { module: "Valuation Methods", lessons: 8, duration: "2h 40m" },
            { module: "Moat Analysis", lessons: 4, duration: "1h 20m" },
            { module: "Portfolio Construction", lessons: 4, duration: "1h 20m" },
        ],
    },
];

// ============================================
// STOCKS & MARKET DATA
// ============================================
export const stocks = [
    { symbol: "RELIANCE", name: "Reliance Industries", price: 2456.75, change: 23.45, changePercent: 0.96, volume: 12500000, marketCap: "16.5L Cr", sector: "Energy" },
    { symbol: "TCS", name: "Tata Consultancy Services", price: 3890.20, change: -15.30, changePercent: -0.39, volume: 3200000, marketCap: "14.2L Cr", sector: "IT" },
    { symbol: "HDFCBANK", name: "HDFC Bank", price: 1678.50, change: 12.80, changePercent: 0.77, volume: 8900000, marketCap: "12.8L Cr", sector: "Banking" },
    { symbol: "INFY", name: "Infosys", price: 1567.30, change: -8.20, changePercent: -0.52, volume: 5600000, marketCap: "6.5L Cr", sector: "IT" },
    { symbol: "ICICIBANK", name: "ICICI Bank", price: 1234.60, change: 18.90, changePercent: 1.55, volume: 7800000, marketCap: "8.6L Cr", sector: "Banking" },
    { symbol: "HINDUNILVR", name: "Hindustan Unilever", price: 2567.80, change: 5.40, changePercent: 0.21, volume: 2100000, marketCap: "6.0L Cr", sector: "FMCG" },
    { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 1456.25, change: 28.60, changePercent: 2.00, volume: 4500000, marketCap: "8.2L Cr", sector: "Telecom" },
    { symbol: "ITC", name: "ITC Limited", price: 467.80, change: -2.30, changePercent: -0.49, volume: 15600000, marketCap: "5.8L Cr", sector: "FMCG" },
    { symbol: "SBIN", name: "State Bank of India", price: 789.45, change: 11.20, changePercent: 1.44, volume: 18900000, marketCap: "7.0L Cr", sector: "Banking" },
    { symbol: "BAJFINANCE", name: "Bajaj Finance", price: 7234.50, change: -45.80, changePercent: -0.63, volume: 1200000, marketCap: "4.4L Cr", sector: "Finance" },
    { symbol: "AXISBANK", name: "Axis Bank", price: 1123.40, change: 8.70, changePercent: 0.78, volume: 6700000, marketCap: "3.5L Cr", sector: "Banking" },
    { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 1789.60, change: -12.40, changePercent: -0.69, volume: 3400000, marketCap: "3.5L Cr", sector: "Banking" },
    { symbol: "LT", name: "Larsen & Toubro", price: 3456.70, change: 34.20, changePercent: 1.00, volume: 2800000, marketCap: "4.8L Cr", sector: "Infrastructure" },
    { symbol: "ASIANPAINT", name: "Asian Paints", price: 2890.30, change: 15.60, changePercent: 0.54, volume: 1100000, marketCap: "2.8L Cr", sector: "Consumer" },
    { symbol: "MARUTI", name: "Maruti Suzuki", price: 12456.80, change: 89.50, changePercent: 0.72, volume: 890000, marketCap: "3.7L Cr", sector: "Auto" },
];

export const watchlist = [
    { symbol: "RELIANCE", name: "Reliance Industries", price: 2456.75, change: 23.45, changePercent: 0.96 },
    { symbol: "TCS", name: "Tata Consultancy Services", price: 3890.20, change: -15.30, changePercent: -0.39 },
    { symbol: "HDFCBANK", name: "HDFC Bank", price: 1678.50, change: 12.80, changePercent: 0.77 },
    { symbol: "INFY", name: "Infosys", price: 1567.30, change: -8.20, changePercent: -0.52 },
    { symbol: "ICICIBANK", name: "ICICI Bank", price: 1234.60, change: 18.90, changePercent: 1.55 },
];

export const sectorPerformance = [
    { sector: "IT", change: 1.2, topGainer: "WIPRO", topLoser: "TECHM" },
    { sector: "Banking", change: 0.8, topGainer: "ICICIBANK", topLoser: "KOTAKBANK" },
    { sector: "FMCG", change: -0.3, topGainer: "NESTLEIND", topLoser: "BRITANNIA" },
    { sector: "Pharma", change: 1.5, topGainer: "SUNPHARMA", topLoser: "DRREDDY" },
    { sector: "Auto", change: 0.6, topGainer: "TATAMOTORS", topLoser: "EICHERMOT" },
    { sector: "Realty", change: 2.1, topGainer: "DLF", topLoser: "OBEROIRLTY" },
    { sector: "Metal", change: -0.9, topGainer: "HINDALCO", topLoser: "TATASTEEL" },
    { sector: "Energy", change: 0.4, topGainer: "ADANIENT", topLoser: "ONGC" },
];

// ============================================
// PORTFOLIO & HOLDINGS
// ============================================
export const holdings = [
    { symbol: "RELIANCE", name: "Reliance Industries", qty: 50, avgPrice: 2380.00, currentPrice: 2456.75, invested: 119000, current: 122837.50, pnl: 3837.50, pnlPercent: 3.23 },
    { symbol: "TCS", name: "Tata Consultancy Services", qty: 25, avgPrice: 3750.00, currentPrice: 3890.20, invested: 93750, current: 97255.00, pnl: 3505.00, pnlPercent: 3.74 },
    { symbol: "HDFCBANK", name: "HDFC Bank", qty: 100, avgPrice: 1580.00, currentPrice: 1678.50, invested: 158000, current: 167850.00, pnl: 9850.00, pnlPercent: 6.23 },
    { symbol: "INFY", name: "Infosys", qty: 75, avgPrice: 1450.00, currentPrice: 1567.30, invested: 108750, current: 117547.50, pnl: 8797.50, pnlPercent: 8.09 },
    { symbol: "ICICIBANK", name: "ICICI Bank", qty: 80, avgPrice: 1150.00, currentPrice: 1234.60, invested: 92000, current: 98768.00, pnl: 6768.00, pnlPercent: 7.36 },
    { symbol: "BHARTIARTL", name: "Bharti Airtel", qty: 60, avgPrice: 1320.00, currentPrice: 1456.25, invested: 79200, current: 87375.00, pnl: 8175.00, pnlPercent: 10.32 },
];

export const portfolioAllocation = [
    { sector: "Banking", value: 364618, percentage: 31.5 },
    { sector: "IT", value: 214802, percentage: 18.6 },
    { sector: "Energy", value: 122837, percentage: 10.6 },
    { sector: "Telecom", value: 87375, percentage: 7.6 },
    { sector: "Cash", value: 367148, percentage: 31.7 },
];

// ============================================
// TRADES HISTORY
// ============================================
export const trades = [
    { id: "T001", date: "2024-12-08", time: "10:15:32", symbol: "RELIANCE", type: "BUY", qty: 10, price: 2445.50, total: 24455.00, status: "Executed" },
    { id: "T002", date: "2024-12-08", time: "11:30:45", symbol: "TCS", type: "SELL", qty: 5, price: 3895.00, total: 19475.00, status: "Executed" },
    { id: "T003", date: "2024-12-07", time: "09:45:12", symbol: "HDFCBANK", type: "BUY", qty: 20, price: 1665.30, total: 33306.00, status: "Executed" },
    { id: "T004", date: "2024-12-07", time: "14:20:08", symbol: "INFY", type: "BUY", qty: 15, price: 1572.80, total: 23592.00, status: "Executed" },
    { id: "T005", date: "2024-12-06", time: "10:05:55", symbol: "ICICIBANK", type: "SELL", qty: 25, price: 1228.40, total: 30710.00, status: "Executed" },
    { id: "T006", date: "2024-12-06", time: "15:45:30", symbol: "SBIN", type: "BUY", qty: 50, price: 785.20, total: 39260.00, status: "Executed" },
    { id: "T007", date: "2024-12-05", time: "11:10:22", symbol: "BHARTIARTL", type: "BUY", qty: 30, price: 1448.60, total: 43458.00, status: "Executed" },
    { id: "T008", date: "2024-12-05", time: "13:55:18", symbol: "BAJFINANCE", type: "SELL", qty: 5, price: 7280.00, total: 36400.00, status: "Executed" },
];

// ============================================
// QUIZZES & ASSESSMENTS
// ============================================
export const quizzes = [
    {
        id: "quiz_001",
        title: "Stock Market Basics",
        course: "Stock Market Fundamentals",
        questions: 15,
        duration: "20 mins",
        difficulty: "Easy",
        attempts: 2,
        bestScore: 93,
        status: "completed",
    },
    {
        id: "quiz_002",
        title: "Technical Indicators",
        course: "Technical Analysis Masterclass",
        questions: 20,
        duration: "30 mins",
        difficulty: "Medium",
        attempts: 1,
        bestScore: 78,
        status: "completed",
    },
    {
        id: "quiz_003",
        title: "Options Strategies",
        course: "Options Trading Strategies",
        questions: 25,
        duration: "40 mins",
        difficulty: "Hard",
        attempts: 0,
        bestScore: null,
        status: "pending",
    },
];

export const quizQuestions = [
    {
        id: 1,
        question: "What does P/E ratio stand for?",
        options: ["Price to Earnings", "Profit to Equity", "Price to Equity", "Profit to Earnings"],
        correct: 0,
        explanation: "P/E ratio stands for Price to Earnings ratio, which measures a company's current share price relative to its earnings per share.",
    },
    {
        id: 2,
        question: "Which of the following is a leading indicator in technical analysis?",
        options: ["Moving Average", "RSI", "Volume", "MACD Histogram"],
        correct: 1,
        explanation: "RSI (Relative Strength Index) is a leading indicator as it can signal potential reversals before they occur.",
    },
    {
        id: 3,
        question: "What is a 'bull market'?",
        options: ["A market with declining prices", "A market with rising prices", "A sideways market", "A volatile market"],
        correct: 1,
        explanation: "A bull market is characterized by rising prices and investor optimism.",
    },
    {
        id: 4,
        question: "What is the primary purpose of stop-loss orders?",
        options: ["To maximize profits", "To limit potential losses", "To increase trading volume", "To track market trends"],
        correct: 1,
        explanation: "Stop-loss orders are designed to limit potential losses by automatically selling when price reaches a specified level.",
    },
    {
        id: 5,
        question: "What does 'Blue Chip' stocks refer to?",
        options: ["Penny stocks", "Large, well-established companies", "Tech startups", "Government bonds"],
        correct: 1,
        explanation: "Blue chip stocks are shares of large, well-established, and financially stable companies with a history of reliable performance.",
    },
];

// ============================================
// ACHIEVEMENTS & BADGES
// ============================================
export const achievements = [
    { id: "first_trade", name: "First Trade", description: "Complete your first trade", icon: "RiExchangeLine", earned: true, earnedDate: "2024-01-20" },
    { id: "week_streak", name: "Week Warrior", description: "Maintain a 7-day learning streak", icon: "RiFireLine", earned: true, earnedDate: "2024-02-15" },
    { id: "quiz_master", name: "Quiz Master", description: "Score 90%+ on 5 quizzes", icon: "RiBrainLine", earned: true, earnedDate: "2024-03-10" },
    { id: "diversifier", name: "Diversifier", description: "Hold stocks from 5 different sectors", icon: "RiPieChartLine", earned: true, earnedDate: "2024-04-05" },
    { id: "profit_hunter", name: "Profit Hunter", description: "Earn 10% returns on portfolio", icon: "RiTrophyLine", earned: true, earnedDate: "2024-05-20" },
    { id: "course_complete", name: "Scholar", description: "Complete 5 courses", icon: "RiGraduationCapLine", earned: false, progress: 3, total: 5 },
    { id: "month_streak", name: "Dedicated Learner", description: "30-day learning streak", icon: "RiMedalLine", earned: false, progress: 12, total: 30 },
    { id: "community_helper", name: "Helper", description: "Answer 10 community questions", icon: "RiQuestionAnswerLine", earned: false, progress: 7, total: 10 },
];

// ============================================
// LEADERBOARD
// ============================================
export const leaderboard = [
    { rank: 1, name: "Vikram Reddy", college: "IIT Bombay", xp: 12450, returns: 28.5, avatar: "/placeholder-user.jpg" },
    { rank: 2, name: "Priya Sharma", college: "IIT Delhi", xp: 11890, returns: 25.2, avatar: "/placeholder-user.jpg" },
    { rank: 3, name: "Rahul Menon", college: "BITS Pilani", xp: 10560, returns: 22.8, avatar: "/placeholder-user.jpg" },
    { rank: 4, name: "Ananya Iyer", college: "IIM Ahmedabad", xp: 9870, returns: 21.3, avatar: "/placeholder-user.jpg" },
    { rank: 5, name: "Karthik Nair", college: "NIT Trichy", xp: 9450, returns: 19.7, avatar: "/placeholder-user.jpg" },
    { rank: 6, name: "Sneha Patel", college: "IIT Madras", xp: 8920, returns: 18.4, avatar: "/placeholder-user.jpg" },
    { rank: 7, name: "Arjun Sharma", college: "IIT Delhi", xp: 4520, returns: 15.68, avatar: "/placeholder-user.jpg", isCurrentUser: true },
];

// ============================================
// CHALLENGES
// ============================================
export const dailyChallenges = [
    { id: "dc_001", title: "Complete 2 lessons", reward: 50, progress: 1, total: 2, type: "learning" },
    { id: "dc_002", title: "Execute 3 trades", reward: 75, progress: 2, total: 3, type: "trading" },
    { id: "dc_003", title: "Read market news", reward: 25, progress: 0, total: 1, type: "research" },
    { id: "dc_004", title: "Analyze a stock", reward: 100, progress: 1, total: 1, type: "analysis", completed: true },
];

export const weeklyChallenges = [
    { id: "wc_001", title: "Earn 5% portfolio returns", reward: 500, progress: 3.2, total: 5, endsIn: "3 days" },
    { id: "wc_002", title: "Complete Technical Analysis module", reward: 300, progress: 60, total: 100, endsIn: "3 days" },
    { id: "wc_003", title: "Win 3 trading battles", reward: 750, progress: 1, total: 3, endsIn: "3 days" },
];

// ============================================
// NEWS & MARKET UPDATES
// ============================================
export const news = [
    {
        id: "news_001",
        title: "RBI Keeps Repo Rate Unchanged at 6.5%",
        summary: "The Reserve Bank of India maintained its key lending rate, signaling continued focus on inflation control.",
        source: "Economic Times",
        time: "2 hours ago",
        category: "Economy",
        impact: "neutral",
        aiSummary: "This decision suggests stability in borrowing costs. Banking stocks may remain stable, while rate-sensitive sectors like real estate could see neutral to slightly positive sentiment.",
    },
    {
        id: "news_002",
        title: "Reliance Industries Q3 Results Beat Expectations",
        summary: "Reliance reported 15% YoY profit growth driven by strong retail and digital services performance.",
        source: "Moneycontrol",
        time: "4 hours ago",
        category: "Earnings",
        impact: "positive",
        relatedStock: "RELIANCE",
        aiSummary: "Strong earnings indicate robust business fundamentals. Consider this positive signal for Reliance stock, but also monitor valuation levels before making entry decisions.",
    },
    {
        id: "news_003",
        title: "IT Sector Faces Headwinds as US Banking Crisis Impacts Deals",
        summary: "Major IT companies report delayed deal closures amid uncertainty in the global banking sector.",
        source: "Business Standard",
        time: "6 hours ago",
        category: "Sector",
        impact: "negative",
        aiSummary: "Short-term pressure on IT stocks expected. Long-term fundamentals remain strong. Use this as a learning opportunity to understand how global events impact Indian markets.",
    },
    {
        id: "news_004",
        title: "SEBI Introduces New Rules for Algo Trading",
        summary: "New regulations aim to bring transparency and risk management in algorithmic trading.",
        source: "LiveMint",
        time: "8 hours ago",
        category: "Regulation",
        impact: "neutral",
        aiSummary: "These regulations promote market fairness. Understanding regulatory changes is crucial for traders. This could reduce market manipulation and benefit retail investors long-term.",
    },
    {
        id: "news_005",
        title: "Tata Motors EV Sales Surge 50% in November",
        summary: "Tata Motors continues to dominate India's EV market with record monthly sales.",
        source: "Auto Car India",
        time: "12 hours ago",
        category: "Auto",
        impact: "positive",
        relatedStock: "TATAMOTORS",
        aiSummary: "Strong EV sales momentum indicates successful transition strategy. Consider Tata Motors for portfolio exposure to the EV theme in India.",
    },
];

// ============================================
// MENTORS
// ============================================
export const mentors = [
    {
        id: "mentor_001",
        name: "Dr. Priya Mehta",
        title: "Investment Analyst",
        expertise: ["Value Investing", "Fundamental Analysis", "Portfolio Management"],
        experience: "15+ years",
        rating: 4.9,
        students: 2450,
        bio: "Former Goldman Sachs analyst specializing in equity research and long-term value investing strategies.",
        avatar: "/placeholder-user.jpg",
        availability: "Available",
    },
    {
        id: "mentor_002",
        name: "Rajesh Kumar",
        title: "Technical Analyst",
        expertise: ["Technical Analysis", "Chart Patterns", "Options Trading"],
        experience: "12+ years",
        rating: 4.8,
        students: 1890,
        bio: "Professional trader with proven track record in technical analysis and derivatives trading.",
        avatar: "/placeholder-user.jpg",
        availability: "Busy",
    },
    {
        id: "mentor_003",
        name: "Anil Verma",
        title: "Derivatives Expert",
        expertise: ["Options", "Futures", "Hedging Strategies"],
        experience: "18+ years",
        rating: 4.7,
        students: 1560,
        bio: "Former institutional trader with deep expertise in derivatives and risk management.",
        avatar: "/placeholder-user.jpg",
        availability: "Available",
    },
];

// ============================================
// COMMUNITY POSTS
// ============================================
export const communityPosts = [
    {
        id: "post_001",
        author: "Vikram Reddy",
        avatar: "/placeholder-user.jpg",
        room: "Pro Room",
        title: "My analysis on HDFC Bank breakout",
        content: "Looking at the daily chart, HDFC Bank has formed a classic cup and handle pattern. Key resistance at 1700...",
        likes: 45,
        comments: 12,
        time: "2 hours ago",
        hasChart: true,
    },
    {
        id: "post_002",
        author: "Priya Sharma",
        avatar: "/placeholder-user.jpg",
        room: "Beginner Room",
        title: "How do I calculate position sizing?",
        content: "I'm new to trading and confused about how much capital to allocate per trade. Can someone explain the 2% rule?",
        likes: 23,
        comments: 8,
        time: "4 hours ago",
        hasChart: false,
    },
    {
        id: "post_003",
        author: "Rahul Menon",
        avatar: "/placeholder-user.jpg",
        room: "Crypto Room",
        title: "Bitcoin halving impact analysis",
        content: "With the halving approaching in 2024, here's my analysis on historical patterns and what to expect...",
        likes: 67,
        comments: 24,
        time: "6 hours ago",
        hasChart: true,
    },
];

// ============================================
// CHART DATA (for Recharts)
// ============================================
export const portfolioPerformanceData = [
    { date: "Jan", value: 1000000 },
    { date: "Feb", value: 1025000 },
    { date: "Mar", value: 1045000 },
    { date: "Apr", value: 1020000 },
    { date: "May", value: 1078000 },
    { date: "Jun", value: 1095000 },
    { date: "Jul", value: 1112000 },
    { date: "Aug", value: 1089000 },
    { date: "Sep", value: 1134000 },
    { date: "Oct", value: 1145000 },
    { date: "Nov", value: 1128000 },
    { date: "Dec", value: 1156780 },
];

export const stockChartData = [
    { time: "09:15", price: 2430 },
    { time: "09:30", price: 2435 },
    { time: "09:45", price: 2428 },
    { time: "10:00", price: 2442 },
    { time: "10:15", price: 2438 },
    { time: "10:30", price: 2451 },
    { time: "10:45", price: 2448 },
    { time: "11:00", price: 2455 },
    { time: "11:15", price: 2460 },
    { time: "11:30", price: 2452 },
    { time: "11:45", price: 2458 },
    { time: "12:00", price: 2465 },
    { time: "12:15", price: 2462 },
    { time: "12:30", price: 2470 },
    { time: "12:45", price: 2468 },
    { time: "13:00", price: 2475 },
    { time: "13:15", price: 2472 },
    { time: "13:30", price: 2480 },
    { time: "13:45", price: 2478 },
    { time: "14:00", price: 2485 },
    { time: "14:15", price: 2482 },
    { time: "14:30", price: 2456 },
];

export const learningProgressData = [
    { week: "W1", hours: 4 },
    { week: "W2", hours: 6 },
    { week: "W3", hours: 5 },
    { week: "W4", hours: 8 },
    { week: "W5", hours: 7 },
    { week: "W6", hours: 9 },
];

// ============================================
// PRICING PLANS
// ============================================
export const pricingPlans = [
    {
        name: "Free",
        price: 0,
        period: "forever",
        description: "Perfect for getting started",
        features: [
            "3 free courses",
            "Virtual trading with 1L capital",
            "Basic market data",
            "Community access",
            "Weekly challenges",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: 499,
        period: "month",
        description: "For serious learners",
        features: [
            "All courses unlimited",
            "Virtual trading with 10L capital",
            "Real-time market data",
            "AI-powered insights",
            "1-on-1 mentor sessions (2/month)",
            "Priority support",
            "Certificates",
        ],
        cta: "Start Pro Trial",
        popular: true,
    },
    {
        name: "Premium",
        price: 1999,
        period: "month",
        description: "For professionals",
        features: [
            "Everything in Pro",
            "Unlimited mentor sessions",
            "Advanced trading tools",
            "API access",
            "Custom learning paths",
            "White-label certificates",
            "Team management",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

// ============================================
// ADMIN DATA
// ============================================
export const adminStats = {
    totalUsers: 45678,
    activeUsers: 12450,
    activeCourses: 24,
    totalCourses: 24,
    totalQuizzes: 156,
    totalTrades: 234567,
    tradesToday: 3456,
    certificatesIssued: 1234,
    newUsersThisMonth: 1580,
    monthlyRevenue: 2345000,
    newUsersToday: 234,
    coursesCompleted: 8920,
};

export const userAnalytics = [
    { date: "Mon", users: 1250 },
    { date: "Tue", users: 1380 },
    { date: "Wed", users: 1420 },
    { date: "Thu", users: 1290 },
    { date: "Fri", users: 1560 },
    { date: "Sat", users: 980 },
    { date: "Sun", users: 870 },
];

// ============================================
// CALCULATORS HELPER DATA
// ============================================
export const calculatorPresets = {
    cagr: { initialValue: 100000, finalValue: 200000, years: 5 },
    sip: { monthlyAmount: 10000, years: 10, expectedReturn: 12 },
    positionSize: { capital: 1000000, riskPercent: 2, stopLossPercent: 5 },
    riskReward: { entryPrice: 100, stopLoss: 95, target: 115 },
};
