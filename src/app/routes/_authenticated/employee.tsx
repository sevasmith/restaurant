import { createFileRoute } from '@tanstack/react-router';
import { EmployeeDashboard } from '../../../pages/employee/ui/EmployeeDashboard';
import { ProtectedEmployeeRoute } from '../../../shared/ui/ProtectedEmployeeRoute';

export const Route = createFileRoute('/_authenticated/employee')({
  component: () => (
    <ProtectedEmployeeRoute>
      <EmployeeDashboard />
    </ProtectedEmployeeRoute>
  ),
});
