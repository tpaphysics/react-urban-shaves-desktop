import { useState } from "react";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: () => void) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: () => void) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default function useProvideAuth() {
  const [user, setUser] = useState({});

  const signin = (cb: () => void) => {
    return fakeAuth.signin(() => {
      setUser({ name: "Thiago", email: "t@t.com" });
      cb();
    });
  };

  const signout = (cb: any) => {
    return fakeAuth.signout(() => {
      setUser({});
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}
