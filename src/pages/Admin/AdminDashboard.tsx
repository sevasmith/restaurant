import { BaseDashboard } from '../../widgets/BaseDashboard';
import { AdminSidebar } from '../../widgets/AdminSidebar';

export const AdminDashboard = () => {
  return <BaseDashboard sidebar={<AdminSidebar />} />;
};
