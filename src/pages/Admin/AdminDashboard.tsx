import { Stack } from '@mui/material';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { useUserContext } from '../../entities/user/model/context';
import { AdminSidebar } from '../../widgets/AdminSidebar';
import { Header } from '../../widgets/Header';

export const AdminDashboard = () => {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  if (currentUser?.role !== 'admin') {
    navigate({ to: '/employee' });
  }
  return (
    <Stack direction={'row'} sx={{ flex: 1, overflow: 'hidden' }}>
      <AdminSidebar />
      <Stack sx={{ flexGrow: 1, padding: 3 }}>
        <Header></Header>
        <Outlet />
      </Stack>
    </Stack>
  );
};
