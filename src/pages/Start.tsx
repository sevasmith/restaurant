import { Stack, Link, Typography, SvgIcon } from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';
import EmployeeIcon from '../assets/icons/employee.svg?react';
import AdminIcon from '../assets/icons/admin.svg?react';

export const Start = () => {
  return (
    <Stack
      component="main"
      spacing={10}
      sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        <Typography component={'h1'} variant="h3">
          Welcome to the Restaurant
        </Typography>
        <Typography variant="l" sx={{ fontWeight: '500' }}>
          Which describes you best?
        </Typography>
      </Stack>
      <Stack direction={'row'} spacing={5} sx={{ margin: '0 auto', width: '40%' }}>
        <Stack
          direction={'column'}
          spacing={3}
          to="/register"
          state={{ role: 'employee' }}
          component={RouterLink}
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            color: 'primary.main',
            bgcolor: 'common.white',
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 2,
            textDecoration: 'none',
            opacity: 0.9,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              borderColor: 'grey.100',
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
              bgcolor: 'common.white',
              opacity: 1,
            },
          }}
        >
          <SvgIcon
            component={EmployeeIcon}
            inheritViewBox
            sx={{
              width: '80px',
              height: '80px',
              '& path': {
                fill: 'common.white',
              },
            }}
          />
          <Typography sx={{ fontSize: 24 }}>Employee</Typography>
        </Stack>
        <Stack
          direction={'column'}
          spacing={3}
          to="/register"
          state={{ role: 'admin' }}
          component={RouterLink}
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            color: 'primary.main',
            bgcolor: 'common.white',
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 2,
            textDecoration: 'none',
            opacity: 0.9,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              borderColor: 'grey.100',
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
              bgcolor: 'common.white',
              opacity: 1,
            },
          }}
        >
          <SvgIcon
            component={AdminIcon}
            inheritViewBox
            sx={{
              width: '80px',
              height: '80px',
              '& path': {
                fill: 'common.white',
              },
            }}
          />
          <Typography sx={{ fontSize: 24 }}>Administrator</Typography>
        </Stack>
      </Stack>
      <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Already have an account?</Typography>
        <Link to="/login" component={RouterLink}>
          Log in
        </Link>
      </Stack>
    </Stack>
  );
};
