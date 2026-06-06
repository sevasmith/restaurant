export interface Employee {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  shift: 'A' | 'B';
  employmentDate: string;
  billingDate: string;
}
