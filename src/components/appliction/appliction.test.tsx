import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Application } from './appliction';

describe('Appliction', () => {
  test('render elements', () => {
    render(<Application />);
    const headingElement = screen.getByRole('heading', {
     level:1
    });
    expect(headingElement).toBeInTheDocument()

    const headingElement2 = screen.getByRole('heading', {
      level:2
    });
    expect(headingElement2).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
     expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', {
      selector:'input'
    }); 

    expect(nameElement2).toBeInTheDocument();
    
    const nameElementValue = screen.getByDisplayValue('hamed');
    expect(nameElementValue).toBeInTheDocument()



    const ariaInput = screen.getByRole('textbox', {
        name: 'Bio',
      });
    expect(ariaInput).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();
      
    const termsElement = screen.getByRole('checkbox');
      expect(termsElement).toBeInTheDocument();
      
    const submitButton = screen.getByRole("button");
      expect(submitButton).toBeInTheDocument();

  });
});
