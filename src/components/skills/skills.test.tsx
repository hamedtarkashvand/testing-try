import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['js','next','css'];

  test(' corrects', () => {
    render(<Skills skills={skills} />);
      const ulElement = screen.getByRole('list');
      expect(ulElement).toBeInTheDocument()
  });

  test('list skills ', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getAllByRole('listitem');
    expect(listElement).toHaveLength(listElement.length);
  });

  test('has button Login ', () => {
    render(<Skills skills={skills} />)
    const buttonElement = screen.getByRole('button', {
      name: 'Login',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('not render  button Start learning', () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.queryByRole('button', {
      name: 'Start learning',

    })
    expect(buttonElement).not.toBeInTheDocument();
  });


  test('async ', async() => {  
    render(<Skills skills={skills} />)
    const buttonElement =  await screen.findByRole('button', {
      name: 'Start learning',
    });
    expect(buttonElement).toBeInTheDocument();
  })

});
