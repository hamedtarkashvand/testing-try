import '@testing-library/jest-dom';
import MuiTheme from './muiTheme';
import { render, screen } from '../../test-utils';

describe('muiMode', () => {
  test('render test correctly', () => {
      render(<MuiTheme />);
    const headerElement = screen.getByRole('heading');
    screen.debug();
    expect(headerElement).toHaveTextContent('dark mode')
  });
});
