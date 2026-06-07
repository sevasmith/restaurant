import { Button, Stack } from '@mui/material';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { useUserContext } from '../../entities/user/model/context';
import { AdminSidebar } from '../../widgets/AdminSidebar';
import { Header } from '../../widgets/Header';

export const AdminDashboard = () => {
  const { currentUser, setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  if (currentUser?.role !== 'admin') {
    navigate({ to: '/employee' });
  }

  const handleLogOut = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate({ to: '/login' });
  };

  return (
    <Stack direction={'row'} sx={{ flex: 1, overflow: 'hidden' }}>
      <AdminSidebar />
      <Stack sx={{ flexGrow: 1, padding: 3 }}>
        <Header></Header>
        <Outlet />
        <Button onClick={handleLogOut}>Log out for Employee</Button>
      </Stack>
    </Stack>
  );
};
