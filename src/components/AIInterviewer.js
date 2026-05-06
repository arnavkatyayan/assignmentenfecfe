import React from 'react';
import { useTheme } from '../context/ThemeContext';

const AIInterviewer = () => {
  const { colors } = useTheme();

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(102,126,234,0.05) 100%)`,
        borderRadius: '16px',
        padding: '1.8rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        border: '1px solid rgba(102,126,234,0.1)',
        transition: 'all 0.3s ease',
        animation: 'slideInLeft 0.6s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '1.5rem' }}>🎥</div>
        <h3 style={{ margin: 0, color: colors.text, fontWeight: '600', fontSize: '1.1rem' }}>AI Interviewer</h3>
      </div>
      <div
        style={{
          width: '100%',
          height: '240px',
          borderRadius: '12px',
          overflow: 'hidden',
          background: `linear-gradient(135deg, #1f2937 0%, #111827 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid rgba(102,126,234,0.2)',
          position: 'relative',
          boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        <div
          style={{
            color: '#888',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{
            fontSize: '3rem',
            opacity: 0.6,
            animation: 'float 3s ease-in-out infinite'
          }}>🤖</div>
          <div style={{ fontSize: '1rem', fontWeight: '500' }}>AI Interviewer Video Feed</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.6 }}>Ready to evaluate your performance</div>
        </div>
      </div>
    </div>
  );
};

export default AIInterviewer;
