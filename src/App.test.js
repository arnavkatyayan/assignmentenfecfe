import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AI interview platform', () => {
  render(<App />);
  const titleElement = screen.getByText(/AI Interview Platform/i);
  expect(titleElement).toBeInTheDocument();
});
