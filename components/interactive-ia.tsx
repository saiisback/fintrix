"use client"

import { useState } from "react"

const iaStructure = [
  {
    id: "landing",
    title: "Landing & Marketing",
    icon: "🏠",
    children: ["Home", "About", "Pricing", "Contact", "Terms & Privacy"],
    color: "#0056b3",
  },
  {
    id: "auth",
    title: "Authentication",
    icon: "🔐",
    children: ["Login", "Register", "Forgot Password", "Onboarding"],
    color: "#28a745",
  },
  {
    id: "learning",
    title: "Courses & Learning",
    icon: "📚",
    children: ["Catalog", "Course Details", "Learning Player", "Checkpoints", "Certificates"],
    color: "#0056b3",
  },
  {
    id: "assessments",
    title: "Assessments",
    icon: "✓",
    children: ["Unit Quizzes", "Stage Tests", "Weekly Challenges", "Results"],
    color: "#28a745",
  },
  {
    id: "trading",
    title: "Trading Simulator",
    icon: "📈",
    children: ["Virtual Trading", "Portfolio Analytics", "Trade Analysis", "Market Data", "News Feed"],
    color: "#0056b3",
  },
  {
    id: "tools",
    title: "Smart Finance Tools",
    icon: "🧮",
    children: ["CAGR Calculator", "SIP Calculator", "Risk-Reward", "Position Sizing"],
    color: "#28a745",
  },
]

export default function InteractiveIA() {
  const [selectedModule, setSelectedModule] = useState("learning")

  const current = iaStructure.find((m) => m.id === selectedModule)

  return (
    <section id="ia" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2>Platform Architecture</h2>
          <p className="mt-4 text-lg" style={{ color: "#6b7280" }}>
            Interconnected systems designed for seamless user experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Module Selector */}
          <div className="lg:col-span-2">
            <div className="rounded-lg p-8 border" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
              <h3 className="mb-6" style={{ color: "#222222" }}>
                Core Modules
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {iaStructure.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className="p-4 rounded-lg border-2 transition-all text-left"
                    style={{
                      borderColor: selectedModule === module.id ? module.color : "#e5e7eb",
                      backgroundColor: selectedModule === module.id ? "#f4f4f4" : "#ffffff",
                    }}
                  >
                    <span className="text-2xl block mb-2">{module.icon}</span>
                    <p className="font-medium text-sm" style={{ color: "#222222" }}>
                      {module.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Module Details */}
          {current && (
            <div
              className="rounded-lg p-8 border h-fit sticky top-20"
              style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
            >
              <div className="mb-4">
                <span className="text-4xl block mb-3">{current.icon}</span>
                <h3 style={{ color: "#222222" }}>{current.title}</h3>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium" style={{ color: "#6b7280" }}>
                  Key Pages:
                </p>
                {current.children.map((child, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded transition-colors"
                    style={{ ":hover": { backgroundColor: "#f4f4f4" } }}
                  >
                    <span className="font-bold text-sm mt-0.5" style={{ color: "#0056b3" }}>
                      →
                    </span>
                    <span className="text-sm" style={{ color: "#222222" }}>
                      {child}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
