import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import Calendar from "../components/Calendar/Calendar";
import logo from "../assets/logo.png";
import { AvatarUserProfile } from "../components/Header/parts/AvatarUserProfile";

function Profile() {
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
        avatar="https://avatars.githubusercontent.com/u/46402647?s=96&v=4"
        name="Thiago Pacheco"
        message="Be welcome"
        type="header"
      />
    </Heading>
  );
}

export default Profile;
