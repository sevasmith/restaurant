import { createRootRoute, Outlet, retainSearchParams } from '@tanstack/react-router';

type RootSearch = {
  chat?: 'open';
};

export const Route = createRootRoute({
  validateSearch: (search: Record<string, unknown>): RootSearch => {
    return {
      chat: search.chat === 'open' ? 'open' : undefined,
    };
  },
  search: {
    middlewares: [retainSearchParams(['chat'])],
  },
  component: () => <Outlet />,
});
