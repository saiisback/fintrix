"use client"

export default function Navigation() {
  return (
    <nav className="border-b sticky top-0 z-50" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0056b3" }}>
            <span className="font-bold text-sm" style={{ color: "#ffffff" }}>
              F
            </span>
          </div>
          <span className="text-xl font-semibold" style={{ color: "#222222" }}>
            Fintrix
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#ia"
            className="transition-colors"
            style={{ color: "#222222" }}
            onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.color = "#222222")}
          >
            Architecture
          </a>
          <a
            href="#pillars"
            className="transition-colors"
            style={{ color: "#222222" }}
            onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.color = "#222222")}
          >
            Pillars
          </a>
          <a
            href="#features"
            className="transition-colors"
            style={{ color: "#222222" }}
            onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.color = "#222222")}
          >
            Features
          </a>
        </div>

        <button
          className="px-6 py-3 rounded-lg font-medium transition-all"
          style={{ backgroundColor: "#0056b3", color: "#ffffff" }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Explore Platform
        </button>
      </div>
    </nav>
  )
}
