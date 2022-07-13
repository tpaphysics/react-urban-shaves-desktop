import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

import { useSidebarDrawer } from '../../hooks/SideBar';
import { AvatarUserProfileProps } from '../Header/interfaces';
import { AvatarUserProfile } from '../Header/parts/AvatarUserProfile';
import SignOutButton from '../Header/parts/SignOutButton';

export default function SideBar({ ...avatarProps }: AvatarUserProfileProps) {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="black.inputs">
          <DrawerCloseButton mt="2" />
          <DrawerHeader m="0">
            <Flex alignItems="center">
              <AvatarUserProfile cursor="pointer" {...avatarProps} onClick={onClose} />
              <SignOutButton ml="4" />
            </Flex>
          </DrawerHeader>

          <DrawerBody>Menu</DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
