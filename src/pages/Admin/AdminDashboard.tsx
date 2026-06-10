import { Stack } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { AdminSidebar } from '../../widgets/AdminSidebar';
import { Header } from '../../widgets/Header';
import { ChatButton } from '../../shared/ui/ChatButton';
import { ChatWidget } from '../../widgets/ChatWidget';

export const AdminDashboard = () => {
  return (
    <Stack direction={'row'} sx={{ flex: 1, overflow: 'hidden' }}>
      <AdminSidebar />
      <Stack sx={{ flexGrow: 1, padding: 3 }}>
        <Header></Header>
        <Outlet />
        <ChatButton />
        <ChatWidget />
      </Stack>
    </Stack>
  );
};
