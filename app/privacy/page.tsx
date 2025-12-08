import React from "react";
import Link from "next/link";
import { RiLineChartLine } from "react-icons/ri";

export default function PrivacyPage() {
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
                <h1 className="text-4xl font-bold text-[#222222] mb-4">Privacy Policy</h1>
                <p className="text-[#6b7280] mb-8">Last updated: December 1, 2024</p>

                <div className="prose prose-gray max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">1. Information We Collect</h2>
                        <p className="text-[#6b7280] mb-4">
                            We collect information you provide directly to us, including:
                        </p>
                        <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                            <li>Account information (name, email, phone number)</li>
                            <li>Profile information (educational background, interests)</li>
                            <li>Learning progress and assessment results</li>
                            <li>Virtual trading activity and portfolio data</li>
                            <li>Communications with our support team</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">2. How We Use Your Information</h2>
                        <p className="text-[#6b7280] mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                            <li>Provide and improve our educational services</li>
                            <li>Personalize your learning experience</li>
                            <li>Track your progress and provide recommendations</li>
                            <li>Communicate with you about your account and updates</li>
                            <li>Analyze usage patterns to improve the platform</li>
                            <li>Ensure security and prevent fraud</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">3. Information Sharing</h2>
                        <p className="text-[#6b7280] mb-4">
                            We do not sell your personal information. We may share your information in the
                            following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                            <li>With your consent</li>
                            <li>With service providers who assist in our operations</li>
                            <li>To comply with legal obligations</li>
                            <li>In connection with a merger or acquisition</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">4. Data Security</h2>
                        <p className="text-[#6b7280] mb-4">
                            We implement appropriate technical and organizational measures to protect your
                            personal information against unauthorized access, alteration, disclosure, or
                            destruction. This includes encryption, secure servers, and regular security audits.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">5. Your Rights</h2>
                        <p className="text-[#6b7280] mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-[#6b7280] space-y-2 mb-4">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Delete your account and associated data</li>
                            <li>Export your data in a portable format</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">6. Cookies and Tracking</h2>
                        <p className="text-[#6b7280] mb-4">
                            We use cookies and similar technologies to enhance your experience, analyze usage,
                            and deliver personalized content. You can manage cookie preferences through your
                            browser settings.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">7. Children&apos;s Privacy</h2>
                        <p className="text-[#6b7280] mb-4">
                            Our services are not intended for children under 16 years of age. We do not
                            knowingly collect personal information from children under 16.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#222222] mb-4">8. Contact Us</h2>
                        <p className="text-[#6b7280] mb-4">
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-[#6b7280]">
                            Email: privacy@fintrix.com<br />
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
                        <Link href="/terms" className="hover:text-[#222222]">Terms</Link>
                        <Link href="/contact" className="hover:text-[#222222]">Contact</Link>
                    </div>
                    <p className="text-sm text-[#6b7280]">© 2024 Fintrix. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
