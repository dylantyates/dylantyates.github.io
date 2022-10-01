/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import SlotGame from './SlotGame';

test('renders learn react link', () => {
  render(<SlotGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
