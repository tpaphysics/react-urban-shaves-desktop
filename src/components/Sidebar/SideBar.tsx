import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarDrawer } from "../../hooks/SideBarHook";
import { AvatarUserProfileProps } from "../Header/interfaces";
import { AvatarUserProfile } from "../Header/parts/AvatarUserProfile";

export default function SideBar({ ...avatarProps }: AvatarUserProfileProps) {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="black.inputs">
          <DrawerCloseButton mt="2" />
          <DrawerHeader m="0">
            <AvatarUserProfile cursor="pointer" {...avatarProps} />
          </DrawerHeader>

          <DrawerBody>Menu</DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
