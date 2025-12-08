export default function Footer() {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: "#222222", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Mentors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Battles
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clean-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: "#444444" }}
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#28a745" }}>
              <span className="font-bold text-sm" style={{ color: "#222222" }}>
                F
              </span>
            </div>
            <span className="font-semibold">Fintrix</span>
          </div>

          <p className="text-sm" style={{ color: "#999999" }}>
            © 2025 Fintrix. Simplifying Finance with Intelligence.
          </p>
        </div>
      </div>
    </footer>
  )
}
