import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CodingSection = ({
  currentQuestion,
  totalQuestions,
  code,
  setCode,
  onNextQuestion,
  onSubmitInterview,
}) => {
  const { colors } = useTheme();

  return (
    <div
      style={{
        background: colors.surface,
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h3 style={{ marginBottom: '1rem', color: colors.text }}>
        Coding Question {currentQuestion}
      </h3>
      <p style={{ marginBottom: '1rem', color: colors.textSecondary }}>
        Write a function to reverse a string.
      </p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        rows={10}
        style={{
          width: '100%',
          flex: 1,
          padding: '1rem',
          border: `1px solid ${colors.border}`,
          borderRadius: '8px',
          fontFamily: "'Courier New', monospace",
          fontSize: '14px',
          resize: 'none',
          marginBottom: '1rem',
          background: colors.background,
          color: colors.text,
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={onNextQuestion}
          disabled={currentQuestion === totalQuestions}
          style={{
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: currentQuestion === totalQuestions ? 'not-allowed' : 'pointer',
            background: colors.border,
            color: colors.text,
            transition: 'background 0.3s ease',
            opacity: currentQuestion === totalQuestions ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (currentQuestion !== totalQuestions) {
              e.target.style.background = '#a0a0a0';
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.background = colors.border;
          }}
        >
          Next Question
        </button>
        {currentQuestion === totalQuestions && (
          <button
            onClick={onSubmitInterview}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              background: colors.success,
              color: 'white',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Submit Interview
          </button>
        )}
      </div>
    </div>
  );
};

export default CodingSection;
