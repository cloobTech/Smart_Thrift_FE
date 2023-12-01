import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PulicRoutes: FC = () => {
  const { isAuthenticated: user } = useSelector((state: any) => state.auth);
  return user ? <Navigate to={'/'} replace /> : <Outlet />;
};

export default PulicRoutes;
