import { createFileRoute, Outlet } from '@tanstack/react-router';
import { ProtectedRoute } from '../../shared/ui/ProtectedRoute';

export const Route = createFileRoute('/_authenticated')({
  component: () => (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  ),
});
