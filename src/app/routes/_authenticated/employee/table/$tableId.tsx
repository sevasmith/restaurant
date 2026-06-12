import { createFileRoute } from '@tanstack/react-router';
import { Table } from '../../../../../pages/table/ui/Table';

export const Route = createFileRoute('/_authenticated/employee/table/$tableId')({
  component: Table,
});
