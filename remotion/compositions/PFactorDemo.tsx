import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    spring,
    Sequence,
} from "remotion";

// Animated waveform bars - smooth sine waves, no random
const WaveformBars: React.FC<{ active: boolean }> = ({ active }) => {
    const frame = useCurrentFrame();

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[...Array(15)].map((_, i) => {
                // Use multiple sine waves with different frequencies for natural look
                const height = active
                    ? 10 + Math.sin(frame * 0.2 + i * 0.8) * 12 + Math.sin(frame * 0.15 + i * 1.2) * 6
                    : 10;
                return (
                    <div
                        key={i}
                        style={{
                            width: 5,
                            height: Math.max(10, height),
                            backgroundColor: "rgba(52, 211, 153, 0.7)",
                            borderRadius: 3,
                        }}
                    />
                );
            })}
        </div>
    );
};

// Phone mockup component - BIGGER
const PhoneMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            style={{
                width: 440,
                height: 900,
                backgroundColor: "#1e293b",
                borderRadius: 55,
                padding: 14,
                boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.5)",
                position: "relative",
            }}
        >
            {/* Notch */}
            <div
                style={{
                    position: "absolute",
                    top: 14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 160,
                    height: 38,
                    backgroundColor: "#0f172a",
                    borderRadius: 22,
                    zIndex: 10,
                }}
            />
            {/* Screen */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#0f172a",
                    borderRadius: 44,
                    overflow: "hidden",
                }}
            >
                {children}
            </div>
        </div>
    );
};

// Intro scene
const IntroScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const logoScale = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const titleOpacity = interpolate(frame, [20, 40], [0, 1], {
        extrapolateRight: "clamp",
    });

    const subtitleOpacity = interpolate(frame, [35, 55], [0, 1], {
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Animated background glow */}
            <div
                style={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: `scale(${1 + Math.sin(frame * 0.05) * 0.1})`,
                }}
            />

            {/* Logo */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transform: `scale(${logoScale})`,
                }}
            >
                <div
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 30,
                        background: "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 30,
                        boxShadow: "0 20px 40px -10px rgba(56, 189, 248, 0.4)",
                    }}
                >
                    <svg
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </div>

                <h1
                    style={{
                        fontSize: 80,
                        fontWeight: "bold",
                        color: "white",
                        margin: 0,
                        opacity: titleOpacity,
                        fontFamily: "system-ui, sans-serif",
                    }}
                >
                    PFactor
                </h1>

                <p
                    style={{
                        fontSize: 28,
                        color: "#94a3b8",
                        marginTop: 15,
                        opacity: subtitleOpacity,
                        fontFamily: "system-ui, sans-serif",
                    }}
                >
                    Ace Your Private Pilot Oral Exam
                </p>
            </div>
        </AbsoluteFill>
    );
};

// Demo scene - TEXT ON LEFT, BIG PHONE ON RIGHT
const DemoScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const phoneEnter = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 80 },
    });

    // Extended timeline for readability:
    // 0-40: Phone enters
    // 40-80: AI question appears
    // 80-180: User listening (waveform active)
    // 180-280: User response appears
    // 280-380: AI follow-up question appears

    const aiQuestionOpacity = interpolate(frame, [40, 70], [0, 1], {
        extrapolateRight: "clamp",
    });

    const isListening = frame > 80 && frame < 180;

    const userResponseOpacity = interpolate(frame, [180, 220], [0, 1], {
        extrapolateRight: "clamp",
    });

    const followUpOpacity = interpolate(frame, [280, 320], [0, 1], {
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 80px",
                gap: 80,
            }}
        >
            {/* Background elements */}
            <div
                style={{
                    position: "absolute",
                    top: 50,
                    left: 100,
                    width: 400,
                    height: 400,
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 50,
                    right: 100,
                    width: 500,
                    height: 500,
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />

            {/* Left side - Text content */}
            <div
                style={{
                    flex: 1,
                    maxWidth: 550,
                    opacity: interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" }),
                }}
            >
                <h2 style={{
                    color: "#38bdf8",
                    fontSize: 52,
                    fontFamily: "system-ui",
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: 24,
                    lineHeight: 1.2,
                }}>
                    Natural Voice Conversation
                </h2>
                <p style={{
                    color: "#cbd5e1",
                    fontSize: 28,
                    lineHeight: 1.5,
                    fontFamily: "system-ui",
                    marginBottom: 40,
                }}>
                    Practice with an AI examiner that listens and responds naturally, just like the real checkride.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: "#34d399",
                            boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)",
                        }} />
                        <span style={{ color: "#e2e8f0", fontSize: 24, fontFamily: "system-ui" }}>
                            Real-time voice recognition
                        </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: "#34d399",
                            boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)",
                        }} />
                        <span style={{ color: "#e2e8f0", fontSize: 24, fontFamily: "system-ui" }}>
                            Adaptive follow-up questions
                        </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: "#34d399",
                            boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)",
                        }} />
                        <span style={{ color: "#e2e8f0", fontSize: 24, fontFamily: "system-ui" }}>
                            Instant detailed feedback
                        </span>
                    </div>
                </div>
            </div>

            {/* Right side - Phone */}
            <div
                style={{
                    transform: `translateY(${interpolate(phoneEnter, [0, 1], [80, 0])}px) scale(1.05)`,
                    opacity: phoneEnter,
                }}
            >
                <PhoneMockup>
                    <div style={{ padding: 24, paddingTop: 65, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                        {/* Header */}
                        <div style={{ textAlign: "center", marginBottom: 24 }}>
                            <h2 style={{ color: "white", fontSize: 24, margin: 0, fontFamily: "system-ui", fontWeight: 600 }}>
                                Oral Exam Practice
                            </h2>
                            <p style={{ color: "#64748b", fontSize: 16, marginTop: 6, fontFamily: "system-ui" }}>
                                Weather & Flight Planning
                            </p>
                        </div>

                        {/* Conversation area */}
                        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
                            {/* AI Examiner initial question */}
                            <div
                                style={{
                                    opacity: aiQuestionOpacity,
                                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                                    borderRadius: 16,
                                    padding: 18,
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                                    <div
                                        style={{
                                            width: 38,
                                            height: 38,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #38bdf8, #2563eb)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                                            <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span style={{ color: "#38bdf8", fontSize: 16, fontWeight: 600, fontFamily: "system-ui" }}>
                                        AI Examiner
                                    </span>
                                </div>
                                <p style={{ color: "white", fontSize: 18, lineHeight: 1.5, margin: 0, fontFamily: "system-ui" }}>
                                    &quot;What is a SIGMET and how would it affect your flight planning?&quot;
                                </p>
                            </div>

                            {/* User response */}
                            <div
                                style={{
                                    opacity: userResponseOpacity,
                                    backgroundColor: "rgba(52, 211, 153, 0.1)",
                                    borderRadius: 16,
                                    padding: 18,
                                    marginLeft: 24,
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                                    <div
                                        style={{
                                            width: 38,
                                            height: 38,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #34d399, #059669)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <span style={{ color: "#34d399", fontSize: 16, fontWeight: 600, fontFamily: "system-ui" }}>
                                        You
                                    </span>
                                </div>
                                <p style={{ color: "white", fontSize: 18, lineHeight: 1.5, margin: 0, fontFamily: "system-ui" }}>
                                    &quot;A SIGMET is a significant meteorological advisory for hazardous weather. I would check my route and consider rerouting.&quot;
                                </p>
                            </div>

                            {/* AI Follow-up question */}
                            <div
                                style={{
                                    opacity: followUpOpacity,
                                    backgroundColor: "rgba(14, 165, 233, 0.1)",
                                    borderRadius: 16,
                                    padding: 18,
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                                    <div
                                        style={{
                                            width: 38,
                                            height: 38,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #38bdf8, #2563eb)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                                            <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span style={{ color: "#38bdf8", fontSize: 16, fontWeight: 600, fontFamily: "system-ui" }}>
                                        AI Examiner
                                    </span>
                                </div>
                                <p style={{ color: "white", fontSize: 18, lineHeight: 1.5, margin: 0, fontFamily: "system-ui" }}>
                                    &quot;Good! How does a SIGMET differ from an AIRMET?&quot;
                                </p>
                            </div>
                        </div>

                        {/* Listening indicator at bottom */}
                        <div
                            style={{
                                backgroundColor: "rgba(52, 211, 153, 0.1)",
                                borderRadius: 16,
                                padding: 16,
                                marginTop: 16,
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                <div
                                    style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #34d399, #059669)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: isListening ? "0 0 25px rgba(52, 211, 153, 0.5)" : "none",
                                        transform: isListening ? `scale(${1 + Math.sin(frame * 0.2) * 0.05})` : "scale(1)",
                                    }}
                                >
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                                        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ color: "#34d399", fontSize: 16, fontWeight: 600, margin: 0, marginBottom: 8, fontFamily: "system-ui" }}>
                                        {isListening ? "Listening..." : "Tap to speak"}
                                    </p>
                                    <WaveformBars active={isListening} />
                                </div>
                            </div>
                        </div>
                    </div>
                </PhoneMockup>
            </div>
        </AbsoluteFill>
    );
};

// Features scene
const FeaturesScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const features = [
        { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", title: "Natural Conversation", color: "#38bdf8" },
        { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Adaptive Learning", color: "#34d399" },
        { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Real ACS Coverage", color: "#a78bfa" },
        { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Practice Anytime", color: "#fbbf24" },
    ];

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                justifyContent: "center",
                alignItems: "center",
                padding: 100,
            }}
        >
            <h2
                style={{
                    color: "white",
                    fontSize: 56,
                    fontWeight: "bold",
                    marginBottom: 60,
                    opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
                    fontFamily: "system-ui",
                }}
            >
                Everything You Need
            </h2>

            <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
                {features.map((feature, i) => {
                    const delay = i * 10;
                    const scale = spring({
                        frame: frame - delay - 20,
                        fps,
                        config: { damping: 12, stiffness: 100 },
                    });

                    return (
                        <div
                            key={i}
                            style={{
                                width: 350,
                                padding: 30,
                                backgroundColor: "rgba(30, 41, 59, 0.5)",
                                borderRadius: 20,
                                border: "1px solid rgba(71, 85, 105, 0.5)",
                                transform: `scale(${Math.min(1, Math.max(0, scale))})`,
                                opacity: Math.min(1, Math.max(0, scale)),
                            }}
                        >
                            <div
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 15,
                                    backgroundColor: `${feature.color}20`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 20,
                                }}
                            >
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={feature.color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d={feature.icon} />
                                </svg>
                            </div>
                            <h3 style={{ color: "white", fontSize: 24, margin: 0, fontFamily: "system-ui" }}>
                                {feature.title}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
};

// Outro scene with CTA
const OutroScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 80 },
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Animated background */}
            <div
                style={{
                    position: "absolute",
                    width: 800,
                    height: 800,
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: `scale(${1 + Math.sin(frame * 0.03) * 0.1})`,
                }}
            />

            <div style={{ textAlign: "center", transform: `scale(${scale})` }}>
                <h2
                    style={{
                        fontSize: 72,
                        fontWeight: "bold",
                        color: "white",
                        margin: 0,
                        marginBottom: 20,
                        fontFamily: "system-ui",
                    }}
                >
                    Ready to Pass?
                </h2>

                <p
                    style={{
                        fontSize: 28,
                        color: "#94a3b8",
                        marginBottom: 50,
                        fontFamily: "system-ui",
                    }}
                >
                    Download PFactor and start practicing today
                </p>

                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 15,
                        padding: "20px 40px",
                        background: "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)",
                        borderRadius: 16,
                        boxShadow: "0 20px 40px -10px rgba(56, 189, 248, 0.4)",
                    }}
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span style={{ color: "white", fontSize: 24, fontWeight: 600, fontFamily: "system-ui" }}>
                        Download on App Store
                    </span>
                </div>
            </div>
        </AbsoluteFill>
    );
};

// Main composition
export const PFactorDemo: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
            <Sequence from={0} durationInFrames={90}>
                <IntroScene />
            </Sequence>
            <Sequence from={90} durationInFrames={450}>
                <DemoScene />
            </Sequence>
            <Sequence from={540} durationInFrames={150}>
                <FeaturesScene />
            </Sequence>
            <Sequence from={690} durationInFrames={90}>
                <OutroScene />
            </Sequence>
        </AbsoluteFill>
    );
};
