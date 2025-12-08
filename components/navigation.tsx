"use client"

import Link from "next/link"
import { RiLineChartLine } from "react-icons/ri"

export default function Navigation() {
  return (
    <nav className="border-b sticky top-0 z-50" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0063b3" }}>
            <RiLineChartLine className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold" style={{ color: "#222222" }}>
            Fintrix
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/courses"
            className="transition-colors hover:text-[#0063b3]"
            style={{ color: "#222222" }}
          >
            Courses
          </Link>
          <Link
            href="/simulator"
            className="transition-colors hover:text-[#0063b3]"
            style={{ color: "#222222" }}
          >
            Simulator
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-[#0063b3]"
            style={{ color: "#222222" }}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-[#0063b3]"
            style={{ color: "#222222" }}
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="px-4 py-2 rounded-lg font-medium transition-all hover:bg-gray-100"
            style={{ color: "#222222" }}
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="px-5 py-2 rounded-lg font-medium transition-all"
            style={{ backgroundColor: "#0063b3", color: "#ffffff" }}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}
