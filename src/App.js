import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import './App.css';
import LoginPage from './pages/LoginPage';
const AppContent = () => {
  const { colors, toggleTheme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: colors.background,
        color: colors.text,
      }}
    >
      <Header onThemeToggle={toggleTheme} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
