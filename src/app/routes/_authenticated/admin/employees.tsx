import { createFileRoute } from '@tanstack/react-router';
import { Employees } from '../../../../pages/Admin/Employees';

export const Route = createFileRoute('/_authenticated/admin/employees')({
  component: Employees,
});
