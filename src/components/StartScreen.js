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
        background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(102,126,234,0.05) 100%)`,
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        color: colors.text,
        border: '1px solid rgba(102,126,234,0.1)',
        animation: 'fadeIn 0.8s ease',
        marginTop: '80px',
      }}
    >
      <div style={{
        fontSize: '5rem',
        marginBottom: '1.5rem',
        animation: 'float 4s ease-in-out infinite'
      }}>🚀</div>
      <h2 style={{
        fontSize: '2.8rem',
        marginBottom: '1rem',
        color: colors.text,
        fontWeight: '700',
        lineHeight: '1.2'
      }}>
        Welcome to Your AI Interview
      </h2>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '3rem',
        color: colors.textSecondary,
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 3rem',
      }}>
        Prepare yourself for success! Complete 5 coding challenges and showcase your problem-solving skills.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
          padding: '1.5rem 2rem',
          borderRadius: '12px',
          flex: '1',
          minWidth: '200px'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</div>
          <div style={{ color: '#1e40af', fontWeight: '600' }}>30 Minutes</div>
          <div style={{ fontSize: '0.9rem', color: '#1e40af', opacity: 0.7 }}>Time Limit</div>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
          padding: '1.5rem 2rem',
          borderRadius: '12px',
          flex: '1',
          minWidth: '200px'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
          <div style={{ color: '#065f46', fontWeight: '600' }}>5 Questions</div>
          <div style={{ fontSize: '0.9rem', color: '#065f46', opacity: 0.7 }}>Difficulty: Mixed</div>
        </div>
      </div>
      <button
        onClick={handleStartInterview}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          padding: '1.1rem 3rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          marginTop: '2.5rem',
          boxShadow: '0 8px 20px rgba(102,126,234,0.3)',
          transform: 'translateY(0)',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 12px 30px rgba(102,126,234,0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 20px rgba(102,126,234,0.3)';
        }}
      >
        🎯 Start Interview Now
      </button>
    </div>
  );
};

export default StartScreen;
