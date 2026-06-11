import { createFileRoute } from '@tanstack/react-router';
import { Payroll } from '../../../../pages/admin/ui/Payroll';

export const Route = createFileRoute('/_authenticated/admin/payroll')({
  component: Payroll,
});
