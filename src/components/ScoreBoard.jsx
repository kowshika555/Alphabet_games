import React from 'react';
import Mascot from './Mascot';

const ScoreBoard = ({ score, total = 10, onRestart, onHome }) => {
    const isWinner = score >= 7;

    const getMessage = () => {
        if (score === total) return "Perfect! You are a Superstar! 🌟";
        if (isWinner) return "Great Job! You are amazing! 🚀";
        return "Good Try! Keep practicing! 💪";
    };

    return (
        <div className="scoreboard animate-pop" style={{ textAlign: 'center', width: '100%' }}>
            <Mascot state={isWinner ? 'happy' : 'idle'} />

            <h1 style={{
                fontSize: '3rem',
                color: 'var(--color-primary)',
                marginBottom: '10px',
                textShadow: '3px 3px 0px white'
            }}>
                {isWinner ? 'Woohoo!' : 'Oh No!'}
            </h1>

            <div className="glass-card" style={{
                padding: '40px',
                display: 'inline-block',
                minWidth: '350px',
                maxWidth: '90%'
            }}>
                <h2 style={{ fontSize: '1.5rem', color: '#888', marginBottom: '10px' }}>Your Score</h2>
                <div style={{
                    fontSize: '4.5rem',
                    fontWeight: '900',
                    color: isWinner ? 'var(--color-secondary)' : 'var(--color-accent)',
                    marginBottom: '20px'
                }}>
                    {score} / {total}
                </div>

                <p style={{ fontSize: '1.3rem', color: 'var(--color-text)', marginBottom: '30px' }}>
                    {getMessage()}
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        onClick={onHome}
                        style={{
                            backgroundColor: '#A0AEC0',
                            color: 'white',
                            padding: '15px 25px',
                            fontSize: '1.2rem',
                            borderRadius: 'var(--border-radius)',
                            borderBottom: '5px solid #718096',
                        }}
                        onMouseDown={(e) => { e.currentTarget.style.borderBottom = '2px solid #718096'; }}
                        onMouseUp={(e) => { e.currentTarget.style.borderBottom = '5px solid #718096'; }}
                    >
                        🏠 Home
                    </button>

                    <button
                        onClick={onRestart}
                        style={{
                            backgroundColor: 'var(--color-success)',
                            color: 'white',
                            padding: '15px 30px',
                            fontSize: '1.2rem',
                            borderRadius: 'var(--border-radius)',
                            borderBottom: '5px solid #28C060',
                            flexGrow: 1
                        }}
                        onMouseDown={(e) => { e.currentTarget.style.borderBottom = '2px solid #28C060'; }}
                        onMouseUp={(e) => { e.currentTarget.style.borderBottom = '5px solid #28C060'; }}
                    >
                        Play Again 🔄
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;
