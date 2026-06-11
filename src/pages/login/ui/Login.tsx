import React, { useState } from 'react';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from '@tanstack/react-router';
import { useUserContext } from '../../../entities/user/model/context';
import { getFieldError } from '../../../shared/lib/getFieldError';
import { getRegisteredUsers } from '../../../shared/lib/getRegisteredUsers';

export const Login = () => {
  const { setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    const fieldErrors = Object.fromEntries(
      Object.entries(formData).map(([name, value]) => [name, getFieldError(name, value)]),
    ) as typeof errors;

    setErrors(fieldErrors);

    if (Object.values(fieldErrors).every((value) => value === '')) {
      const registeredUsers = getRegisteredUsers();
      const currentUser = registeredUsers.find((user) => user.email === formData.email);

      if (!currentUser || currentUser.password !== formData.password) {
        setErrors((prev) => ({ ...prev, ['password']: 'Invalid email or password' }));
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      setCurrentUser(currentUser);
      navigate({ to: '/admin' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (hasSubmitted) {
      setErrors((prev) => ({ ...prev, [name]: getFieldError(name, value) }));
    }
  };

  return (
    <Stack
      component="main"
      spacing={{ xs: 4, sm: 6 }}
      sx={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 3, sm: 0 },
      }}
    >
      <Typography
        variant="h4"
        component={'h1'}
        sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
      >
        Log into your account
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        noValidate
        spacing={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <TextField
          size="small"
          required={true}
          label="Email"
          name="email"
          type="email"
          error={Boolean(errors.email)}
          helperText={errors.email}
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          size="small"
          required={true}
          label="Password"
          name="password"
          type="password"
          error={Boolean(errors.password)}
          helperText={errors.password}
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: { xs: '100%', sm: '50%' },
            fontSize: 16,
            fontWeight: 400,
            textTransform: 'none',
            padding: 1,
          }}
        >
          Submit
        </Button>
      </Stack>
      <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Don't have an account?</Typography>
        <Link to="/start" component={RouterLink}>
          Sign up
        </Link>
      </Stack>
    </Stack>
  );
};
