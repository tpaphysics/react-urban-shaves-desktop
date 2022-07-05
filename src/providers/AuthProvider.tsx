import React, { ReactNode } from 'react';

import { AuthContext } from '../contexts/AuthContext';

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={{ name: 'thiago' }}>{children}</AuthContext.Provider>;
}
