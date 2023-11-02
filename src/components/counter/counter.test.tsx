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

  test('render a count of 10 after click set button', async () => {
    userEvent.setup();
    render(<Counter />);

    const inputElement = screen.getByRole('spinbutton');
    await userEvent.type(inputElement, '10');
    expect(inputElement).toHaveValue(10);

    const inputButton = screen.getByRole('button', {
      name: 'Set',
    });
    const elementHeader = screen.getByRole('heading');
    await userEvent.click(inputButton);
    screen.debug();

    expect(elementHeader).toHaveTextContent('10');
  });

  test('elements are Focus in the right order', async () => {
    userEvent.setup();
    render(<Counter />);

    const inputElement = screen.getByRole('spinbutton');
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const setButton = screen.getByRole('button', { name: 'Set' });

    await userEvent.tab();
    expect(incrementButton).toHaveFocus();

    await userEvent.tab();
    expect(inputElement).toHaveFocus();
    
    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
