import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { EmployeeSearch } from '../features/employee-search/ui/EmployeeSearch';
import { EmployeeFilter } from '../features/employee-filter/ui/EmployeeFilter';
import { columns } from '../entities/employee/lib/employee-columns';
import { EmployeeTable } from '../entities/employee/ui/EmployeeTable';
import { useQuery } from '@tanstack/react-query';
import { getEmployees } from '../entities/employee/api/get-employees';

export interface GlobalFilterType {
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const EmployeesWidget = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const {
    isLoading,
    isError,
    data: employees = [],
  } = useQuery({
    queryKey: ['employee'],
    queryFn: getEmployees,
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: employees,
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

  if (isLoading) {
    return (
      <Stack sx={{ alignItems: 'center', justifyContent: 'center', p: 4, height: 400 }}>
        <CircularProgress color="primary" />
      </Stack>
    );
  }

  if (isError) {
    return <Typography color="error">Failed to load employees data.</Typography>;
  }

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
