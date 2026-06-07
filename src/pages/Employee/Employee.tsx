import { Button, Stack } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { useUserContext } from '../../entities/user/model/context';

export const Employee = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUserContext();

  if (currentUser?.role !== 'employee') {
    navigate({ to: '/admin' });
  }

  const handleLogOut = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate({ to: '/login' });
  };

  return (
    <Stack>
      <Button onClick={handleLogOut}>Log out for Employee</Button>
    </Stack>
  );
};
