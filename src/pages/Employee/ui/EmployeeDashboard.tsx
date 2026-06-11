import { EmpolyeeSidebar } from '../../../widgets/employees-sidebar/ui/EmployeeSidebar';
import { BaseDashboard } from '../../../widgets/BaseDashboard';

export const EmployeeDashboard = () => {
  return <BaseDashboard sidebar={<EmpolyeeSidebar />} />;
};
