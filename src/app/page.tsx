export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Clearance</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
            <button className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-lg transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm mb-8">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
            Coming Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ace Your Private Pilot
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Oral Exam
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Practice with an AI examiner that listens, responds, and adapts to your knowledge level.
            Build confidence through natural conversation, just like the real checkride.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40">
              Join the Waitlist
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700">
              See Demo
            </button>
          </div>
        </div>

        {/* Voice Visualization */}
        <div className="max-w-4xl mx-auto mt-20 relative">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-sky-400 font-medium mb-2">AI Examiner</p>
                <p className="text-lg text-white">
                  &ldquo;You&apos;re planning a cross-country flight and notice the weather briefing mentions
                  a SIGMET. Can you explain what a SIGMET is and how it would affect your flight planning?&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-pulse-ring"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-emerald-400 font-medium mb-1">Listening...</p>
                  <div className="flex items-center gap-1">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-emerald-400/60 rounded-full"
                        style={{
                          height: `${Math.random() * 24 + 8}px`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-sky-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Prepare
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Clearance simulates the real oral exam experience with intelligent AI that adapts to your responses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Natural Conversation</h3>
              <p className="text-slate-400">
                Speak naturally like you would with a real examiner. No typing, no multiple choice - just talk.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Adaptive Learning</h3>
              <p className="text-slate-400">
                The AI identifies your weak areas and focuses on topics where you need the most practice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real ACS Coverage</h3>
              <p className="text-slate-400">
                Questions aligned with the FAA Airman Certification Standards for Private Pilot.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Practice Anytime</h3>
              <p className="text-slate-400">
                No scheduling needed. Practice at your own pace, whenever and wherever works for you.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Track Progress</h3>
              <p className="text-slate-400">
                See detailed analytics on your performance and watch your confidence grow over time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Feedback</h3>
              <p className="text-slate-400">
                Get immediate, detailed feedback on your answers with references to FAR/AIM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Getting started is as easy as starting a conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-500/20 border-2 border-sky-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sky-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Choose Your Focus</h3>
              <p className="text-slate-400">
                Select specific topics or let Clearance guide you through a comprehensive oral exam simulation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-500/20 border-2 border-sky-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sky-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Speak Your Answers</h3>
              <p className="text-slate-400">
                Answer questions by speaking naturally. The AI listens and understands your responses in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky-500/20 border-2 border-sky-500 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-sky-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Get Feedback</h3>
              <p className="text-slate-400">
                Receive instant feedback, follow-up questions, and detailed explanations to deepen your understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Preparing?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Join pilots who are already using AI to prepare for their checkrides with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all">
                Join Waitlist
              </button>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">Clearance</span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; 2025 Clearance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
