import { Container, Grid } from '@mui/material';
import { TableCard } from '../shared/ui/TableCard';

const TABLES_DATA = [
  { id: '1', status: 'Occ', padding: '32px', link: '/employee/table/1', time: '' },
  { id: '2', status: 'Res', padding: '32px', link: '/employee/table/2', time: '22:30' },
  { id: '3', status: 'Occ', padding: '32px', link: '/employee/table/3', time: '' },
  { id: '4', status: 'Free', padding: '32px', link: '/employee/table/4', time: '' },
  { id: '5', status: 'Free', padding: '32px', link: '/employee/table/5', time: '' },
  { id: 'A2', status: 'Free', padding: '0 0 64px 64px', link: '/employee/table/A2', time: '' },
  { id: '6', status: 'Occ', padding: '32px', link: '/employee/table/6', time: '' },
  { id: '7', status: 'Occ', padding: '32px', link: '/employee/table/7', time: '' },
  { id: '8', status: 'Free', padding: '32px', link: '/employee/table/8', time: '' },
  { id: '9', status: 'Free', padding: '32px', link: '/employee/table/9', time: '' },
  { id: '10', status: 'Free', padding: '32px', link: '/employee/table/10', time: '' },
  { id: '11', status: 'Res', padding: '32px', link: '/employee/table/11', time: '18:00' },
  { id: '12', status: 'Res', padding: '32px', link: '/employee/table/12', time: '18:00' },
  { id: '13', status: 'Free', padding: '32px', link: '/employee/table/13', time: '' },
  { id: '14', status: 'Free', padding: '32px', link: '/employee/table/14', time: '' },
  { id: '15', status: 'Free', padding: '32px', link: '/employee/table/15', time: '' },
  { id: 'A1', status: 'Res', padding: '64px 0 0 64px', link: '/employee/table/A1', time: '21:00' },
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
