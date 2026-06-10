import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import BackIcon from '../../../assets/icons/back.svg?react';
import { Link as RouterLink } from '@tanstack/react-router';

export const Table5 = () => {
  return (
    <Stack spacing={1}>
      <Stack direction={'row'} spacing={2}>
        <Box
          to="/employee/tables"
          search={true}
          component={RouterLink}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <SvgIcon
            component={BackIcon}
            inheritViewBox
            sx={{ transition: 'all 0.2s ease', '&:hover': { opacity: 0.5 } }}
          />
        </Box>
        <Stack>
          <Typography sx={{ fontSize: 24, fontWeight: 500, color: 'primary.dark' }}>
            Table 5
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 600, color: 'primary.dark', opacity: 0.4 }}>
            Order details
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
