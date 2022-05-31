import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarDrawer } from "../../hooks/SideBarHook";

export default function SideBar() {
  const { isOpen, onClose } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="black.inputs">
          <DrawerCloseButton mt="2" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
