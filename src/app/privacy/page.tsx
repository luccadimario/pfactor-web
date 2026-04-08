export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700/50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2">
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white">PFactor</span>
                    </a>
                </div>
            </nav>

            <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
                <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
                <p className="text-slate-400 mb-10">Last updated: April 8, 2026</p>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
                        <p>When you create an account with PFactor, we collect the following information:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                            <li>Your Apple ID email address (if provided during Sign in with Apple)</li>
                            <li>A unique identifier from Apple used to authenticate your account</li>
                            <li>Your exam session results, scores, and performance data</li>
                            <li>Subscription status and purchase history</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                            <li>Provide and maintain the PFactor service</li>
                            <li>Track your progress and performance across exam sessions</li>
                            <li>Process subscription payments through Apple&apos;s App Store</li>
                            <li>Improve the quality and accuracy of AI-generated exam questions and feedback</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage</h2>
                        <p>Your data is stored securely on Convex cloud infrastructure. Exam session audio and voice input is processed in real time and is not stored. AI-generated responses are generated via the xAI (Grok) API and are not retained beyond the duration of your session.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
                        <p>PFactor uses the following third-party services:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                            <li><strong className="text-slate-200">Apple Sign In</strong> — for authentication</li>
                            <li><strong className="text-slate-200">Convex</strong> — for backend data storage</li>
                            <li><strong className="text-slate-200">xAI (Grok)</strong> — for AI question evaluation and text-to-speech</li>
                            <li><strong className="text-slate-200">Apple App Store</strong> — for subscription billing</li>
                        </ul>
                        <p className="mt-2">We do not sell your personal information to any third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
                        <p>We retain your account data and exam history for as long as your account is active. You may request deletion of your account and all associated data by contacting us at the email below.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">6. Children&apos;s Privacy</h2>
                        <p>PFactor is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the date at the top of this page.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <p className="mt-2 text-sky-400">support@pfactor.app</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
