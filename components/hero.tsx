export default function Hero() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-block">
              <span
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#f4f4f4", color: "#0056b3" }}
              >
                Complete Platform Architecture
              </span>
            </div>

            <h1 className="mb-6">Intelligent Finance for the Future</h1>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#6b7280" }}>
              Discover how Fintrix integrates education, trading simulation, community engagement, and advanced
              analytics into one cohesive platform. Learn the architecture behind the intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all"
                style={{ backgroundColor: "#0056b3", color: "#ffffff" }}
              >
                View Full Sitemap
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium border-2 transition-all"
                style={{ backgroundColor: "#ffffff", color: "#222222", borderColor: "#222222" }}
              >
                Download Structure
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold" style={{ color: "#0056b3" }}>
                  15+
                </p>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Major Modules
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#28a745" }}>
                  50+
                </p>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Features
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "#222222" }}>
                  100%
                </p>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  Integrated
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-8 h-96 flex items-center justify-center" style={{ backgroundColor: "#f4f4f4" }}>
            <div className="text-center">
              <svg
                className="w-24 h-24 mx-auto mb-4 opacity-20"
                style={{ color: "#0056b3" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 3H5a2 2 0 00-2 2v4m0 0H3m4 0V3m0 4v4a2 2 0 002 2h4m0 0h4a2 2 0 002-2v-4m0 0h2m-2 0v-4a2 2 0 00-2-2h-4m0 0H9m0 4h4m0 0v4a2 2 0 01-2 2H9m0-4H5a2 2 0 01-2-2V7"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <p style={{ color: "#6b7280" }}>Interactive Platform Visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
