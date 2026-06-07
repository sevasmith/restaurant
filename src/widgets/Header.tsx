import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import BellIcon from '../assets/icons/bell.svg?react';
import UserIcon from '../assets/icons/user.svg?react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserContext } from '../entities/user/model/context';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const Header = () => {
  const { currentUser, setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate({ to: '/login' });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
      <Stack direction={'row'} spacing={1} sx={{ padding: 1, position: 'relative' }}>
        <SvgIcon component={BellIcon} inheritViewBox sx={{ fill: 'none', cursor: 'pointer' }} />
        <Stack
          direction={'row'}
          spacing={1}
          onClick={toggleDropdown}
          sx={{ cursor: 'pointer', transition: 'all 0.2s ease', '&:hover': { opacity: 0.65 } }}
        >
          <SvgIcon
            component={UserIcon}
            inheritViewBox
            sx={{
              fill: 'none',
            }}
          />
          <Typography
            sx={{
              userSelect: 'none',
            }}
          >
            {currentUser?.firstName} {currentUser?.lastName}
          </Typography>
        </Stack>

        {isDropdownOpen && (
          <Button
            onClick={handleLogOut}
            endIcon={<LogoutIcon />}
            sx={{
              position: 'absolute',
              fontSize: 16,
              fontWeight: 400,
              textTransform: 'none',
              right: 0,
              top: '100%',
              border: '1px solid',
              borderRadius: 2,
            }}
          >
            Log out
          </Button>
        )}
      </Stack>
    </Box>
  );
};
