export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface CreateUserData {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface UpdateUserData extends Partial<CreateUserData> {
  id: number;
}