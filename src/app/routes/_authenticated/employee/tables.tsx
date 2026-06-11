import { createFileRoute } from '@tanstack/react-router';
import { Tables } from '../../../../pages/employee/ui/Tables';

export const Route = createFileRoute('/_authenticated/employee/tables')({
  component: Tables,
});
