import { Box, BoxProps } from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import React from 'react';

import { useSidebarDrawer } from '../../../hooks/SideBar';

export default function OpenSideBarButton({ ...props }: BoxProps) {
  const { onToggle, isOpen } = useSidebarDrawer();
  return (
    <Box color="orangeFontHard" {...props}>
      <Hamburger size={24} toggled={isOpen} onToggle={onToggle} />
    </Box>
  );
}
