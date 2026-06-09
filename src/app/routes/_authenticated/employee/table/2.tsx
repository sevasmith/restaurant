import { createFileRoute } from '@tanstack/react-router';
import { Table2 } from '../../../../../pages/Employee/Tables/Table2';

export const Route = createFileRoute('/_authenticated/employee/table/2')({
  component: Table2,
});
