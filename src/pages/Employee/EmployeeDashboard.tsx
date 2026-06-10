import { EmpolyeeSidebar } from '../../widgets/EmployeeSidebar';
import { BaseDashboard } from '../../widgets/BaseDashboard';

export const EmployeeDashboard = () => {
  return <BaseDashboard sidebar={<EmpolyeeSidebar />} />;
};
