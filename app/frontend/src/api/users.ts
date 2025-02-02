import { User, CreateUserData, UpdateUserData } from '../types/user';

// Simulated delay to mimic API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// In-memory store for development
let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
];

export const api = {
  getUsers: async (): Promise<User[]> => {
    await delay(500);
    return [...users];
  },

  getUserById: async (id: number): Promise<User | undefined> => {
    await delay(300);
    return users.find(user => user.id === id);
  },

  createUser: async (userData: CreateUserData): Promise<User> => {
    await delay(700);
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    users.push(newUser);
    return newUser;
  },

  updateUser: async (userData: UpdateUserData): Promise<User> => {
    await delay(700);
    const index = users.findIndex(u => u.id === userData.id);
    if (index === -1) throw new Error('User not found');
    
    users[index] = { ...users[index], ...userData };
    return users[index];
  },

  deleteUser: async (id: number): Promise<void> => {
    await delay(500);
    users = users.filter(user => user.id !== id);
  }
};