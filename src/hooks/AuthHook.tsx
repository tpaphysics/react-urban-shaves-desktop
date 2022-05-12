import React, { createContext, ReactNode, useState } from "react";
import useProvideAuth from "./useAuthProvider";

const AuthContext = createContext({});

function AuthProvider(children: ReactNode) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
