
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loader from './Loader';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, isLoading, user, isInitialized } = useAuth();
  const location = useLocation();

  // Show loader while initializing or loading
  if (!isInitialized || isLoading) {
    return <Loader />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated || !user) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  } else {
    <Navigate to={'/home'}/>
  }

  // Check role-based access
  if (requiredRole && user.role !== requiredRole) {
  return <div className="text-center p-4 text-red-600 font-bold">
    Access Denied (Requires {requiredRole})
  </div>;
}

  return children;
};

export default ProtectedRoute;