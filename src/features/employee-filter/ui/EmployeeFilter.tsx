import { MenuItem, Select, Stack, SvgIcon, Typography } from '@mui/material';
import FilterIcon from '../../../assets/icons/filter.svg?react';
import type { Employee } from '../../../entities/employee/model/types';
import type { Table } from '@tanstack/react-table';

export const EmployeeFilter = ({ table }: { table: Table<Employee> }) => {
  return (
    <Select
      displayEmpty
      value={(table.getColumn('shift')?.getFilterValue() as string) ?? ''}
      onChange={(e) => table.getColumn('shift')?.setFilterValue(e.target.value || undefined)}
      size="small"
      renderValue={(selected) => (
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'start' }}>
          <SvgIcon component={FilterIcon} inheritViewBox />
          <Typography variant="body2" sx={{ fontSize: 16, color: 'primary.dark' }}>
            Filters{selected ? `: Shift ${selected}` : ''}
          </Typography>
        </Stack>
      )}
      sx={{
        backgroundColor: 'grey.400',
        borderRadius: 1,
        color: 'primary.dark',
        height: 36,
        width: 180,
        '& .MuiSelect-select': {
          paddingLeft: 1,
        },
        '& fieldset': { border: 'none' },
      }}
    >
      <MenuItem value="">All Shifts</MenuItem>
      <MenuItem value="A">Shift A</MenuItem>
      <MenuItem value="B">Shift B</MenuItem>
    </Select>
  );
};
