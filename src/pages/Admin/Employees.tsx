import { Stack, Typography } from '@mui/material';
import { Card } from '../../shared/ui/Card';
import { EmployeesTableWidget } from '../../widgets/EmployeesTableWidget';

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
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Typography variant="h5" component={'h2'} sx={{ fontWeight: 500, padding: 1 }}>
        Employees
      </Typography>
      <Stack direction={'row'} spacing={1} sx={{ width: '100%' }}>
        {EMPLOYEES_DATA.map((item) => (
          <Card label={item.label} number={item.number} />
        ))}
      </Stack>
      <EmployeesTableWidget></EmployeesTableWidget>
    </Stack>
  );
};
