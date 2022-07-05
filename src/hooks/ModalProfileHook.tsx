import React, { createContext, ReactNode, useContext } from "react";

import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface ModalProfileProvider {
  children: ReactNode;
}

const ModalProfileContext = createContext({} as UseDisclosureReturn);

export default function ModalProfileProvider({
  children,
}: ModalProfileProvider) {
  const disclosure = useDisclosure();
  return (
    <ModalProfileContext.Provider value={disclosure}>
      {children}
    </ModalProfileContext.Provider>
  );
}

export const useModalProfile = () => useContext(ModalProfileContext);
