import React, { useState } from 'react';
import DifficultyMenu from './components/DifficultyMenu';
import GameScreen from './components/GameScreen';
import ScoreBoard from './components/ScoreBoard';
import Mascot from './components/Mascot';

function App() {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'finished'
  const [difficulty, setDifficulty] = useState('easy');
  const [score, setScore] = useState(0);
  const [totalOverallScore, setTotalOverallScore] = useState(0);

  const handleStartGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setGameState('playing');
    setScore(0);
  };

  const handleEndGame = (finalScore) => {
    setScore(finalScore);
    setTotalOverallScore(prev => prev + finalScore);
    setGameState('finished');
  };

  const handleRestart = () => {
    setGameState('playing');
    setScore(0);
  };

  const handleHome = () => {
    setGameState('menu');
    setScore(0);
  };

  return (
    <div className="App" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>

      {gameState === 'menu' && (
        <div className="glass-card animate-pop" style={{ padding: '40px', maxWidth: '600px', width: '100%', position: 'relative' }}>

          {/* Overall Score Badge */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            background: 'var(--color-secondary)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: '900',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transform: 'rotate(5deg)',
            border: '4px solid white'
          }}>
            🌟 {totalOverallScore} Points
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Mascot state="idle" />
            <h1 style={{ color: 'var(--color-primary)', fontSize: '3.5rem', margin: '10px 0', textShadow: '4px 4px 0px white' }}>Sparkle Sprout!</h1>
            <p style={{ fontSize: '1.4rem', color: '#555', fontWeight: 'bold' }}>Welcome to Sparkle-Sprout Island! I'm Pippin, your guide. Ready for an adventure?</p>
          </div>
          <DifficultyMenu onSelectDifficulty={handleStartGame} />
        </div>
      )}

      {gameState === 'playing' && (
        <GameScreen difficulty={difficulty} onEndGame={handleEndGame} onHome={handleHome} />
      )}

      {gameState === 'finished' && (
        <ScoreBoard score={score} onRestart={handleRestart} onHome={handleHome} />
      )}

      {gameState === 'menu' && (
        <footer style={{ marginTop: '30px', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
          ✨ A Magical Adventure for Early Learners ✨
        </footer>
      )}
    </div>
  );
}

export default App;
