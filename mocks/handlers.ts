import { http, HttpResponse  } from 'msw';

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    return  HttpResponse.json(
      [
        {
          name: 'marayam',
        },
        {
          name: 'hamed',
        }
      ]
    );
  }),
];
