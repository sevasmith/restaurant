import type { User } from '../../entities/user/model/types';

export const getRegisteredUsers = (): User[] => {
  try {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : [];
  } catch (error) {
    console.log('Failed to parse registered users from localStorage:', error);
    return [];
  }
};
