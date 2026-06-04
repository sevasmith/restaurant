import { Navigate } from '@tanstack/react-router';
import { useUserContext } from '../../entities/user/model/context';
import type { ReactNode } from 'react';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useUserContext();

  if (!currentUser) {
    return <Navigate to="/home" />;
  }

  return children;
};
