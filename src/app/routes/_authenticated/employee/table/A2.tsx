import { createFileRoute } from '@tanstack/react-router';
import { TableA2 } from '../../../../../pages/Employee/Tables/TableA2';

export const Route = createFileRoute('/_authenticated/employee/table/A2')({
  component: TableA2,
});
