import { Navigate } from '@tanstack/react-router';
import { useUserContext } from '../../entities/user/model/context';
import type { ReactNode } from 'react';

export const ProtectedEmployeeRoute = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useUserContext();

  if (currentUser?.role !== 'employee') {
    return <Navigate to="/admin" />;
  }

  return children;
};
