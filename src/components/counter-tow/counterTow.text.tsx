import '@testing-library/jest-dom';
import { render , screen } from "@testing-library/react";
import { CounterTwo } from "./counterTow";

describe('testing counter tow ', () => {
  
  test('should component have heading element', () => {
    render(<CounterTwo count={0} />)
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('Counter Two6');
  });

})