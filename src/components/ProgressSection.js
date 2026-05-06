import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProgressSection = ({ currentQuestion, totalQuestions }) => {
  const { colors } = useTheme();
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div
      style={{
        background: colors.surface,
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ marginBottom: '1rem', color: colors.text }}>Interview Progress</h3>
      <div
        style={{
          width: '100%',
          height: '20px',
          background: colors.border,
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            transition: 'width 0.3s ease',
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <p style={{ color: colors.textSecondary, margin: 0 }}>
        Question {currentQuestion} of {totalQuestions}
      </p>
    </div>
  );
};

export default ProgressSection;
