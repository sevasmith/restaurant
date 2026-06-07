import { createFileRoute } from '@tanstack/react-router';
import { SickDays } from '../../../../pages/Admin/SickDays';

export const Route = createFileRoute('/_authenticated/admin/sickdays')({
  component: SickDays,
});
