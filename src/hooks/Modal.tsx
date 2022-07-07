import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import React, { createContext, ReactNode, useContext } from 'react';

interface ModalProfileProviderProps {
  children: ReactNode;
}

const ModalProfileContext = createContext<UseDisclosureReturn>({} as UseDisclosureReturn);

export default function ModalProfileProvider({ children }: ModalProfileProviderProps) {
  const disclosure = useDisclosure();
  return <ModalProfileContext.Provider value={disclosure}>{children}</ModalProfileContext.Provider>;
}

export const useModalProfile = () => useContext(ModalProfileContext);
