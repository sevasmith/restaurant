import { createFileRoute } from '@tanstack/react-router';
import { Table7 } from '../../../../../pages/Employee/Tables/Table7';

export const Route = createFileRoute('/_authenticated/employee/table/7')({
  component: Table7,
});
