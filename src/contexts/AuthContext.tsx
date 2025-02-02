import React, { createContext, useContext, useState, ReactNode } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    try {
      const { data } = await api.post('/auth/login', { email, password });

      setUser(data.user);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Erro no login:', error);
      throw new Error('Email ou senha inválidos.');
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
