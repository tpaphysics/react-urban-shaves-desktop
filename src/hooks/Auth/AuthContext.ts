import { createContext } from 'react';

import { IAuthContext } from './interface';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default AuthContext;
