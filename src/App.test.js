import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name on screen', () => {
  render(<App />);
  const textElement = screen.getByText(/Dylan Yates/i);
  expect(textElement).toBeInTheDocument();
});
