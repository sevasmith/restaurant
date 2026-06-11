import React, { useState } from 'react';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from '@tanstack/react-router';
import { useUserContext } from '../../../entities/user/model/context';
import { getFieldError } from '../../../shared/lib/getFieldError';
import { getRegisteredUsers } from '../../../shared/lib/getRegisteredUsers';
import type { User } from '../../../entities/user/model/types';

export const Register = () => {
  const { setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const location = useLocation();
  const role = location.state?.role || 'employee';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
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

      if (registeredUsers.some((user) => user.email === formData.email)) {
        setErrors((prev) => ({ ...prev, ['email']: 'An account with this email already exists' }));
        return;
      }

      const newUser: User = { ...formData, ['role']: role };
      registeredUsers.push(newUser);

      localStorage.setItem('currentUser', JSON.stringify(newUser));
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

      setCurrentUser(newUser);

      if (role === 'admin') {
        navigate({ to: '/admin' });
      } else {
        navigate({ to: '/employee' });
      }
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
        Create your account
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
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 3, sm: 2 }}
          sx={{ width: '100%' }}
        >
          <TextField
            size="small"
            required
            label="First Name"
            name="firstName"
            type="text"
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            size="small"
            required={true}
            label="Last Name"
            name="lastName"
            type="text"
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
            value={formData.lastName}
            onChange={handleChange}
          />
        </Stack>
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
            padding: { xs: 1.2, sm: 1 },
          }}
        >
          Submit
        </Button>
      </Stack>
      <Stack spacing={2}>
        <Stack
          direction={'row'}
          spacing={1}
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography>Already have an account?</Typography>
          <Link to="/login" component={RouterLink}>
            Log in
          </Link>
        </Stack>
        <Stack
          direction={'row'}
          spacing={1}
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography sx={{ color: 'grey.200' }}>Back to</Typography>
          <Link to="/start" component={RouterLink} sx={{ color: 'grey.200' }}>
            Start page
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
