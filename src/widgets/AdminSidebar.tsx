import { alpha, Button, Container, Stack, SvgIcon } from '@mui/material';
import { Link as RouterLink, useLocation } from '@tanstack/react-router';
import RestaurantIcon from '../assets/icons/restaurant-black.svg?react';
import HomeIcon from '../assets/icons/home.svg?react';
import ShiftIcon from '../assets/icons/shift.svg?react';
import PayrollIcon from '../assets/icons/payroll.svg?react';
import TasksIcon from '../assets/icons/tasks.svg?react';
import AnalyticsIcon from '../assets/icons/analytics.svg?react';
import EmployeesIcon from '../assets/icons/employees.svg?react';
import VacationIcon from '../assets/icons/vacation.svg?react';
import SickDaysIcon from '../assets/icons/sick-days.svg?react';

const SIDEBAR_ITEMS = [
  { id: 1, label: 'Home', icon: HomeIcon, link: '/admin/home' },
  { id: 2, label: 'Shift', icon: ShiftIcon, link: '/admin/shift' },
  { id: 3, label: 'Payroll', icon: PayrollIcon, link: '/admin/payroll' },
  { id: 4, label: 'Tasks', icon: TasksIcon, link: '/admin/tasks' },
  { id: 5, label: 'Analytics', icon: AnalyticsIcon, link: '/admin/analytics' },
  { id: 6, label: 'Employees', icon: EmployeesIcon, link: '/admin/employees' },
  { id: 7, label: 'Vacation', icon: VacationIcon, link: '/admin/vacation' },
  { id: 8, label: 'Sick days', icon: SickDaysIcon, link: '/admin/sickdays' },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <Stack
      component={'aside'}
      sx={{ minWidth: 260, height: '100%', padding: 3, backgroundColor: 'primary.light' }}
    >
      <Container
        sx={{
          borderBottom: '1px solid',
          borderColor: (theme) => alpha(theme.palette.common.black, 0.5),
          paddingBottom: 2.5,
          height: 'fit-content',
        }}
      >
        <SvgIcon
          component={RestaurantIcon}
          inheritViewBox
          sx={{ width: '158px', height: '14px' }}
        />
      </Container>
      <Stack spacing={1} sx={{ paddingTop: 3 }}>
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = location.pathname === item.link;

          return (
            <Button
              key={item.id}
              size="large"
              component={RouterLink}
              to={item.link}
              search={true}
              startIcon={<item.icon />}
              sx={{
                padding: 2,
                paddingLeft: 2.5,
                backgroundColor: isActive ? 'primary.dark' : 'common.white',
                color: isActive ? 'common.white' : 'common.black',
                textTransform: 'none',
                justifyContent: 'start',
                alignItems: 'center',
                fontSize: '16px',
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};
