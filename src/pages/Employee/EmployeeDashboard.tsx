import { Stack } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { Header } from '../../widgets/Header';
import { EmpolyeeSidebar } from '../../widgets/EmployeeSidebar';

export const EmployeeDashboard = () => {
  return (
    <Stack direction={'row'} sx={{ flex: 1, overflow: 'hidden' }}>
      <EmpolyeeSidebar />
      <Stack spacing={1} sx={{ flex: '1 1 auto', padding: 3 }}>
        <Header></Header>
        <Outlet />
      </Stack>
    </Stack>
  );
};
