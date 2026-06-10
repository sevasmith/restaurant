import { createFileRoute, Outlet } from '@tanstack/react-router';
import { ProtectedRoute } from '../../shared/ui/ProtectedRoute';

type AuthenticatedSearch = {
  chat?: 'open';
};

export const Route = createFileRoute('/_authenticated')({
  validateSearch: (search: Record<string, unknown>): AuthenticatedSearch => {
    return {
      chat: search.chat === 'open' ? 'open' : undefined,
    };
  },
  component: () => (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  ),
});
