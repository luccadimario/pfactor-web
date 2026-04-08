import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    spring,
    Sequence,
} from "remotion";

// Vertical video for social media (Instagram Reels, TikTok, YouTube Shorts)

const WaveformBars: React.FC<{ active: boolean }> = ({ active }) => {
    const frame = useCurrentFrame();

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center" }}>
            {[...Array(20)].map((_, i) => {
                const height = active
                    ? 6 + Math.sin(frame * 0.25 + i * 0.4) * 10 + Math.random() * 3
                    : 6;
                return (
                    <div
                        key={i}
                        style={{
                            width: 3,
                            height: Math.max(6, height),
                            backgroundColor: "rgba(52, 211, 153, 0.8)",
                            borderRadius: 2,
                        }}
                    />
                );
            })}
        </div>
    );
};

// Opening hook
const HookScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const textScale = spring({
        frame,
        fps,
        config: { damping: 10, stiffness: 100 },
    });

    const subOpacity = interpolate(frame, [25, 45], [0, 1], {
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
                justifyContent: "center",
                alignItems: "center",
                padding: 40,
            }}
        >
            {/* Pulsing background */}
            <div
                style={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: `scale(${1 + Math.sin(frame * 0.08) * 0.15})`,
                }}
            />

            <div style={{ textAlign: "center", transform: `scale(${textScale})` }}>
                <h1
                    style={{
                        fontSize: 72,
                        fontWeight: "bold",
                        color: "white",
                        margin: 0,
                        lineHeight: 1.1,
                        fontFamily: "system-ui",
                    }}
                >
                    Nervous about
                    <br />
                    your{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #38bdf8, #2563eb)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        checkride
                    </span>
                    ?
                </h1>

                <p
                    style={{
                        fontSize: 32,
                        color: "#94a3b8",
                        marginTop: 30,
                        opacity: subOpacity,
                        fontFamily: "system-ui",
                    }}
                >
                    We got you.
                </p>
            </div>
        </AbsoluteFill>
    );
};

// App demo scene
const AppDemoScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const cardEnter = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 80 },
    });

    const isListening = frame > 60;

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
                justifyContent: "center",
                alignItems: "center",
                padding: 30,
            }}
        >
            {/* Logo at top */}
            <div
                style={{
                    position: "absolute",
                    top: 80,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                }}
            >
                <div
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        background: "linear-gradient(135deg, #38bdf8, #2563eb)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </div>
                <span style={{ color: "white", fontSize: 36, fontWeight: "bold", fontFamily: "system-ui" }}>
                    PFactor
                </span>
            </div>

            {/* App card */}
            <div
                style={{
                    width: "90%",
                    maxWidth: 900,
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                    borderRadius: 30,
                    padding: 35,
                    border: "1px solid rgba(71, 85, 105, 0.5)",
                    transform: `translateY(${interpolate(cardEnter, [0, 1], [50, 0])}px)`,
                    opacity: cardEnter,
                }}
            >
                {/* AI Question */}
                <div
                    style={{
                        backgroundColor: "rgba(14, 165, 233, 0.1)",
                        borderRadius: 20,
                        padding: 24,
                        marginBottom: 25,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 15 }}>
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #38bdf8, #2563eb)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span style={{ color: "#38bdf8", fontSize: 20, fontWeight: 600, fontFamily: "system-ui" }}>
                            AI Examiner
                        </span>
                    </div>
                    <p style={{ color: "white", fontSize: 26, lineHeight: 1.4, margin: 0, fontFamily: "system-ui" }}>
                        &quot;Explain the difference between Class B and Class C airspace.&quot;
                    </p>
                </div>

                {/* User response */}
                <div
                    style={{
                        backgroundColor: "rgba(52, 211, 153, 0.1)",
                        borderRadius: 20,
                        padding: 24,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                        <div
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #34d399, #059669)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: isListening ? "0 0 30px rgba(52, 211, 153, 0.5)" : "none",
                                transform: isListening ? `scale(${1 + Math.sin(frame * 0.15) * 0.08})` : "scale(1)",
                            }}
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                                <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p style={{ color: "#34d399", fontSize: 20, fontWeight: 600, margin: 0, marginBottom: 10, fontFamily: "system-ui" }}>
                                {isListening ? "Listening..." : "Tap to speak"}
                            </p>
                            <WaveformBars active={isListening} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom text */}
            <p
                style={{
                    position: "absolute",
                    bottom: 150,
                    color: "#64748b",
                    fontSize: 22,
                    textAlign: "center",
                    fontFamily: "system-ui",
                    opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" }),
                }}
            >
                Practice anytime, anywhere
            </p>
        </AbsoluteFill>
    );
};

// CTA scene
const CTAScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const bounce = spring({
        frame: frame % 30,
        fps,
        config: { damping: 8, stiffness: 200 },
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
                justifyContent: "center",
                alignItems: "center",
                padding: 40,
            }}
        >
            {/* Animated glow */}
            <div
                style={{
                    position: "absolute",
                    width: 500,
                    height: 500,
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: `scale(${1 + Math.sin(frame * 0.05) * 0.2})`,
                }}
            />

            <div style={{ textAlign: "center", zIndex: 1 }}>
                {/* Logo */}
                <div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 28,
                        background: "linear-gradient(135deg, #38bdf8, #2563eb)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 30px",
                        boxShadow: "0 20px 50px -10px rgba(56, 189, 248, 0.5)",
                        transform: `scale(${0.95 + bounce * 0.05})`,
                    }}
                >
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </div>

                <h2
                    style={{
                        fontSize: 56,
                        fontWeight: "bold",
                        color: "white",
                        margin: 0,
                        marginBottom: 15,
                        fontFamily: "system-ui",
                    }}
                >
                    PFactor
                </h2>

                <p
                    style={{
                        fontSize: 28,
                        color: "#94a3b8",
                        marginBottom: 50,
                        fontFamily: "system-ui",
                    }}
                >
                    Ace your oral exam
                </p>

                {/* CTA button */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "22px 40px",
                        background: "linear-gradient(135deg, #38bdf8, #2563eb)",
                        borderRadius: 18,
                        boxShadow: "0 15px 40px -10px rgba(56, 189, 248, 0.5)",
                    }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span style={{ color: "white", fontSize: 22, fontWeight: 600, fontFamily: "system-ui" }}>
                        Download Now
                    </span>
                </div>

                <p
                    style={{
                        fontSize: 18,
                        color: "#64748b",
                        marginTop: 30,
                        fontFamily: "system-ui",
                    }}
                >
                    Coming soon on iOS
                </p>
            </div>
        </AbsoluteFill>
    );
};

// Main vertical composition
export const AppShowcase: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
            <Sequence from={0} durationInFrames={75}>
                <HookScene />
            </Sequence>
            <Sequence from={75} durationInFrames={135}>
                <AppDemoScene />
            </Sequence>
            <Sequence from={210} durationInFrames={90}>
                <CTAScene />
            </Sequence>
        </AbsoluteFill>
    );
};
