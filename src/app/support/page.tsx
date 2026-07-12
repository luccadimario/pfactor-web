export default function Support() {
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
                <h1 className="text-3xl font-bold text-white mb-2">Support</h1>
                <p className="text-slate-400 mb-10">We usually respond within one business day.</p>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6">
                        <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
                        <p>For help with your account, subscriptions, or anything else:</p>
                        <p className="mt-3">
                            <a href="mailto:support@pfactor.app" className="text-sky-400 text-lg font-medium hover:text-sky-300">
                                support@pfactor.app
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-white mb-1">The examiner can&apos;t hear me. What do I check?</h3>
                                <p className="text-slate-400">PFactor needs both Microphone and Speech Recognition permissions. Open iOS Settings → PFactor and make sure both are enabled, then restart your session.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white mb-1">How do I restore my Premium subscription?</h3>
                                <p className="text-slate-400">In the app, go to Settings → Restore Purchases. Subscriptions are billed through your Apple ID and can be managed in iOS Settings → your name → Subscriptions.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white mb-1">Do I need an internet connection?</h3>
                                <p className="text-slate-400">Yes — answers are graded and spoken by an AI examiner in real time, which requires a connection. If the connection drops mid-session, your graded progress is saved and uploads automatically when you&apos;re back online.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white mb-1">How do I cancel my subscription?</h3>
                                <p className="text-slate-400">Subscriptions are managed by Apple: iOS Settings → your name → Subscriptions → PFactor → Cancel. You keep Premium access until the end of the current billing period.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white mb-1">How do I delete my account and data?</h3>
                                <p className="text-slate-400">Email us at support@pfactor.app from the address associated with your account and we&apos;ll delete your account and all associated data. See our <a href="/privacy" className="text-sky-400 hover:text-sky-300">Privacy Policy</a> for details.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white mb-1">Is PFactor a substitute for ground instruction?</h3>
                                <p className="text-slate-400">No. PFactor is a study and practice tool for checkride oral exam preparation. Always verify information against current FAA publications and train with a certificated flight instructor.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
