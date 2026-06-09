import { createFileRoute } from '@tanstack/react-router';
import { Orders } from '../../../../pages/Employee/Orders';

export const Route = createFileRoute('/_authenticated/employee/orders')({
  component: Orders,
});
