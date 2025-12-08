"use client"

import Link from "next/link"
import { RiLineChartLine, RiBookOpenLine, RiTeamLine, RiTrophyLine } from "react-icons/ri"

export default function Hero() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-block">
              <span
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#f4f4f4", color: "#0063b3" }}
              >
                India's #1 Financial Education Platform
              </span>
            </div>

            <h1 className="mb-6">Master Trading with Confidence</h1>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#6b7280" }}>
              Learn trading, practice with ₹10L virtual money, compete with peers, and earn certificates.
              Join 25,000+ learners mastering the stock market with Fintrix.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/register"
                className="px-6 py-3 rounded-lg font-medium transition-all text-center hover:opacity-90"
                style={{ backgroundColor: "#0063b3", color: "#ffffff" }}
              >
                Start Learning Free
              </Link>
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-lg font-medium border-2 transition-all text-center hover:bg-gray-50"
                style={{ backgroundColor: "#ffffff", color: "#222222", borderColor: "#222222" }}
              >
                Explore Dashboard
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold" style={{ color: "#0063b3" }}>
                  25K+
                </p>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Active Learners
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#28a745" }}>
                  50+
                </p>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Expert Courses
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#222222" }}>
                  95%
                </p>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 h-96 flex items-center justify-center" style={{ backgroundColor: "#f4f4f4" }}>
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <Link href="/courses" className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-12 h-12 bg-[#0063b3]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0063b3]/20 transition-colors">
                  <RiBookOpenLine className="w-6 h-6 text-[#0063b3]" />
                </div>
                <p className="font-medium text-[#222222]">Courses</p>
                <p className="text-xs text-[#6b7280] mt-1">50+ Expert Courses</p>
              </Link>

              <Link href="/simulator" className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-12 h-12 bg-[#28a745]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#28a745]/20 transition-colors">
                  <RiLineChartLine className="w-6 h-6 text-[#28a745]" />
                </div>
                <p className="font-medium text-[#222222]">Simulator</p>
                <p className="text-xs text-[#6b7280] mt-1">₹10L Virtual Capital</p>
              </Link>

              <Link href="/community" className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20 transition-colors">
                  <RiTeamLine className="w-6 h-6 text-purple-500" />
                </div>
                <p className="font-medium text-[#222222]">Community</p>
                <p className="text-xs text-[#6b7280] mt-1">25K+ Traders</p>
              </Link>

              <Link href="/gamification/challenges" className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#f59e0b]/20 transition-colors">
                  <RiTrophyLine className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <p className="font-medium text-[#222222]">Challenges</p>
                <p className="text-xs text-[#6b7280] mt-1">Compete & Win</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
