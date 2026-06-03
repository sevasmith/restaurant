import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
