import React, { ReactNode, useState } from 'react';

import AuthContext from './AuthContext';
import AuthService from './auth.service';

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
