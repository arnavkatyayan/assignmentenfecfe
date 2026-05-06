import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import AIInterviewer from '../components/AIInterviewer';
import CandidatePreview from '../components/CandidatePreview';
import ProgressSection from '../components/ProgressSection';
import CodingSection from '../components/CodingSection';
import FeedbackDashboard from '../components/FeedbackDashboard';

const InterviewPage = () => {
  const { colors } = useTheme();

  const getInitialQuestion = () => {
    const saved = localStorage.getItem('current_question');
    return saved ? parseInt(saved, 10) : 1;
  };

  const [currentQuestion, setCurrentQuestion] = useState(getInitialQuestion);
  const [totalQuestions] = useState(5);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
   const questions = ([
    {
      id: 1,
      title: 'Two Sum',
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
      difficulty: 'Easy',
      sampleInput: 'nums = [2, 7, 11, 15], target = 9',
      sampleOutput: '[0, 1]',
    },
    {
      id: 2,
      title: 'Longest Substring Without Repeating Characters',
      description: 'Given a string, find the length of the longest substring without repeating characters.',
      difficulty: 'Medium',
      sampleInput: 's = "abcabcbb"',
      sampleOutput: '3 (substring is "abc")',
    },
    {
      id: 3,
      title: 'Median of Two Sorted Arrays',
      description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
      difficulty: 'Hard',
      sampleInput: 'nums1 = [1, 3], nums2 = [2]', 
      sampleOutput: '2.0',
    },
    { 
      id: 4,
      title: 'Valid Parentheses',
      description: 'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
      difficulty: 'Easy',
      sampleInput: 's = "()"',
      sampleOutput: 'true',
    },
    {
      id: 5,
      title: 'Merge k Sorted Lists',
      description: 'Merge k sorted linked lists and return it as one sorted list.',
      difficulty: 'Hard',
      sampleInput: 'lists = [[1,4,5],[1,3,4],[2,6]]',
      sampleOutput: '[1,1,2,3,4,4,5,6]',
    },
  ]); 
  useEffect(() => {
    let timer;
    if (feedback === '' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [feedback, timeLeft]);

  useEffect(() => {
    localStorage.setItem('current_question', currentQuestion.toString());
  }, [currentQuestion]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitInterview = () => {
    setFeedback('completed');
    localStorage.removeItem('current_question');
    for (let i = 0; i < totalQuestions; i++) {
      localStorage.removeItem(`coding_response_${i}`);
    }
  };

  return (
    <main
      style={{
        flex: 1,
        padding: 'clamp(1rem, 2vw, 2rem)',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        background: colors.background,
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
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
          minHeight: feedback === '' ? '0' : undefined,
          '@media (max-width: 1024px)': {
            gridTemplateColumns: feedback === '' ? '1fr' : undefined,
            height: feedback === '' ? 'auto' : undefined,
          }
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
                onPreviousQuestion={handlePreviousQuestion}
                onSubmitInterview={handleSubmitInterview}
                questions={questions}
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
