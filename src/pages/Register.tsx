import React, { useState } from 'react';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';
import { getFieldError } from '../shared/lib/getFieldError';

export const Register = () => {
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
      console.log('SUccess!');
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
      spacing={8}
      sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography variant="h4" component={'h1'}>
        Create your account
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        noValidate
        spacing={3}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Stack direction={'row'} spacing={2}>
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
            width: '50%',
            fontSize: 16,
            fontWeight: 400,
            textTransform: 'none',
          }}
        >
          Submit
        </Button>
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
