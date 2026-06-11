import { createFileRoute } from '@tanstack/react-router';
import { Table1 } from '../../../../../pages/tables/ui/Table1';

export const Route = createFileRoute('/_authenticated/employee/table/1')({
  component: Table1,
});
