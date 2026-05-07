import React, { createContext, useState, useCallback, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
      try {
        return JSON.parse(savedTheme);
      } catch {
        return false; 
      }
    }
    return false; 
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const theme = {
    isDarkMode,
    colors: isDarkMode ? {
      background: '#1a1a1a',
      surface: '#2d2d2d',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      border: '#404040',
      primary: '#667eea',
      secondary: '#764ba2',
      success: '#28a745',
    } : {
      background: '#f5f7fa',
      surface: '#ffffff',
      text: '#333333',
      textSecondary: '#666666',
      border: '#ddd',
      primary: '#667eea',
      secondary: '#764ba2',
      success: '#28a745',
    }
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
