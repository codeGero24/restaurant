import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from '@router/routes';

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
