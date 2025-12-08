import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import PlatformPillars from "@/components/platform-pillars"
import InteractiveIA from "@/components/interactive-ia"
import FeatureBreakdown from "@/components/feature-breakdown"
import Footer from "@/components/footer"

export const metadata = {
  title: "Fintrix Platform Architecture | Complete Sitemap",
  description: "Explore the comprehensive platform structure of Fintrix - Financial Education & Trading Simulator",
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f4f4f4" }}>
      <Navigation />
      <Hero />
      <InteractiveIA />
      <PlatformPillars />
      <FeatureBreakdown />
      <Footer />
    </main>
  )
}
