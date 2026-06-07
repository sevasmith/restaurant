import { createFileRoute } from '@tanstack/react-router';
import { Tasks } from '../../../../pages/Admin/Tasks';

export const Route = createFileRoute('/_authenticated/admin/tasks')({
  component: Tasks,
});
