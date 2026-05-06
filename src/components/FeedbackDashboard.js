import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const FeedbackDashboard = ({ totalQuestions, timeUsed }) => {
  const navigate = useNavigate();
  const { colors, isDarkMode } = useTheme();

  const handleBackHome = () => {
    navigate('/');
  };

  const stats = [
    {
      label: 'Questions Completed',
      value: totalQuestions,
      icon: '✅',
      lightBg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      darkBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
      lightText: '#065f46',
      darkText: '#86efac'
    },
    {
      label: 'Time Invested',
      value: timeUsed,
      icon: '⏱️',
      lightBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      darkBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)',
      lightText: '#92400e',
      darkText: '#fcd34d'
    },
    {
      label: 'Interview Status',
      value: 'Completed',
      icon: '🎯',
      lightBg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      darkBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
      lightText: '#1e40af',
      darkText: '#93c5fd'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
        : 'linear-gradient(135deg, #f0f4ff 0%, #e9ecef 100%)',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.6s ease'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '950px',
        background: colors.surface,
        borderRadius: '24px',
        boxShadow: isDarkMode
          ? '0 25px 50px rgba(0, 0, 0, 0.5)'
          : '0 25px 50px rgba(102, 126, 234, 0.15)',
        overflow: 'hidden',
        position: 'relative',
        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(102,126,234,0.1)'}`,
      }}>

        {/* Celebration Header */}
        <div style={{
          background: isDarkMode
            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
            : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          padding: '3.5rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '100px',
            height: '100px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 3s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '-30px',
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 4s ease-in-out infinite reverse'
          }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'float 2.5s ease-in-out infinite' }}>🎉</div>
            <h1 style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              margin: '0 0 0.8rem 0',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              letterSpacing: '-0.5px'
            }}>
              Congratulations!
            </h1>
            <p style={{
              fontSize: '1.15rem',
              opacity: 0.95,
              margin: 0,
              fontWeight: '400',
              lineHeight: '1.5'
            }}>
              🎓 You've successfully completed your coding interview
            </p>
          </div>
        </div>

        <div style={{ padding: '3rem 2rem' }}>
          <h2 style={{
            textAlign: 'center',
            color: colors.text,
            marginBottom: '2.5rem',
            fontSize: '1.9rem',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}>
            📊 Your Interview Summary
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                background: isDarkMode ? stat.darkBg : stat.lightBg,
                borderRadius: '18px',
                padding: '2.2rem',
                textAlign: 'center',
                boxShadow: isDarkMode
                  ? '0 8px 24px rgba(0, 0, 0, 0.3)'
                  : '0 8px 24px rgba(0, 0, 0, 0.06)',
                border: isDarkMode
                  ? `1px solid rgba(255,255,255,0.1)`
                  : `1px solid rgba(102,126,234,0.15)`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                  : '0 20px 40px rgba(102, 126, 234, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 8px 24px rgba(0, 0, 0, 0.3)'
                  : '0 8px 24px rgba(0, 0, 0, 0.06)';
              }}>
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '1rem',
                  display: 'inline-block',
                  animation: 'float 2.5s ease-in-out infinite'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '2.8rem',
                  fontWeight: '700',
                  color: isDarkMode ? stat.darkText : stat.lightText,
                  marginBottom: '0.5rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: isDarkMode ? colors.textSecondary : '#6b7280',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.6px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: isDarkMode
              ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.02) 100%)',
            borderRadius: '18px',
            padding: '2.5rem',
            textAlign: 'center',
            border: `2px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.15)'}`,
            marginBottom: '2.5rem'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', display: 'inline-block' }}>🏆</div>
            <h3 style={{
              color: colors.text,
              margin: '0 0 1rem 0',
              fontSize: '1.6rem',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>
              Outstanding Performance!
            </h3>
            <p style={{
              color: colors.textSecondary,
              margin: 0,
              fontSize: '1.05rem',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              You've demonstrated excellent problem-solving skills by completing all <strong>{totalQuestions}</strong> coding questions in <strong>{timeUsed}</strong>.
              Your responses have been recorded and will be reviewed by our advanced AI evaluation system.
            </p>
          </div>

          <div style={{
            background: isDarkMode
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(102, 126, 234, 0.08)',
            borderRadius: '14px',
            padding: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(102,126,234,0.15)'}`
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: colors.textSecondary, marginBottom: '0.5rem' }}>Questions Solved</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: colors.text }}>{totalQuestions}/5</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: colors.textSecondary, marginBottom: '0.5rem' }}>Time Taken</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: colors.text }}>{timeUsed}</div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleBackHome}
              style={{
                padding: '1.1rem 3.5rem',
                border: 'none',
                borderRadius: '14px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                transform: 'translateY(0)',
                position: 'relative',
                overflow: 'hidden',
                letterSpacing: '0.3px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
            >
              🏠 Return to Home
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default FeedbackDashboard;
