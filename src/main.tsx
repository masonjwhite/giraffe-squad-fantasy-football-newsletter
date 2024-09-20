import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Root from './routes/root';
import Week1 from './routes/weeks/week1';
import Week2 from './routes/weeks/week2';
import History from './routes/history/history';
import NotFound from './routes/notFound/notFound';
// import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'weeks/1',
        element: <Week1 />,
      },
      {
        path: 'weeks/2',
        element: <Week2 />,
      },
      {
        path: 'history',
        element: <History />,
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider defaultColorScheme="dark">
    <RouterProvider router={router} />
  </MantineProvider>
);
