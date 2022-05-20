import { Button, Input, VStack } from "@chakra-ui/react";
import React from "react";

export default function Login() {
  return (
    <VStack w="340px" align="center" justify="center">
      <div>Login</div>
      <Input />
      <Button w="100%">Entrar</Button>
    </VStack>
  );
}
