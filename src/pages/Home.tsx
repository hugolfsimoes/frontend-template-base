import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div>
      <h2>Bem-vindo, {user?.name}!</h2>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
