import React from "react";
import Link from "next/link";
import { RiLineChartLine } from "react-icons/ri";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="border-b border-[#e5e7eb] bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#0063b3] rounded-lg flex items-center justify-center">
                                <RiLineChartLine className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-[#222222]">Fintrix</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-[#222222] mb-4">Terms of Service</h1>
                <p className="text-[#6b7280] mb-8">Last updated: December 1, 2024</p>

                <div className="prose prose-gray max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">1. Acceptance of Terms</h2>
                        <p className="text-[#6b7280] mb-4">
                            By accessing and using Fintrix (&quot;the Platform&quot;), you accept and agree to be bound by
                            the terms and provision of this agreement. If you do not agree to these terms, please
                            do not use our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">2. Description of Service</h2>
                        <p className="text-[#6b7280] mb-4">
                            Fintrix provides financial education services including but not limited to:
                        </p>
                        <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                            <li>Online courses and learning materials</li>
                            <li>Virtual trading simulator with simulated funds</li>
                            <li>Community forums and discussion rooms</li>
                            <li>Mentorship and guidance programs</li>
                            <li>Quizzes, assessments, and certifications</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">3. Educational Disclaimer</h2>
                        <p className="text-[#6b7280] mb-4">
                            The content provided on Fintrix is for educational purposes only and should not be
                            considered as financial advice. Trading and investing in securities involves risk,
                            and users should consult with qualified financial advisors before making investment
                            decisions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">4. User Accounts</h2>
                        <p className="text-[#6b7280] mb-4">
                            Users are responsible for maintaining the confidentiality of their account credentials
                            and for all activities that occur under their account. You must notify us immediately
                            of any unauthorized use of your account.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">5. Intellectual Property</h2>
                        <p className="text-[#6b7280] mb-4">
                            All content on the Platform, including courses, videos, text, graphics, and logos,
                            is the property of Fintrix and is protected by copyright laws. Users may not reproduce,
                            distribute, or create derivative works without prior written consent.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">6. Virtual Trading Simulator</h2>
                        <p className="text-[#6b7280] mb-4">
                            The trading simulator uses simulated funds and does not involve real money. Results
                            achieved in the simulator may not reflect actual market conditions or real trading
                            outcomes. Users understand that simulated trading does not carry the risk of real
                            financial loss.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">7. Limitation of Liability</h2>
                        <p className="text-[#6b7280] mb-4">
                            Fintrix shall not be liable for any direct, indirect, incidental, special, or
                            consequential damages resulting from the use or inability to use our services,
                            including but not limited to financial losses in actual trading.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">8. Contact Information</h2>
                        <p className="text-[#6b7280] mb-4">
                            For questions about these Terms of Service, please contact us at:
                        </p>
                        <p className="text-[#6b7280]">
                            Email: legal@fintrix.com<br />
                            Address: 123 Financial District, Bangalore, Karnataka 560001
                        </p>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-[#e5e7eb]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0063b3] rounded-lg flex items-center justify-center">
                            <RiLineChartLine className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-[#222222]">Fintrix</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-[#6b7280]">
                        <Link href="/privacy" className="hover:text-[#222222]">Privacy</Link>
                        <Link href="/contact" className="hover:text-[#222222]">Contact</Link>
                    </div>
                    <p className="text-sm text-[#6b7280]">© 2024 Fintrix. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
