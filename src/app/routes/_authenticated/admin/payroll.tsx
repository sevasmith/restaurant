import { createFileRoute } from '@tanstack/react-router';
import { Payroll } from '../../../../pages/Admin/Payroll';

export const Route = createFileRoute('/_authenticated/admin/payroll')({
  component: Payroll,
});
