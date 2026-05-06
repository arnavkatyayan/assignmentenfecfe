import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const FeedbackDashboard = ({ totalQuestions, timeUsed }) => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        background: colors.surface,
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        marginTop: '2rem',
      }}
    >
      <h2 style={{ color: colors.text, marginBottom: '1rem' }}>Interview Summary</h2>
      <p style={{ color: colors.textSecondary, marginBottom: '2rem' }}>
        Interview completed! Your responses have been recorded.
      </p>
      <div>
        <h3 style={{ color: colors.text, marginBottom: '1rem' }}>Your Performance</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li
            style={{
              padding: '0.5rem 0',
              borderBottom: `1px solid ${colors.border}`,
              color: colors.textSecondary,
            }}
          >
            Questions Answered: {totalQuestions}
          </li>
          <li
            style={{
              padding: '0.5rem 0',
              borderBottom: `1px solid ${colors.border}`,
              color: colors.textSecondary,
            }}
          >
            Time Used: {timeUsed}
          </li>
          <li
            style={{
              padding: '0.5rem 0',
              color: colors.textSecondary,
            }}
          >
            Status: Completed
          </li>
        </ul>
      </div>
      <button
        onClick={handleBackHome}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          background: colors.primary,
          color: 'white',
          transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.opacity = '0.9'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
      >
        Back to Home
      </button>
    </div>
  );
};

export default FeedbackDashboard;
