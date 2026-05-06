import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import AIInterviewer from '../components/AIInterviewer';
import CandidatePreview from '../components/CandidatePreview';
import ProgressSection from '../components/ProgressSection';
import CodingSection from '../components/CodingSection';
import FeedbackDashboard from '../components/FeedbackDashboard';

const InterviewPage = () => {
  const { colors } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions] = useState(5);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
  // const [questions, setQ]
  useEffect(() => {
    let timer;
    if (feedback === '' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [feedback, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
      setCode('');
    }
  };

  const handleSubmitInterview = () => {
    setFeedback('completed');
  };

  return (
    <main
      style={{
        flex: 1,
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        background: colors.background,
        minHeight: 'calc(100vh - 70px)',
      }}
    >
      {feedback === '' && (
        <div
          style={{
            marginBottom: '2rem',
            color: colors.text,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            background: colors.surface,
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          Time Left: {formatTime(timeLeft)}
        </div>
      )}

      <div
        style={{
          display: feedback === '' ? 'grid' : 'block',
          gridTemplateColumns: feedback === '' ? '1fr 2fr' : undefined,
          gap: feedback === '' ? '2rem' : undefined,
          height: feedback === '' ? 'calc(100vh - 250px)' : undefined,
        }}
      >
        {feedback === '' && (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <AIInterviewer />
              <CandidatePreview />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <ProgressSection
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
              />
              <CodingSection
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
                code={code}
                setCode={setCode}
                onNextQuestion={handleNextQuestion}
                onSubmitInterview={handleSubmitInterview}
              />
            </div>
          </>
        )}

        {feedback === 'completed' && (
          <FeedbackDashboard
            totalQuestions={totalQuestions}
            timeUsed={formatTime(1800 - timeLeft)}
          />
        )}
      </div>
    </main>
  );
};

export default InterviewPage;
