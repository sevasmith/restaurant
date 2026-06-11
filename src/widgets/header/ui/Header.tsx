import {
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import BellIcon from '../assets/icons/bell.svg?react';
import UserIcon from '../assets/icons/user.svg?react';
import LogoutIcon from '@mui/icons-material/Logout';
import BurgerIcon from '../assets/icons/burger.svg?react';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useUserContext } from '../../../entities/user/model/context';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const { currentUser, setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('chatMessages');
    setCurrentUser(null);
    navigate({ to: '/login' });
  };

  return (
    <Stack
      direction={'row'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'space-between', md: 'end' },
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open sidebar menu"
        edge="start"
        onClick={onMenuClick}
        sx={{ display: { md: 'none' }, mr: 1 }}
      >
        <SvgIcon>
          <BurgerIcon />
        </SvgIcon>
      </IconButton>
      <Stack direction={'row'} spacing={1} sx={{ padding: 1 }}>
        <SvgIcon component={BellIcon} inheritViewBox sx={{ fill: 'none', cursor: 'pointer' }} />
        <ClickAwayListener onClickAway={closeDropdown}>
          <Box sx={{ position: 'relative' }}>
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
                  marginTop: 1,
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
          </Box>
        </ClickAwayListener>
      </Stack>
    </Stack>
  );
};
