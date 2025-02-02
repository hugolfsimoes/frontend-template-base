import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
