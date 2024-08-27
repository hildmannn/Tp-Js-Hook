import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

  return loggedUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
