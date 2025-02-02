import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authService';

export function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    try {
      await signup(name, email, password);

      console.log('Usuário criado com sucesso!');

      navigate('/login');
    } catch (err) {
      setError('Erro ao criar usuário. Verifique os dados e tente novamente.');
      console.error('Erro no cadastro:', err);
    }
  }

  return (
    <div>
      <h2>Criar Conta</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Criar Conta</button>
      </form>
    </div>
  );
}
