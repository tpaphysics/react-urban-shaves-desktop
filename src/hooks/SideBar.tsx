import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import React, { createContext, ReactNode, useContext } from 'react';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext<UseDisclosureReturn>({} as UseDisclosureReturn);

export default function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  return (
    <SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
