import React from 'react';

const Mascot = ({ state = 'idle' }) => {
    // state: 'idle', 'happy', 'sad'

    return (
        <div className="animate-float" style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 20px',
            position: 'relative',
            filter: 'drop-shadow(0 12px 15px rgba(0,0,0,0.1))',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: state === 'happy' ? 'scale(1.15) rotate(5deg)' : state === 'sad' ? 'scale(0.9) rotate(-5deg)' : 'scale(1)'
        }}>
            <svg viewBox="0 0 200 200" width="100%" height="100%">
                {/* Ears */}
                <circle cx="50" cy="60" r="28" fill="#333" />
                <circle cx="150" cy="60" r="28" fill="#333" />
                <circle cx="50" cy="60" r="15" fill="#444" opacity="0.3" />
                <circle cx="150" cy="60" r="15" fill="#444" opacity="0.3" />

                {/* Head */}
                <circle cx="100" cy="110" r="75" fill="white" stroke="#333" strokeWidth="4" />

                {/* Head Highlight */}
                <path d="M 50 80 Q 100 40 150 80" stroke="rgba(255,255,255,0.8)" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5" />

                {/* Eye Patches */}
                <ellipse cx="65" cy="100" rx="22" ry="18" fill="#333" transform="rotate(-20 65 100)" />
                <ellipse cx="135" cy="100" rx="22" ry="18" fill="#333" transform="rotate(20 135 100)" />

                {/* Eyes */}
                {state === 'sad' ? (
                    <>
                        <path d="M 55 105 Q 65 95 75 105" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <path d="M 125 105 Q 135 95 145 105" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </>
                ) : state === 'happy' ? (
                    <>
                        <path d="M 55 100 Q 65 85 75 100" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <path d="M 125 100 Q 135 85 145 100" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </>
                ) : (
                    <>
                        <circle cx="65" cy="100" r="7" fill="white" />
                        <circle cx="135" cy="100" r="7" fill="white" />
                        <circle cx="68" cy="97" r="2.5" fill="#333" opacity="0.1" />
                        <circle cx="138" cy="97" r="2.5" fill="#333" opacity="0.1" />
                    </>
                )}

                {/* Nose */}
                <ellipse cx="100" cy="125" rx="12" ry="8" fill="#333" />
                <circle cx="96" cy="122" r="3" fill="white" opacity="0.3" />

                {/* Mouth */}
                {state === 'sad' ? (
                    <path d="M 85 150 Q 100 135 115 150" stroke="#333" strokeWidth="5" fill="none" strokeLinecap="round" />
                ) : (
                    <path d="M 85 145 Q 100 160 115 145" stroke="#333" strokeWidth="5" fill="none" strokeLinecap="round" />
                )}

                {/* Cheeks */}
                <circle cx="50" cy="130" r="10" fill="#FF9A9E" opacity="0.5" />
                <circle cx="150" cy="130" r="10" fill="#FF9A9E" opacity="0.5" />

                {/* Tears Animation for SAD state */}
                {state === 'sad' && (
                    <>
                        <circle cx="60" cy="115" r="6" fill="#4FACFE" style={{ animation: 'tear-drop 1.5s infinite' }} />
                        <circle cx="140" cy="115" r="6" fill="#4FACFE" style={{ animation: 'tear-drop 1.5s infinite 0.7s' }} />
                    </>
                )}

                {/* Magic Sparkles for HAPPY state */}
                {state === 'happy' && (
                    <>
                        <g style={{ animation: 'pop 1s infinite' }}>
                            <path d="M 170 60 L 175 75 L 165 75 Z" fill="#FFD93D" />
                            <path d="M 30 70 L 35 85 L 25 85 Z" fill="#FFD93D" />
                            <circle cx="180" cy="90" r="4" fill="#4FACFE" />
                            <circle cx="20" cy="100" r="4" fill="#FFB347" />
                        </g>
                    </>
                )}

            </svg>
        </div>
    );
};

export default Mascot;
