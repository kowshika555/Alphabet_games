import React, { useState, useEffect } from 'react';
import Mascot from './Mascot';
import { questions } from '../data/questions';

const GameScreen = ({ difficulty, onEndGame, onHome }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [mascotState, setMascotState] = useState('idle'); // idle, happy, sad
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const gameQuestions = questions[difficulty].slice(0, 10);
    const currentQuestion = gameQuestions[currentQuestionIndex];

    useEffect(() => {
        setSelectedOption(null);
        setIsAnswered(false);
        setMascotState('idle');
    }, [currentQuestionIndex]);

    const handleOptionClick = (option) => {
        if (isAnswered) return;

        setIsAnswered(true);
        setSelectedOption(option);

        const isCorrect = option === currentQuestion.answer;

        if (isCorrect) {
            setScore(prev => prev + 1);
            setMascotState('happy');
        } else {
            setMascotState('sad');
        }

        setTimeout(() => {
            if (currentQuestionIndex < 9) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                onEndGame(score + (isCorrect ? 1 : 0));
            }
        }, 2500);
    };

    return (
        <div className="game-screen" style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '15px' }}>

            {/* Navigation Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
                <button
                    onClick={onHome}
                    className="bubbly-button"
                    style={{ padding: '10px 20px', fontSize: '1.1rem', color: 'var(--color-accent)' }}
                >
                    🏠 Home
                </button>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <div className="glass-card" style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '900' }}>
                        <span style={{ color: '#888' }}>ZONE: {difficulty.toUpperCase()}</span>
                    </div>

                    <div className="glass-card" style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '900', background: 'var(--color-secondary)', color: 'white' }}>
                        <span>🌟 {score}</span>
                    </div>

                    <div className="glass-card" style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '900' }}>
                        <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>{currentQuestionIndex + 1} / 10</span>
                    </div>
                </div>
            </div>

            <Mascot state={mascotState} />

            <div className="glass-card" style={{
                padding: '40px 30px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Progress Bar Container */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '10px',
                    background: '#eee'
                }}>
                    <div style={{
                        height: '100%',
                        backgroundColor: 'var(--color-success)',
                        width: `${((currentQuestionIndex + 1) / 10) * 100}%`,
                        transition: 'width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}></div>
                </div>

                <h2 style={{ fontSize: '2.2rem', marginBottom: '25px', color: '#444', fontWeight: '900' }}>
                    {currentQuestion.question}
                </h2>

                {currentQuestion.content && (
                    <div className="animate-float" style={{
                        fontSize: '6.5rem',
                        fontWeight: '900',
                        color: 'var(--color-primary)',
                        marginBottom: '30px',
                        textShadow: '4px 4px 0px rgba(0,0,0,0.05)',
                        background: 'rgba(79, 172, 254, 0.1)',
                        display: 'inline-block',
                        padding: '10px 40px',
                        borderRadius: '30px'
                    }}>
                        {currentQuestion.content}
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', marginTop: '10px' }}>
                    {currentQuestion.options.map((opt, idx) => {
                        let bgColor = 'white';
                        let boxShadow = '0 6px 0 #ddd';

                        if (isAnswered) {
                            if (opt === currentQuestion.answer) {
                                bgColor = 'var(--color-success)';
                                boxShadow = '0 6px 0 #28C060';
                            } else if (opt === selectedOption) {
                                bgColor = 'var(--color-accent)';
                                boxShadow = '0 6px 0 #D64545';
                            } else {
                                bgColor = '#f8f8f8';
                                boxShadow = '0 4px 0 #eee';
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleOptionClick(opt)}
                                disabled={isAnswered}
                                style={{
                                    backgroundColor: bgColor,
                                    borderRadius: '25px',
                                    padding: '25px 15px',
                                    fontSize: '1.8rem',
                                    fontWeight: '900',
                                    color: (isAnswered && (opt === currentQuestion.answer || opt === selectedOption)) ? 'white' : '#555',
                                    boxShadow: boxShadow,
                                    border: '2px solid white'
                                }}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Reward Feedback */}
            <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isAnswered && (
                    <div className="animate-pop" style={{
                        background: mascotState === 'happy' ? 'var(--color-success)' : 'var(--color-accent)',
                        color: 'white',
                        padding: '10px 30px',
                        borderRadius: '50px',
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                        {mascotState === 'happy' ? '✨ AWESOME! ✨' : 'Oopsie! Try Again!'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameScreen;
