import { createFileRoute } from '@tanstack/react-router';
import { Vacation } from '../../../../pages/Admin/Vacation';

export const Route = createFileRoute('/_authenticated/admin/vacation')({
  component: Vacation,
});
