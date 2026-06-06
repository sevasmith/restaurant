import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import type { Employee } from '../../entities/employee/model/types';
import {
  Avatar,
  Box,
  Checkbox,
  IconButton,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '../../assets/icons/search.svg?react';
import FilterIcon from '../../assets/icons/filter.svg?react';
import { mockEmployees } from '../../entities/employee/mock/mock-employees';
import { useState } from 'react';

const columnHelper = createColumnHelper<Employee>();

const columns = [
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

export const EmployeesTable = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: mockEmployees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <Stack sx={{ backgroundColor: 'primary.light', padding: 2, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Select
          displayEmpty
          value={(table.getColumn('shift')?.getFilterValue() as string) ?? ''}
          onChange={(e) => table.getColumn('shift')?.setFilterValue(e.target.value || undefined)}
          size="small"
          renderValue={(selected) => (
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'start' }}
            >
              <SvgIcon component={FilterIcon} inheritViewBox />
              <Typography variant="body2" sx={{ fontSize: 16, color: 'primary.dark' }}>
                Filters{selected ? `: Shift ${selected}` : ''}
              </Typography>
            </Stack>
          )}
          sx={{
            backgroundColor: 'grey.100',
            borderRadius: 1,
            color: 'primary.dark',
            height: 36,
            width: 180,
            '& .MuiSelect-select': {
              paddingLeft: 1,
            },
            '& fieldset': { borderColor: 'grey.100' },
          }}
        >
          <MenuItem value="">All Shifts</MenuItem>
          <MenuItem value="A">Shift A</MenuItem>
          <MenuItem value="B">Shift B</MenuItem>
        </Select>

        <Stack
          direction={'row'}
          sx={{
            alignItems: 'center',
            backgroundColor: 'common.white',
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'grey.300',
            '&:hover': { borderColor: 'primary.dark' },
          }}
        >
          <TextField
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            size="small"
            sx={{
              backgroundColor: 'transparent',
              height: 36,
              border: 'none',
              '& fieldset': { border: 'none', borderRadius: 0, height: 40 },
            }}
          />
          <SvgIcon
            component={SearchIcon}
            inheritViewBox
            sx={{ width: 36, height: 36, fill: 'none' }}
          />
        </Stack>
      </Box>
      <TableContainer>
        <Table sx={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    sx={{
                      padding: 0,
                      paddingRight: header.id === 'select' ? 0 : 1,
                      fontWeight: 700,
                      fontSize: 14,
                      color: 'primary.dark',
                      opacity: header.id === 'select' ? 1 : 0.4,
                      borderBottom: 'none',
                      width: header.id === 'select' ? '1%' : 'auto',
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  borderRadius: '4px',
                  '&:nth-child(odd)': { backgroundColor: 'common.white' },
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    sx={{
                      padding: '8px 0',
                      borderBottom: 'none',
                      fontSize: '18px',
                      fontWeight: '300',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
