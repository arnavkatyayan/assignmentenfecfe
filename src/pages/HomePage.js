import React from 'react';
import StartScreen from '../components/StartScreen';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const { colors } = useTheme();

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
      <StartScreen />
    </main>
  );
};

export default HomePage;
