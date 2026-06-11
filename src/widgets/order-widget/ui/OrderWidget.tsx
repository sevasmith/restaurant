import {
  getCoreRowModel,
  getExpandedRowModel,
  getGroupedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { mockOrderData } from '../../../entities/order/api/mockOrderData';
import { orderColumns } from '../../../entities/order/lib/order-columns';
import { Stack } from '@mui/material';
import { OrderTable } from '../../../entities/order/ui/OrderTable';
import { useState } from 'react';
import { OrderTotal } from '../../../entities/order/ui/OrderTotal';

export const OrderWidget = () => {
  const [data, setData] = useState(mockOrderData);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: data,
    columns: orderColumns,
    initialState: {
      grouping: ['category'],
      expanded: true,
      columnVisibility: { category: false },
    },
    meta: {
      updateAmount: (rowId: string, newAmount: number) => {
        setData((oldData) =>
          oldData.map((row) => {
            if (row.id === rowId) {
              return { ...row, amount: newAmount };
            }
            return row;
          }),
        );
      },
      deleteRow: (rowId: string) => {
        setData((oldData) => oldData.filter((row) => row.id !== rowId));
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  const total = data.reduce((prev, curr) => {
    return prev + curr.price * curr.amount;
  }, 0);

  return (
    <Stack sx={{ backgroundColor: 'primary.light', padding: { xs: 1.5, sm: 2 }, borderRadius: 2 }}>
      <OrderTable table={table} />
      <OrderTotal total={total} />
    </Stack>
  );
};
