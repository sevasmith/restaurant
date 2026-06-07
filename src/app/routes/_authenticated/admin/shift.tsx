import { createFileRoute } from '@tanstack/react-router';
import { Shift } from '../../../../pages/Admin/Shift';

export const Route = createFileRoute('/_authenticated/admin/shift')({
  component: Shift,
});
