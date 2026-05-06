import React from 'react';
import { useTheme } from '../context/ThemeContext';

const AIInterviewer = () => {
  const { colors } = useTheme();

  return (
    <div
      style={{
        background: colors.surface,
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ marginBottom: '1rem', color: colors.text }}>AI Interviewer</h3>
      <div
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '8px',
          overflow: 'hidden',
          background: colors.background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: '#333',
            color: 'white',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          AI Interviewer Video Feed
        </div>
      </div>
    </div>
  );
};

export default AIInterviewer;
