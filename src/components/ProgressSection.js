import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
const ProgressSection = ({ currentQuestion, totalQuestions }) => {
  const { colors } = useTheme();
  const [progress, setProgress] = useState(currentQuestion / totalQuestions * 100);

  useEffect(() => {
    setProgress((currentQuestion / totalQuestions) * 100);
  }, [currentQuestion, totalQuestions]);

  const getProgressColor = (percentage) => {
    if (percentage <= 20) {
      return 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
    } else if (percentage <= 60) {
      return 'linear-gradient(90deg, #84cc16 0%, #65a30d 100%)';
    } else if (percentage <= 80) {
      return 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)';
    } else {
      return 'linear-gradient(90deg, #059669 0%, #047857 100%)';
    }
  };
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(102,126,234,0.05) 100%)`,
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        border: '1px solid rgba(102,126,234,0.1)',
        transition: 'all 0.3s ease',
        animation: 'slideInRight 0.6s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '1.5rem' }}>📊</div>
        <h3 style={{ margin: 0, color: colors.text, fontWeight: '600', fontSize: '1.1rem' }}>Interview Progress</h3>
      </div>
      
      <div
        style={{
          width: '100%',
          height: '12px',
          background: colors.border,
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            height: '100%',
            background: getProgressColor(progress),
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.5s ease',
            width: `${progress}%`,
            boxShadow: progress <= 20 ? '0 0 10px rgba(239, 68, 68, 0.5)' : progress <= 60 ? '0 0 10px rgba(132, 204, 22, 0.5)' : '0 0 10px rgba(5, 150, 105, 0.5)',
          }}
        ></div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ color: colors.textSecondary, margin: 0, fontWeight: '500' }}>
          Question <span style={{ color: colors.text, fontWeight: '700', fontSize: '1.1rem' }}>{currentQuestion}</span> of <span style={{ color: colors.text, fontWeight: '700', fontSize: '1.1rem' }}>{totalQuestions}</span>
        </p>
        <div style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
          color: '#1e40af',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '0.9rem',
        }}>
          {Math.round(progress)}% Complete
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
