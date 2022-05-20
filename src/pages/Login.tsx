import { Button, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { BarberInput } from "../components/basic/Input";

export default function Login() {
  return (
    <VStack w="340px" align="center" justify="center">
      <div>Login</div>
      <BarberInput iconType="email" id="email" placeholder="Name" />
      <BarberInput
        id="password"
        iconType="lock"
        placeholder="password"
        isPassword
      />
      <Button w="100%">Entrar</Button>
    </VStack>
  );
}
