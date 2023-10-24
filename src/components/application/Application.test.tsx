import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import { Application } from './application';

describe('application', () => {
    test('renders', () => {
        render(<Application />);
        const element = screen.getByRole('textbox'); 
        expect(element).toBeInTheDocument();
    })

})