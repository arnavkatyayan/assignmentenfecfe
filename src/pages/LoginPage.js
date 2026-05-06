import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const features = [
  'AI interview practice',
  'Polished coding feedback',
  'Auto-save every response',
  'Progress tracking in real time',
  'Designed for your portfolio',
];

export default function LoginPage() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [displayText, setDisplayText] = useState(features[0]);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const currentFeature = features[currentFeatureIndex];
    const isComplete = !isDeleting && displayText === currentFeature;
    const isCleared = isDeleting && displayText === '';
    let timer = null;

    if (isComplete) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isCleared) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
      }, 500);
    } else {
      timer = setTimeout(() => {
        const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1;
        setDisplayText(currentFeature.slice(0, nextLength));
      }, isDeleting ? 40 : 70);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentFeatureIndex]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (username === 'arnavk' && password === '1234') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  const inputStyle = (isFocused) => ({
    width: '100%',
    padding: '1rem 1.2rem',
    marginTop: '0.5rem',
    border: `2px solid ${isFocused ? '#667eea' : 'rgba(102, 126, 234, 0.2)'}`,
    borderRadius: '10px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    background: colors.surface,
    color: colors.text,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isFocused ? '0 0 20px rgba(102, 126, 234, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
    outline: 'none',
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 4vw, 2rem)',
        background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(102, 126, 234, 0.05) 100%)`,
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'rgba(118, 75, 162, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <div
        className="login-split"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 'clamp(320px, 95vw, 1200px)',
          gap: 'clamp(1rem, 3vw, 2rem)',
        }}
      >
        {/* ✅ FEATURE PANEL — LEFT SIDE */}
        <div
          className="feature-panel"
          style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
            color: 'white',
            minHeight: 'clamp(480px, 60vh, 560px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 30px 90px rgba(59, 130, 246, 0.18)',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255, 255, 255, 0.14)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '999px',
                padding: '0.65rem 1rem',
                fontSize: '0.9rem',
                fontWeight: '700',
                letterSpacing: '0.02em',
              }}
            >
              ✨ AI-powered interview experience
            </span>

            <h2
              style={{
                marginTop: '1.8rem',
                fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
                lineHeight: '1.05',
                fontWeight: '800',
              }}
            >
              A smarter way to practice coding interviews.
            </h2>

            <p
              style={{
                marginTop: '1.2rem',
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                lineHeight: '1.8',
                maxWidth: '520px',
              }}
            >
              Learn faster, stay focused, and build confidence with every question.
            </p>

            <div
              className="typewriter"
              style={{
                marginTop: '2rem',
                padding: '1.4rem 1.2rem',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
                minHeight: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.05rem',
                fontWeight: '600',
                lineHeight: '1.5',
                letterSpacing: '0.01em',
              }}
            >
              <span>{displayText}</span>
              <span className="typewriter-cursor" style={{ marginLeft: '0.5rem' }}>|</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
              {[
                'Instant coding response save',
                'Progress tracking for every question',
                'Clean, professional interview UI',
                'Performance summary after submission',
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '1rem',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '18px',
                    padding: '1rem 1.2rem',
                  }}
                >
                  <div
                    style={{
                      width: '2.7rem',
                      height: '2.7rem',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.18)',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: '1rem',
                      color: 'white',
                    }}
                  >
                    {index + 1}
                  </div>
                  <span style={{ color: 'rgba(255, 255, 255, 0.94)', fontWeight: '600' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ LOGIN CARD — RIGHT SIDE */}
        <div
          className="login-card"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            background: colors.surface,
            borderRadius: '24px',
            boxShadow: '0 30px 90px rgba(15, 23, 42, 0.12)',
            border: `1px solid ${colors.surface === '#f8fafc' ? 'rgba(102, 126, 234, 0.08)' : 'rgba(102, 126, 234, 0.14)'}`,
            padding: 'clamp(2rem, 5vw, 3rem)',
            animation: 'fadeIn 0.8s ease',
            overflow: 'hidden',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                marginBottom: '1rem',
                animation: 'float 4s ease-in-out infinite',
              }}
            >
              🔐
            </div>
            <h1
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2rem)',
                color: colors.text,
                fontWeight: '700',
                marginBottom: '0.5rem',
              }}
            >
              Welcome Back
            </h1>
            <p
              style={{
                color: colors.textSecondary,
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                lineHeight: '1.6',
              }}
            >
              Sign in to enter the AI interview room and showcase your skills.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="username"
                style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.5rem',
                }}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusedField('username')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter Username"
                style={inputStyle(focusedField === 'username')}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.5rem',
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter Password"
                style={inputStyle(focusedField === 'password')}
              />
            </div>

            {error && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#dc2626',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  animation: 'slideInLeft 0.4s ease',
                }}
              >
                ❌ {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 14px 30px rgba(102, 126, 234, 0.28)',
                marginTop: '1rem',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 18px 40px rgba(102, 126, 234, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 14px 30px rgba(102, 126, 234, 0.28)';
              }}
            >
              🎯 Sign In & Start Interview
            </button>
          </form>

          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${colors.textSecondary}20`,
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '1.85rem',
                color: colors.textSecondary,
                lineHeight: '1.6',
                margin: '0.5rem 0',
              }}
            >
              <strong>Guest Credentials:</strong>
            </p>
            <p
              style={{
                fontSize: '1.00rem',
                color: colors.textSecondary,
                margin: '0.3rem 0',
                fontWeight: '600',
              }}
            >
              Username: <strong>arnavk</strong>
            </p>
            <p
              style={{
                fontSize: '1.00rem',
                color: colors.textSecondary,
                margin: '0.3rem 0',
                fontWeight: '600',
              }}
            >
              Password: <strong>1234</strong>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}