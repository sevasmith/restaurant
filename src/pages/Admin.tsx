import { Button, Stack } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { useUserContext } from '../entities/user/model/context';

export const Admin = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useUserContext();

  const handleLogOut = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate({ to: '/login' });
  };

  return (
    <Stack>
      <Button onClick={handleLogOut}>Log out</Button>
    </Stack>
  );
};
