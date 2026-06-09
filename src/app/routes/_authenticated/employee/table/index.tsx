import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/employee/table/')({
  component: () => <Navigate to="/employee/table/1" />,
});
