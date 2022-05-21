import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { BarberInput } from "../components/Basic/Input";

import { BarberLink } from "../components/Links/BarberLink";
import { BarberText } from "../components/Typograph/BarberText";

export default function Login() {
  return (
    <VStack w="340px" align="center" justify="center">
      <BarberText color="white" size="2xl" fontWeight="700">
        Faça seu login
      </BarberText>
      <BarberInput iconType="email" id="email" placeholder="Name" />
      <BarberInput
        id="password"
        iconType="lock"
        placeholder="Password"
        isPassword
      />
      <Button w="100%">Entrar</Button>
      <BarberLink>Esqueci minha senha</BarberLink>
      <BarberLink color="orange" direction="right">
        Criar conta
      </BarberLink>
    </VStack>
  );
}
