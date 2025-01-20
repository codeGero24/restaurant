import { routes } from '@router/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import QueryProvider from '@providers/QueryProvider';

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </>
  );
}
