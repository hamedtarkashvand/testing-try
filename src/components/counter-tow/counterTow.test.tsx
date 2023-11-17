import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CounterTwo } from './counterTow';
import userEvent from '@testing-library/user-event';

describe('testing counter tow ', () => {
  test('should component have heading element whit check content', () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByText('Counter Two');
    expect(headingElement).toBeInTheDocument();
  });

  test('should render tow buttons  Increment and Decrement', async () => {
    userEvent.setup();
    const handleDecrement = jest.fn();
    const handleIncrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    );

    const buttonDecrement = screen.getByRole('button', { name: 'Increment' });
    const buttonIncrement = screen.getByRole('button', { name: 'Decrement' });

    await userEvent.click(buttonDecrement);
    await userEvent.click(buttonIncrement);

    expect(handleDecrement).toHaveBeenCalledTimes(1);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
  }); 
});
