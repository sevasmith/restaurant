import { createFileRoute } from '@tanstack/react-router';
import { AdminDashboard } from '../../../pages/admin/ui/AdminDashboard';
import { ProtectedAdminRoute } from '../../../shared/ui/ProtectedAdminRoute';

export const Route = createFileRoute('/_authenticated/admin')({
  component: () => (
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  ),
});
