import { Box, Stack, Link, Typography } from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

export const Home = () => {
  return (
    <Stack
      component="main"
      spacing={10}
      sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack spacing={4} sx={{ alignItems: 'center' }}>
        <Typography component={'h1'} variant="h3">
          Welcome to Restaurant
        </Typography>
        <Typography variant="l" sx={{ fontWeight: '500' }}>
          Which describes you best?
        </Typography>
      </Stack>
      <Stack direction={'row'} spacing={5} sx={{ margin: '0 auto', width: '40%' }}>
        <Box
          to="/register"
          component={RouterLink}
          sx={{
            flex: '1 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            bgcolor: 'primary.light',
            padding: 1,
            border: '1px solid',
            borderColor: 'primary.dark',
            borderRadius: 2,
            textDecoration: 'none',
          }}
        >
          <Typography>Employee</Typography>
        </Box>
        <Box
          to="/register"
          component={RouterLink}
          sx={{
            flex: '1 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            bgcolor: 'primary.light',
            padding: 1,
            border: '1px solid',
            borderColor: 'primary.dark',
            borderRadius: 2,
            textDecoration: 'none',
          }}
        >
          <Typography>Administrator</Typography>
        </Box>
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
