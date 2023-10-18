import '@testing-library/jest-dom';
import { render , screen } from '@testing-library/react';
import App from '../App';
test('first test', () => {
  expect(true).toBe(true);
});

test('render Components App', () => {
  render(<App />);
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
});
