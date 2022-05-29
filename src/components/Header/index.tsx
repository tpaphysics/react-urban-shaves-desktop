import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import { AvatarUserProfile } from "./parts/AvatarUserProfile";

interface HeaderProps {
  name: string;
  avatar: string;
  message?: string;
}

export function Header({ avatar, message, name }: HeaderProps) {
  return (
    <Heading
      display="flex"
      bg="black.inputs"
      h="144px"
      alignItems="center"
      px="40"
      w="100%"
    >
      <Image src={logo} />
      <AvatarUserProfile
        cursor="pointer"
        ml="16"
        avatar={avatar}
        name={name}
        message={message}
        type="header"
      />
    </Heading>
  );
}
