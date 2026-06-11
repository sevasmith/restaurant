import { AdminSidebar } from '../../../widgets/admin-sidebar/ui/AdminSidebar';
import { BaseDashboard } from '../../../widgets/base-dashboard/ui/BaseDashboard';

export const AdminDashboard = () => {
  return <BaseDashboard sidebar={<AdminSidebar />} />;
};
