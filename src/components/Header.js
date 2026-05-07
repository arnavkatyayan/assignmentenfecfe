import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ onThemeToggle }) => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header
      style={{
        background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
        color: 'white',
        padding: '1.2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        animation: 'slideInLeft 0.6s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <div style={{
          fontSize: '1.8rem',
          animation: 'float 3s ease-in-out infinite'
        }}>💼</div>
        <h1 style={{
          margin: 0,
          fontWeight: '700',
          letterSpacing: '-0.5px',
          fontFamily:'Inter, sans-serif',
        }}>InterviewVault</h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={onThemeToggle}
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '0.6rem 1.2rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.25)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.15)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        {location.pathname !== '/' && location.pathname !== '/login' && location.pathname!=='/interview' && (
        <button
          onClick={handleLogout}
             style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '0.6rem 1.2rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.25)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.15)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
         ↩️ Logout
        </button>)}
      </div>
    </header>
  );
};

export default Header;