import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const StartScreen = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const handleStartInterview = () => {
    navigate('/interview');
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        background: colors.surface,
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        color: colors.text,
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: colors.text }}>
        Welcome to Your AI Interview
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: colors.textSecondary }}>
        Click start to begin your coding interview session.
      </p>
      <button
        onClick={handleStartInterview}
        style={{
          background: colors.primary,
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.opacity = '0.9'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
      >
        Start Interview
      </button>
    </div>
  );
};

export default StartScreen;
