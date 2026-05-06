import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InterviewVault', () => {
  render(<App />);
  const titleElement = screen.getByText(/InterviewVault/i);
  expect(titleElement).toBeInTheDocument();
});
