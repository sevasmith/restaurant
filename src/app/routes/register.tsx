import { createFileRoute } from '@tanstack/react-router';
import { Register } from '../../pages/register/ui/Register';

export const Route = createFileRoute('/register')({
  component: Register,
});
