import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes: FC = () => {
  const { isAuthenticated: user } = useSelector((state: any) => state.auth);

  return user ? <Outlet /> : <Navigate to={'/home'} replace />;
};

export default PrivateRoutes;
