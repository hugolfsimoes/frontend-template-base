import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to='/login' />;
}
