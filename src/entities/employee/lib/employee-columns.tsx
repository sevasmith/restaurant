import { Avatar, Checkbox, IconButton, Stack, Typography } from '@mui/material';
import { createColumnHelper } from '@tanstack/react-table';
import type { Employee } from '../model/types';
import AddIcon from '@mui/icons-material/Add';

const columnHelper = createColumnHelper<Employee>();

export const columns = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        size="small"
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
        sx={{ color: 'grey.200' }}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        size="small"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
        sx={{ color: 'grey.200' }}
      />
    ),
  }),
  columnHelper.accessor('name', {
    header: 'Employee',
    cell: (info) => {
      const { name, email, avatarUrl } = info.row.original;

      return (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Avatar src={avatarUrl} alt={name} sx={{ width: 40, height: 40 }}></Avatar>
          <Stack sx={{ justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ fontSize: 18, color: 'primary.dark' }}>
              {name}
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: 14, color: 'primary.dark', opacity: 0.5 }} // Matches the subtle grey in the design
            >
              {email}
            </Typography>
          </Stack>
        </Stack>
      );
    },
  }),
  columnHelper.accessor('shift', {
    header: 'Shift',
    cell: (info) => {
      const shiftValue = info.getValue();
      const isShiftA = shiftValue === 'A';

      return (
        <Avatar
          sx={{
            bgcolor: isShiftA ? 'warning.main' : 'info.main',
            width: 30,
            height: 30,
            fontSize: '14px',
            fontWeight: 600,
            color: 'common.white',
          }}
        >
          {shiftValue}
        </Avatar>
      );
    },
  }),
  columnHelper.accessor('employmentDate', {
    header: 'Employment date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('billingDate', {
    header: 'Billing date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: 'bonus',
    header: 'Bonus',
    cell: () => (
      <IconButton
        size="small"
        sx={{
          backgroundColor: 'grey.100',
          color: 'primary.dark',
          width: 30,
          height: 30,
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        <AddIcon
          sx={{
            fontSize: 16,
            stroke: 'currentColor',
            strokeWidth: 1.5,
          }}
        />
      </IconButton>
    ),
  }),
];
