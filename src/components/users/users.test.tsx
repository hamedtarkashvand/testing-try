import { render, screen, waitFor } from '@testing-library/react';
import { Users } from './users';
import { server } from '../../../mocks/services';
import { HttpResponse, http } from 'msw';

describe('testing mock services', () => {
  test('render correctly ', () => {
    render(<Users />);
    const headingElement = screen.getByText('Users');
    expect(headingElement).toBeInTheDocument();
  });

  test('render users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    screen.debug();

    expect(users).toHaveLength(2);
  });

  test('should show error messages moment service error', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json({ error: 'Not Authorized' }, { status: 401 });
      })
    );
    render(<Users />);
      const errorMessage = await screen.findByText('Error fetching users ');
      await waitFor(()=> expect(errorMessage).toBeInTheDocument())
   
  });
});
