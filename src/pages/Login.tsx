import { Button, Flex, HStack, VStack, Image } from "@chakra-ui/react";
import React from "react";

import background from "../assets/bg1.png";
import logo from "../assets/logo.png";
import { BarberInput } from "../components/Basic/Input";
import { BarberLink } from "../components/Links/BarberLink";

export default function Login() {
  return (
    <HStack w="100%" maxW="100vw" h="100vh" spacing="0">
      <Flex w="40%" h="100vh" align="center" justify="center" minW="388px">
        <Flex flexDir="column" w="340px" align="center" justify="center">
          <Image src={logo} m="0 auto" mb="12" />
          <VStack>
            <BarberInput iconType="user" placeholder="E-mail" w="340px" />
            <BarberInput iconType="lock" placeholder="Password" isPassword />
          </VStack>
          <Button mt="6" w="100%">
            Sigin
          </Button>
          <VStack mt="8" spacing={6}>
            <BarberLink>Forgot your password</BarberLink>
            <BarberLink direction="right" color="orange">
              Create your account
            </BarberLink>
          </VStack>
        </Flex>
      </Flex>
      <Flex
        w="60%"
        bg="red"
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
