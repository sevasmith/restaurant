import { createFileRoute } from '@tanstack/react-router';
import { Table5 } from '../../../../../pages/Employee/Tables/Table5';

export const Route = createFileRoute('/_authenticated/employee/table/5')({
  component: Table5,
});
