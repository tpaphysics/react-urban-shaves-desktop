import React, { ReactNode, useEffect, useState } from 'react';

import AuthContext from './AuthContext';
import AuthService from './auth.service';

interface AuthProviderProps {
  children: ReactNode;
}
const { signIn, signOut, isAuthenticate, currentUser } = AuthService;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(currentUser);
  //const [isAuth, setIsAuth] = useState(isAuthenticate());

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isAuthenticate,
        currentUser: user,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
