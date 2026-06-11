import { BaseDashboard } from '../../../widgets/base-dashboard/ui/BaseDashboard';
import { EmpolyeeSidebar } from '../../../widgets/employees-sidebar/ui/EmployeeSidebar';

export const EmployeeDashboard = () => {
  return <BaseDashboard sidebar={<EmpolyeeSidebar />} />;
};
