import {
  Button,
  Flex,
  HStack,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import background from "../assets/bg1.png";
import logo from "../assets/logo.png";
import { avatars } from "../components/AvatarPersons/array";
import Avatars from "../components/AvatarPersons/AvatarPersons";
import { BarberInput } from "../components/Basic/Input";
import { BarberLink } from "../components/Links/BarberLink";
import { BarberText } from "../components/Typograph/BarberText";

export default function Login() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <HStack
      w="100%"
      maxW="100vw"
      h="100vh"
      spacing="0"
      align="center"
      justify="center"
    >
      <Flex w="40%" h="100vh" align="center" justify="center" minW="388px">
        <Flex flexDir="column" w="340px" align="center" justify="center">
          <Image src={logo} m="0 auto" mb="6" />
          <VStack mb="6" borderRadius="10px" w="340px" align="center" p="4">
            <BarberText size="md" fontWeight="600" color="orangeFont" ml="-20">
              Be your best version
            </BarberText>
            <Avatars avatarSize="md" avatars={avatars} ml="10" />
          </VStack>
          <VStack>
            <BarberInput iconType="user" placeholder="E-mail" w="340px" />
            <BarberInput iconType="lock" placeholder="Password" isPassword />
          </VStack>
          <Button mt="6" w="100%">
            Sigin
          </Button>
          <VStack mt="8" spacing={6}>
            <BarberLink to="/forgot">Forgot your password?</BarberLink>
            <BarberLink to="/register" direction="right" color="orange">
              Create your account
            </BarberLink>
          </VStack>
        </Flex>
      </Flex>
      <Flex
        display={!isWideVersion ? "none" : "flex"}
        w="60%"
        h="100vh"
        align="center"
        justify="center"
        backgroundImage={background}
        bgSize="cover"
        bgRepeat="no-repeat"
      />
    </HStack>
  );
}
