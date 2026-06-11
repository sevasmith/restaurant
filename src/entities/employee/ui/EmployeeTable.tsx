import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { flexRender, type Table as TanStackTable } from '@tanstack/react-table';
import type { Employee } from '../model/types';

export const EmployeeTable = ({ table }: { table: TanStackTable<Employee> }) => {
  return (
    <>
      <TableContainer sx={{ width: '100%', overflowX: 'auto' }}>
        <Table
          sx={{
            borderCollapse: 'separate',
            borderSpacing: '0 8px',
            minWidth: { xs: 650, md: '100%' },
          }}
        >
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
                      fontSize: { xs: 12, sm: 14 },
                      color: 'primary.dark',
                      opacity: header.id === 'select' ? 1 : 0.4,
                      borderBottom: 'none',
                      width: header.id === 'select' ? '1%' : 'auto',
                      whiteSpace: 'nowrap',
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
                      padding: '8px 12px 8px 0',
                      borderBottom: 'none',
                      fontSize: { xs: '14px', sm: '16px', md: '18px' },
                      fontWeight: '300',
                      whiteSpace: 'nowrap',
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={table.getFilteredRowModel().rows.length}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => table.setPageIndex(page)}
        rowsPerPage={table.getState().pagination.pageSize}
        onRowsPerPageChange={(e) => {
          table.setPageSize(Number(e.target.value));
          table.setPageIndex(0);
        }}
        sx={{
          '& .MuiTablePagination-toolbar': {
            paddingLeft: { xs: 1, sm: 2 },
            paddingRight: { xs: 1, sm: 2 },
          },
        }}
      />
    </>
  );
};
