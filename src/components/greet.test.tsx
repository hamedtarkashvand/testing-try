import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('greet', () => {
  test('test components', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello greet');
    expect(textElement).toBeInTheDocument();
  });


});

describe('Nested', () => {
    test('render whit name ', () => {
      render(<Greet name='maryam' />);

      const textElement = screen.getByText('Hello maryam');
      expect(textElement).toBeInTheDocument();
    });
});

