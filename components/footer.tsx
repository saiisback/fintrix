"use client"

import Link from "next/link"
import { RiLineChartLine } from "react-icons/ri"

export default function Footer() {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: "#222222", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/simulator" className="hover:text-white transition-colors">
                  Simulator
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/mentor" className="hover:text-white transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/assessments" className="hover:text-white transition-colors">
                  Assessments
                </Link>
              </li>
              <li>
                <Link href="/assessments/results" className="hover:text-white transition-colors">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/community/battles" className="hover:text-white transition-colors">
                  Battles
                </Link>
              </li>
              <li>
                <Link href="/gamification/leaderboards" className="hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/gamification/challenges" className="hover:text-white transition-colors">
                  Challenges
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: "#444444" }}
        >
          <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0063b3" }}>
              <RiLineChartLine className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">Fintrix</span>
          </Link>

          <p className="text-sm" style={{ color: "#999999" }}>
            © 2024 Fintrix. Simplifying Finance with Intelligence.
          </p>
        </div>
      </div>
    </footer>
  )
}
