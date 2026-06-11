import { createFileRoute } from '@tanstack/react-router';
import { Analytics } from '../../../../pages/admin/ui/Analytics';

export const Route = createFileRoute('/_authenticated/admin/analytics')({
  component: Analytics,
});
