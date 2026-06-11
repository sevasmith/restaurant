import { createFileRoute } from '@tanstack/react-router';
import { Vacation } from '../../../../pages/admin/ui/Vacation';

export const Route = createFileRoute('/_authenticated/admin/vacation')({
  component: Vacation,
});
