import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin') === 'true';

  return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
