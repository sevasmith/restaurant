export interface Employee {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  shift: 'A' | 'B';
  employmentDate: string;
  billingDate: string;
}

export interface RawEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  birthDate: string;
}
