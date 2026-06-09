import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/employee/')({
  component: () => <Navigate to="/employee/tables" />,
});
