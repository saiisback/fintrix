const features = [
  {
    category: "User Portal",
    items: [
      { name: "Personalized Dashboard", desc: "Real-time progress overview" },
      { name: "Profile & Settings", desc: "Account management" },
      { name: "Learning Progress", desc: "Tracks & milestones" },
      { name: "Certificates", desc: "Achievement collection" },
    ],
  },
  {
    category: "Education System",
    items: [
      { name: "Course Catalog", desc: "Structured curriculum" },
      { name: "Interactive Lessons", desc: "Video + notes + quizzes" },
      { name: "Case Studies", desc: "Real-world applications" },
      { name: "Glossary", desc: "Financial terminology" },
    ],
  },
  {
    category: "Trading Platform",
    items: [
      { name: "Virtual Wallet", desc: "Practice trading capital" },
      { name: "Watchlist", desc: "Market monitoring" },
      { name: "Advanced Charts", desc: "Technical analysis" },
      { name: "Order Execution", desc: "Market & limit orders" },
    ],
  },
  {
    category: "Community Layer",
    items: [
      { name: "Discussion Rooms", desc: "Topic-based forums" },
      { name: "Peer Learning", desc: "Share insights" },
      { name: "Creator Space", desc: "Mentor profiles" },
      { name: "Social Battles", desc: "Trading competitions" },
    ],
  },
]

export default function FeatureBreakdown() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Complete Feature Map</h2>
          <p className="mt-4 text-lg" style={{ color: "#6b7280" }}>
            Every component designed for user success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((section, i) => (
            <div
              key={i}
              className="rounded-lg p-8 border"
              style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
            >
              <h3 className="mb-6" style={{ color: "#0056b3" }}>
                {section.category}
              </h3>

              <div className="space-y-4">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="pb-4 last:border-0 last:pb-0"
                    style={{ borderBottom: j < section.items.length - 1 ? "1px solid #e5e7eb" : "none" }}
                  >
                    <p className="font-medium text-sm" style={{ color: "#222222" }}>
                      {item.name}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#6b7280" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg p-12 text-center" style={{ backgroundColor: "#0056b3", color: "#ffffff" }}>
          <h3 className="mb-4">Plus Admin & Backend Systems</h3>
          <p className="mb-8" style={{ opacity: 0.9 }}>
            Advanced moderation, analytics, content management, and market data integration
          </p>
          <button
            className="px-6 py-3 rounded-lg font-medium transition-all"
            style={{ backgroundColor: "#ffffff", color: "#0056b3" }}
          >
            Explore Admin Panel
          </button>
        </div>
      </div>
    </section>
  )
}
