import {
  Box,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Hamburger from "hamburger-react";
import logo from "../../../assets/logo.png";
import logoSmall from "../../../assets/logo-sm.png";
import { AvatarUserProfile } from "./parts/AvatarUserProfile";
import { useSidebarDrawer } from "../../hooks/SideBarHook";
import SideBar from "../Sidebar/SideBar";
import { HeaderProps } from "./interfaces";

export function Header({ avatar, message, name }: HeaderProps) {
  const { onToggle, isOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Heading
      display="flex"
      bg="black.inputs"
      h={{ base: "100px", lg: "144px" }}
      alignItems="center"
      px={{ lg: "40", base: "4" }}
      w="100%"
      position={isWideVersion ? "unset" : "sticky"}
      top="0"
      zIndex="9"
    >
      {isWideVersion ? (
        <>
          <Image src={logo} />
          <AvatarUserProfile
            cursor="pointer"
            ml="16"
            avatar={avatar}
            name={name}
            message={message}
            type="header"
          />
        </>
      ) : (
        <Flex w="100%" justify="space-between">
          <Image src={logoSmall} />
          <Box color="orangeFontHard">
            <Hamburger size={24} toggled={isOpen} onToggle={onToggle} />
          </Box>
          <SideBar
            name={name}
            avatar={avatar}
            type="header"
            message="Be Welcome"
          />
        </Flex>
      )}
    </Heading>
  );
}
