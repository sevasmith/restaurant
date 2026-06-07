import { createFileRoute } from '@tanstack/react-router';
import { Employee } from '../../../pages/Employee/Employee';

export const Route = createFileRoute('/_authenticated/employee')({
  component: Employee,
});
