import React, { createContext, ReactNode } from "react";

import { LoginDto } from "../dto/login.dto";

interface AuthContext {
  isAuthenticate: boolean;
  signIn: ({ email, password }: LoginDto) => Promise<void>;
  signOut: () => Promise<void>;
  user: any;
}

interface LoginProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export function LoginProvider({ children }: LoginProviderProps) {
  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
}

export default AuthHook;
