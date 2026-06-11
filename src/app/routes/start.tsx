import { createFileRoute } from '@tanstack/react-router';
import { Start } from '../../pages/start/ui/Start';

export const Route = createFileRoute('/start')({
  component: Start,
});
