import api from 'api/api';

export async function signin(email: string, password: string) {
  const { data } = await api.post('/auth/login', { email, password });
  return data;
}

export async function signup(name: string, email: string, password: string) {
  const { data } = await api.post('/users/create', { name, email, password });
  return data;
}
