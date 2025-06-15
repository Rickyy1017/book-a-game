import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type User = {
  username: string;
  role: 'admin' | 'user' | 'guest';
};

type AuthContextType = {
  user: User | null;
  login: (username: string, role: User['role']) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, role: User['role']) => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
