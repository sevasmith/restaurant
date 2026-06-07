import { createFileRoute } from '@tanstack/react-router';
import { Home } from '../../../../pages/Admin/Home';

export const Route = createFileRoute('/_authenticated/admin/home')({
  component: Home,
});
