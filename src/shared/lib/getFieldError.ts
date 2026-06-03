export const getFieldError = (name: string, value: string) => {
  if (value.trim() === '') return 'This field is required';

  const onlyLettersRegex = /^[a-zA-Z\s'-]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if ((name === 'firstName' || name === 'lastName') && !onlyLettersRegex.test(value)) {
    return 'Please use letters only';
  }

  if (name === 'email' && !emailRegex.test(value)) {
    return 'Please enter a valid email address';
  }

  if (name === 'password' && value.length < 8) {
    return 'Password must be at least 8 characters long';
  }

  return '';
};
