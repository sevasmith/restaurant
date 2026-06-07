import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { Box, Stack } from '@mui/material';
import { mockEmployees } from '../../entities/employee/mock/mock-employees';
import { useState } from 'react';
import { EmployeeSearch } from '../../features/employee-search/ui/EmployeeSearch';
import { EmployeeFilter } from '../../features/employee-filter/ui/EmployeeFilter';
import { columns } from '../../entities/employee/lib/employee-columns';
import { EmployeeTable } from '../../entities/employee/ui/EmployeeTable';

export interface GlobalFilterType {
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const EmployeesTableWidget = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: mockEmployees,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <Stack sx={{ backgroundColor: 'primary.light', padding: 2, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <EmployeeFilter table={table} />
        <EmployeeSearch globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      </Box>
      <EmployeeTable table={table} />
    </Stack>
  );
};
