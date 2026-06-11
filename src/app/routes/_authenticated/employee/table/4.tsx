import { createFileRoute } from '@tanstack/react-router';
import { Table4 } from '../../../../../pages/employee/Tables/Table4';

export const Route = createFileRoute('/_authenticated/employee/table/4')({
  component: Table4,
});
