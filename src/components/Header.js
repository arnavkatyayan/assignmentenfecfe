import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onThemeToggle }) => {
  const { isDarkMode, colors } = useTheme();

  return (
    <header
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: colors.text,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ fontSize: '1.8rem', margin: 0 }}>AI Interview Platform</h1>
      <button
        onClick={onThemeToggle}
        style={{
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: colors.text,
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
};

export default Header;
