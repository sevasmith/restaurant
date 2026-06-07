import { createFileRoute } from '@tanstack/react-router';
import { Analytics } from '../../../../pages/Admin/Analytics';

export const Route = createFileRoute('/_authenticated/admin/analytics')({
  component: Analytics,
});
