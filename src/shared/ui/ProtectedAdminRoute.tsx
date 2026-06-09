import { Navigate } from '@tanstack/react-router';
import { useUserContext } from '../../entities/user/model/context';
import type { ReactNode } from 'react';

export const ProtectedAdminRoute = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useUserContext();

  if (currentUser?.role !== 'admin') {
    return <Navigate to="/employee" />;
  }

  return children;
};
