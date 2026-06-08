import { createFileRoute } from '@tanstack/react-router';
import { EmployeeDashboard } from '../../../pages/Employee/EmployeeDashboard';
import { ProtectedEmployeeRoute } from '../../../shared/ui/ProtectedEmployeeRoute';

export const Route = createFileRoute('/_authenticated/employee')({
  component: () => (
    <ProtectedEmployeeRoute>
      <EmployeeDashboard />
    </ProtectedEmployeeRoute>
  ),
});
