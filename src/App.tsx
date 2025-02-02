import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { PrivateRoute } from './routes/PrivateRoute';
import { Login } from './modules/Auth/pages/Login';
import { CreateUser } from './modules/Auth/pages/CreateUser';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<CreateUser />} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
