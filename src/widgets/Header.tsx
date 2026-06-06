import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import BellIcon from '../assets/icons/bell.svg?react';
import UserIcon from '../assets/icons/user.svg?react';
import { useUserContext } from '../entities/user/model/context';

export const Header = () => {
  const { currentUser } = useUserContext();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
      <Stack direction={'row'} spacing={1} sx={{ padding: 1 }}>
        <SvgIcon component={BellIcon} inheritViewBox sx={{ fill: 'none' }} />
        <SvgIcon component={UserIcon} inheritViewBox sx={{ fill: 'none' }} />
        <Typography>
          {currentUser?.firstName} {currentUser?.lastName}
        </Typography>
      </Stack>
    </Box>
  );
};
