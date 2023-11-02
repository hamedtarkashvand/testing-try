import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

describe('testing event click', () => {
  test('trigger button', () => {
    render(<Counter />);
    const elementHeader = screen.getByRole('heading');
    expect(elementHeader).toBeInTheDocument();

    const elementButton = screen.getAllByRole('button');
    expect(elementButton).toHaveLength(elementButton.length);
  });

  test('renders count of 0 ', () => {
    render(<Counter />);
    const elementHeader = screen.getByRole('heading');
    expect(elementHeader).toHaveTextContent('0');
  });

  test('render is count of 0 after click the increment button', async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    screen.debug();
    await userEvent.click(incrementButton);
    screen.debug();

    const elementHeader = screen.getByRole('heading');
    expect(elementHeader).toHaveTextContent('1');
  });
    
    test('render is count of 2 after dabbleClick the increment button', async () => {
      userEvent.setup();
      render(<Counter />);
      const incrementButton = screen.getByRole('button', {
        name: 'Increment',
      });
      screen.debug();
      await userEvent.dblClick(incrementButton);
    //   await userEvent.click(incrementButton);
      screen.debug();

      const elementHeader = screen.getByRole('heading');
      expect(elementHeader).toHaveTextContent('2');
    });
    
});
