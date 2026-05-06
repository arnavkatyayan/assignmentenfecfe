import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const CodingSection = ({
  currentQuestion,
  totalQuestions,
  code,
  setCode,
  onNextQuestion,
  onPreviousQuestion,
  onSubmitInterview,
  questions,
}) => {
  const { colors } = useTheme();

  
  useEffect(() => {
    const savedCode = localStorage.getItem(`coding_response_${currentQuestion - 1}`);
    if (savedCode !== null) { 
      setCode(savedCode);
    } else {
      setCode(''); 
    }
  }, [currentQuestion, setCode]);

  useEffect(() => {
    if (code) {
      localStorage.setItem(`coding_response_${currentQuestion - 1}`, code);
    }
  }, [code, currentQuestion]);

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
        minHeight: '0',
        overflowY: 'auto',
      }}
    >
      <h3 style={{ marginBottom: '1rem', color: colors.text, fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
        Coding Question {currentQuestion}
      </h3>
      <p style={{ marginBottom: '1rem', color: colors.textSecondary, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: '1.5' }}>
        {questions[currentQuestion - 1]?.description}
        <br />
        <strong>Input:</strong> {questions[currentQuestion - 1]?.sampleInput}
        <br />
        <strong>Output:</strong> {questions[currentQuestion - 1]?.sampleOutput}

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
          minHeight: '200px',
          border: `1px solid ${colors.border}`,
          borderRadius: '8px',
          fontFamily: "'Courier New', monospace",
          fontSize: 'clamp(12px, 1.5vw, 14px)',
          resize: 'none',
          marginBottom: '1.5rem',
          background: colors.background,
          color: colors.text,
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexWrap: 'wrap',
          flexShrink: 0,
        }}
      >
        <button
          onClick={onPreviousQuestion}
          disabled={currentQuestion === 1}
          style={{
            padding: '0.75rem 1.25rem',
            border: 'none',
            borderRadius: '12px',
            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            cursor: currentQuestion === 1 ? 'not-allowed' : 'pointer',
            background: currentQuestion === 1
              ? '#f0f0f0'
              : 'linear-gradient(135deg, #e3e8ff 0%, #c7d2fe 100%)',
            color: currentQuestion === 1 ? '#9ca3af' : '#3730a3',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: currentQuestion === 1
              ? 'none'
              : '0 4px 14px 0 rgba(55, 48, 163, 0.2)',
            transform: 'translateY(0)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            if (currentQuestion !== 1) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px 0 rgba(55, 48, 163, 0.3)';
              e.target.style.background = 'linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentQuestion !== 1) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px 0 rgba(55, 48, 163, 0.2)';
              e.target.style.background = 'linear-gradient(135deg, #e3e8ff 0%, #c7d2fe 100%)';
            }
          }}
        >
          ← Previous
        </button>

        <button
          onClick={onNextQuestion}
          disabled={currentQuestion === totalQuestions}
          style={{
            padding: '0.75rem 1.25rem',
            border: 'none',
            borderRadius: '12px',
            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            cursor: currentQuestion === totalQuestions ? 'not-allowed' : 'pointer',
            background: currentQuestion === totalQuestions
              ? '#f0f0f0'
              : 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            color: currentQuestion === totalQuestions ? '#9ca3af' : '#1e40af',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: currentQuestion === totalQuestions
              ? 'none'
              : '0 4px 14px 0 rgba(30, 64, 175, 0.2)',
            transform: 'translateY(0)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            if (currentQuestion !== totalQuestions) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px 0 rgba(30, 64, 175, 0.3)';
              e.target.style.background = 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentQuestion !== totalQuestions) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px 0 rgba(30, 64, 175, 0.2)';
              e.target.style.background = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
            }
          }}
        >
          Next →
        </button>

        {currentQuestion === totalQuestions && (
          <button
            onClick={onSubmitInterview}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '12px',
              fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.3)',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px 0 rgba(16, 185, 129, 0.4)';
              e.target.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px 0 rgba(16, 185, 129, 0.3)';
              e.target.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            }}
          >
            🎯 Submit Interview
          </button>
        )}
      </div>
    </div>
  );
};

export default CodingSection;
