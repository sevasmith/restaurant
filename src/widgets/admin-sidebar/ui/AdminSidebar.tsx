import { alpha, Button, Container, Stack, SvgIcon } from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';
import RestaurantIcon from '../../../assets/icons/restaurant-black.svg?react';
import EmployeesIcon from '../../../assets/icons/employees.svg?react';

const SIDEBAR_ITEMS = [
  { id: 1, label: 'Employees', icon: EmployeesIcon, link: '/admin/employees' },
];

interface AdminSidebarProps {
  onClose?: () => void;
}

export const AdminSidebar = ({ onClose }: AdminSidebarProps) => {
  return (
    <Stack
      component={'aside'}
      sx={{ width: 260, height: '100%', padding: 3, backgroundColor: 'primary.light' }}
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
          return (
            <Button
              key={item.id}
              size="large"
              component={RouterLink}
              to={item.link}
              search={true}
              startIcon={<item.icon />}
              onClick={onClose}
              sx={{
                padding: 2,
                paddingLeft: 2.5,
                backgroundColor: 'primary.dark',
                color: 'common.white',
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
