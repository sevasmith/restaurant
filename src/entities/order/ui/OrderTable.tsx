import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import type { Order } from '../model/types';
import { flexRender, type Table as TanStackTable } from '@tanstack/react-table';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const OrderTable = ({ table }: { table: TanStackTable<Order> }) => {
  return (
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
          {table.getRowModel().rows.map((row) => {
            if (row.getIsGrouped()) {
              return (
                <TableRow key={row.id}>
                  <TableCell
                    colSpan={row.getVisibleCells().length}
                    sx={{ borderBottom: 'none', padding: '16px 0 2px 0' }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: 'center', cursor: 'pointer', width: 'fit-content' }}
                      onClick={row.getToggleExpandedHandler()}
                    >
                      <Box
                        sx={{
                          backgroundColor: 'grey.900',
                          color: 'common.white',
                          borderRadius: '4px',
                          width: 24,
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {row.getIsExpanded() ? (
                          <RemoveIcon sx={{ fontSize: 18 }} />
                        ) : (
                          <AddIcon sx={{ fontSize: 18 }} />
                        )}
                      </Box>
                      <Typography
                        sx={{ fontWeight: 700, color: 'primary.dark', opacity: 0.4, fontSize: 14 }}
                      >
                        {row.getValue('category')}
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            }

            return (
              <TableRow
                key={row.id}
                sx={{
                  borderRadius: '4px',
                  backgroundColor: 'common.white',
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    sx={{
                      padding: '8px 0',
                      borderBottom: 'none',
                      fontSize: '18px',
                      fontWeight: '400',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
