import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/Auth';

interface PrivateRoutesProps {
  component: JSX.Element;
}

export default function IsLogged({ component }: PrivateRoutesProps) {
  const { isAuthenticate } = useAuth();
  return isAuthenticate() ? <Navigate to="/dashboard" replace /> : component;
}
