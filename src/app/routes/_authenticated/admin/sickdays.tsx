import { createFileRoute } from '@tanstack/react-router';
import { SickDays } from '../../../../pages/admin/ui/SickDays';

export const Route = createFileRoute('/_authenticated/admin/sickdays')({
  component: SickDays,
});
