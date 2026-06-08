import { createFileRoute } from '@tanstack/react-router';
import { Statistics } from '../../../../pages/Employee/Statistics';

export const Route = createFileRoute('/_authenticated/employee/statistics')({
  component: Statistics,
});
