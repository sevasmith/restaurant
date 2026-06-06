import { createFileRoute } from '@tanstack/react-router';
import { AdminDashboard } from '../../../pages/Admin/AdminDashboard';

export const Route = createFileRoute('/_authenticated/admin')({
  component: AdminDashboard,
});
