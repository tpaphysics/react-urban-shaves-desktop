import React, { ReactNode } from 'react';

import AuthContext from '../context/AuthContext';
import AuthService from '../service/Auth.service';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { signIn, signOut, isAuthenticate } = AuthService;
  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
