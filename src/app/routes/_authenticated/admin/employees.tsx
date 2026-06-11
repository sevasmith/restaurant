import { createFileRoute } from '@tanstack/react-router';
import { Employees } from '../../../../pages/admin/ui/Employees';

export const Route = createFileRoute('/_authenticated/admin/employees')({
  component: Employees,
});
