import { Stack, Typography } from '@mui/material';
import { Card } from '../../shared/ui/Card';
import { TablesWidget } from '../../widgets/TablesWidget';

const TABLES_DATA = [
  { id: 1, label: 'Free', number: 13 },
  { id: 2, label: 'Occupied', number: 4 },
  { id: 3, label: 'Reserved', number: 4 },
];

export const Tables = () => {
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
        Tables
      </Typography>
      <Stack direction={'row'} spacing={1} sx={{ width: '100%' }}>
        {TABLES_DATA.map((item) => (
          <Card key={item.id} label={item.label} number={item.number} buttonText="Show" />
        ))}
      </Stack>
      <TablesWidget />
    </Stack>
  );
};
