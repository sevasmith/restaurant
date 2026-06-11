import { alpha, Button, Container, Stack, SvgIcon } from '@mui/material';
import { Link as RouterLink, useLocation } from '@tanstack/react-router';
import RestaurantIcon from '../assets/icons/restaurant-white.svg?react';
import TablesIcon from '../assets/icons/tables.svg?react';
import OrdersIcon from '../assets/icons/orders.svg?react';
import StatisticsIcon from '../assets/icons/statistics.svg?react';

const SIDEBAR_ITEMS = [
  { id: 1, label: 'Tables', icon: TablesIcon, link: '/employee/tables' },
  { id: 2, label: 'Orders', icon: OrdersIcon, link: '/employee/orders' },
  { id: 3, label: 'Statistics', icon: StatisticsIcon, link: '/employee/statistics' },
];

interface EmployeeSidebarProps {
  onClose?: () => void;
}

export const EmpolyeeSidebar = ({ onClose }: EmployeeSidebarProps) => {
  const location = useLocation();

  return (
    <Stack
      component={'aside'}
      sx={{
        width: 260,
        height: '100%',
        padding: 3,
        backgroundColor: 'primary.dark',
      }}
    >
      <Container
        sx={{
          borderBottom: '1px solid',
          borderColor: (theme) => alpha(theme.palette.common.white, 0.5),
          paddingBottom: 2.5,
          height: 'fit-content',
        }}
      >
        <SvgIcon
          component={RestaurantIcon}
          inheritViewBox
          sx={{
            width: '158px',
            height: '14px',
            '& path': {
              fill: 'common.white',
            },
          }}
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
              onClick={onClose}
              sx={{
                padding: 2,
                paddingLeft: 2.5,
                backgroundColor: isActive ? 'common.white' : 'primary.main',
                color: isActive ? 'primary.main' : 'common.white',
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
