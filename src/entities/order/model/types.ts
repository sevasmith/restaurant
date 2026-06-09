export type DishCategory = 'Appetizer' | 'Main Course' | 'Drinks' | 'Dessert';

export interface Order {
  id: string;
  category: DishCategory;
  name: string;
  imageAlt: string;
  imageUrl: string;
  price: number;
  amount: number;
  comment: string;
}

import '@tanstack/react-table';
import type { RowData } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    updateAmount: (rowId: string, newAmount: number) => void;
    deleteRow: (rowId: string) => void;
  }
}
