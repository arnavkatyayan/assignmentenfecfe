import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

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
        padding: '2rem',
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

      {/* Main login card */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '450px',
          width: '100%',
          background: colors.surface,
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: `1px solid ${colors.surface === '#f8fafc' ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.15)'}`,
          padding: '3rem 2.5rem',
          animation: 'fadeIn 0.8s ease',
        }}
      >
        {/* Header with emoji */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            animation: 'float 4s ease-in-out infinite'
          }}>
            🔐
          </div>
          <h1 style={{
            fontSize: '2rem',
            color: colors.text,
            fontWeight: '700',
            marginBottom: '0.5rem',
          }}>
            Welcome Back
          </h1>
          <p style={{
            color: colors.textSecondary,
            fontSize: '0.95rem',
            lineHeight: '1.6',
          }}>
            Sign in to start your AI interview challenge
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Username field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="username" style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: '600',
              color: colors.text,
              marginBottom: '0.5rem',
            }}>
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

          {/* Password field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="password" style={{
              display: 'block',
              fontSize: '0.95rem',
              fontWeight: '600',
              color: colors.text,
              marginBottom: '0.5rem',
            }}>
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
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#dc2626',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '500',
              animation: 'slideInLeft 0.4s ease',
            }}>
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
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
              marginTop: '1rem',
              transform: 'translateY(0)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
            }}
          >
            🎯 Sign In & Start Interview
          </button>
        </form>

        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: `1px solid ${colors.textSecondary}20`,
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '0.85rem',
            color: colors.textSecondary,
            lineHeight: '1.6',
            margin: '0.5rem 0',
          }}>
            <strong>Demo Credentials:</strong>
          </p>
          <p style={{
            fontSize: '0.85rem',
            color: colors.textSecondary,
            margin: '0.3rem 0',
          }}>
            Username: <strong>arnavk</strong>
          </p>
          <p style={{
            fontSize: '0.85rem',
            color: colors.textSecondary,
            margin: '0.3rem 0',
          }}>
            Password: <strong>1234</strong>
          </p>
        </div>
      </div>
    </div>
  );
}