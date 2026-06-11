import { Stack, Typography } from '@mui/material';
import { Card } from '../../../shared/ui/Card';
import { EmployeesWidget } from '../../../widgets/EmployeesWidget';

const EMPLOYEES_DATA = [
  { id: 1, label: 'All employees', number: 55 },
  { id: 2, label: 'On shift', number: 31 },
  { id: 3, label: 'Idle', number: 24 },
];

export const Employees = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Typography
        variant="h5"
        component={'h2'}
        sx={{ fontWeight: 500, px: { xs: 0, sm: 1 }, pt: 1 }}
      >
        Employees
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ width: '100%' }}>
        {EMPLOYEES_DATA.map((item) => (
          <Card key={item.id} label={item.label} number={item.number} buttonText="View" />
        ))}
      </Stack>
      <EmployeesWidget></EmployeesWidget>
    </Stack>
  );
};
