import { Flex, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

import background from "../../assets/bg2.png";
import logo from "../../assets/logo.png";
import { BarberLink } from "../components/Links/BarberLink";
import { BarberText } from "../components/Typograph/BarberText";
import RegisterForm from "../forms/RegisterForm";

export default function Register() {
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
      <Flex
        w="40%"
        h="100vh"
        align="center"
        justify="center"
        minW="388px"
        flexDir="column"
      >
        <Flex flexDir="column" w="340px" align="center" justify="center">
          <Image src={logo} m="0 auto" mb="6" />
          <BarberText size="lg" fontWeight="600" mb="6" color="orangeFont">
            Create your account
          </BarberText>
          <RegisterForm />
        </Flex>
        <BarberLink to="/" direction="left" color="orange" mt="8">
          Back to login
        </BarberLink>
      </Flex>
    </HStack>
  );
}
