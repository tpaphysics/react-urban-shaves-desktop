import { createContext } from 'react';

import { IAuthContext } from '../interface/IAuthContext';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default AuthContext;
