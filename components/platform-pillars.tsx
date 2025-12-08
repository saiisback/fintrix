const pillars = [
  {
    title: "Learning & Education",
    subtitle: "Structured courses with real-time feedback",
    modules: ["Courses", "Assessments", "Certificates", "Progress Tracking"],
    icon: "📚",
    bgColor: "#e8f1ff",
    accentColor: "#0056b3",
  },
  {
    title: "Trading Simulation",
    subtitle: "Risk-free practice with real market data",
    modules: ["Virtual Trading", "Portfolio Analytics", "Trade Analysis", "Market Data"],
    icon: "📊",
    bgColor: "#e8f5e9",
    accentColor: "#28a745",
  },
  {
    title: "Community & Gamification",
    subtitle: "Engage, learn, and compete together",
    modules: ["Leaderboards", "Challenges", "Social Hub", "Battles"],
    icon: "🎮",
    bgColor: "#e8f1ff",
    accentColor: "#0056b3",
  },
  {
    title: "Intelligence & Tools",
    subtitle: "AI-powered insights and calculators",
    modules: ["Mentor System", "Smart Tools", "Analytics", "Recommendations"],
    icon: "🧠",
    bgColor: "#e8f5e9",
    accentColor: "#28a745",
  },
]

export default function PlatformPillars() {
  return (
    <section id="pillars" className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Four Pillars of Fintrix</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Designed to work together seamlessly, creating a complete financial education ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-lg p-8 border"
              style={{ backgroundColor: pillar.bgColor, borderColor: "#e5e7eb" }}
            >
              <span className="text-5xl block mb-4">{pillar.icon}</span>

              <h3 className="mb-2" style={{ color: pillar.accentColor }}>
                {pillar.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
                {pillar.subtitle}
              </p>

              <div className="space-y-2">
                {pillar.modules.map((module, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.accentColor }}></span>
                    <span style={{ color: "#222222" }}>{module}</span>
                  </div>
                ))}
              </div>

              <button
                className="mt-6 w-full text-sm px-6 py-3 rounded-lg font-medium border-2 transition-all"
                style={{ backgroundColor: "#ffffff", color: "#222222", borderColor: "#222222" }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
