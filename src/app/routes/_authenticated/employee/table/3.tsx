import { createFileRoute } from '@tanstack/react-router';
import { Table3 } from '../../../../../pages/tables/ui/Table3';

export const Route = createFileRoute('/_authenticated/employee/table/3')({
  component: Table3,
});
