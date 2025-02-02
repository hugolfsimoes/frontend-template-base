import { useState, useEffect } from 'react';
import { signin } from '../modules/Auth/services/authService';

export function useAuth() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user, token } = await signin(email, password);

      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token); // ✅ Armazena o token

      return user;
    } catch (error) {
      console.error('Erro no login', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return { user, login, logout };
}
