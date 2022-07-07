import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import SidebarDrawerProvider from './hooks/SideBar';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SidebarDrawerProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SidebarDrawerProvider>
  </React.StrictMode>
);
