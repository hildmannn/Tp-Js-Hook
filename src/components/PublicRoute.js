import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

  return loggedUser ? <Navigate to="/recipes" /> : children;
}

export default PublicRoute;
