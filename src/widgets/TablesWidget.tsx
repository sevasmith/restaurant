import { Container, Grid } from '@mui/material';
import { TableCard } from '../shared/ui/TableCard';

const TABLES_DATA = [
  { id: '1', status: 'Occ', time: '', padding: '32px' },
  { id: '2', status: 'Res', time: '22:30', padding: '32px' },
  { id: '3', status: 'Occ', time: '', padding: '32px' },
  { id: '4', status: 'Free', time: '', padding: '32px' },
  { id: '5', status: 'Free', time: '', padding: '32px' },
  { id: 'A2', status: 'Free', time: '', padding: '0 0 64px 64px' },
  { id: '6', status: 'Occ', time: '', padding: '32px' },
  { id: '7', status: 'Occ', time: '', padding: '32px' },
  { id: '8', status: 'Free', time: '', padding: '32px' },
  { id: '9', status: 'Free', time: '', padding: '32px' },
  { id: '10', status: 'Free', time: '', padding: '32px' },
  { id: '11', status: 'Res', time: '18:00', padding: '32px' },
  { id: '12', status: 'Res', time: '18:00', padding: '32px' },
  { id: '13', status: 'Free', time: '', padding: '32px' },
  { id: '14', status: 'Free', time: '', padding: '32px' },
  { id: '15', status: 'Free', time: '', padding: '32px' },
  { id: 'A1', status: 'Res', time: '21:00', padding: '64px 0 0 64px' },
];

export const TablesWidget = () => {
  return (
    <Container
      sx={{ flex: '1 1 auto', backgroundColor: 'primary.light', padding: 2, borderRadius: '8px' }}
    >
      <Grid container columns={12}>
        {TABLES_DATA.map((item) => (
          <Grid key={item.id} size={2} offset={item.id === '6' ? 1 : 0}>
            <TableCard card={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
