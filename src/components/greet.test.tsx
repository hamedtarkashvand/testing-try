import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('test greet components', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Greet render whit name', () => {
  render(<Greet name='maryam' />);

  const textElement = screen.getByText('Hello maryam');
  expect(textElement).toBeInTheDocument();
});
