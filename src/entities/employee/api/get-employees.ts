import type { Employee, RawEmployee } from '../model/types';

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await fetch('https://dummyjson.com/users?limit=55');

  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }

  const data = await response.json();

  return data.users.map((user: RawEmployee) => {
    const oneYearMs = 365 * 24 * 60 * 60 * 1000;
    const sixYearsMs = 6 * 365 * 24 * 60 * 60 * 1000;
    const randomOffset = oneYearMs + Math.random() * sixYearsMs;
    const employmentDate = new Date(Date.now() - randomOffset).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return {
      id: String(user.id),
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      avatarUrl: user.image,
      shift: Math.random() > 0.5 ? 'A' : 'B',
      employmentDate: employmentDate,
      billingDate: Math.random() > 0.5 ? 'Jan 5, 2026' : 'Jan 11, 2026',
    };
  });
};
