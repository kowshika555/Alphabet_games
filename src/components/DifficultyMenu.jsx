import React from 'react';

const DifficultyMenu = ({ onSelectDifficulty }) => {
    const levels = [
        { id: 'easy', label: 'Easy', emoji: '🟢', color: '#43E97B', border: '#28C060', icon: '🐢' },
        { id: 'medium', label: 'Medium', emoji: '🟡', color: '#FFB347', border: '#D88E23', icon: '🐆' },
        { id: 'hard', label: 'Hard', emoji: '🔴', color: '#FF6B6B', border: '#D64545', icon: '🦅' }
    ];

    return (
        <div className="difficulty-menu">
            <h2 style={{
                color: '#666',
                fontSize: '1.8rem',
                marginBottom: '25px',
                fontWeight: '900'
            }}>
                CHOOSE YOUR ZONE
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '350px', margin: '0 auto' }}>
                {levels.map((level) => (
                    <button
                        key={level.id}
                        onClick={() => onSelectDifficulty(level.id)}
                        className="animate-wiggle"
                        style={{
                            backgroundColor: level.color,
                            color: 'white',
                            padding: '18px',
                            fontSize: '1.6rem',
                            fontWeight: 'bold',
                            borderRadius: '25px',
                            borderBottom: `8px solid ${level.border}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                        }}
                    >
                        <span>{level.emoji}</span>
                        <span>{level.label}</span>
                        <span style={{ fontSize: '2rem' }}>{level.icon}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DifficultyMenu;
