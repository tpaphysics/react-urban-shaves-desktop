import { Button, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { BarberInput } from "../components/basic/Input";
import { BarberText } from "../components/Fonts/BarberDescription";
import { BarberTextDescription } from "../components/Fonts/BarberTextDescription";
import { BarberLink } from "../components/Links/BarberLink";

export default function Login() {
  return (
    <VStack w="340px" align="center" justify="center">
      <BarberTextDescription>Faça seu login</BarberTextDescription>
      <BarberInput iconType="email" id="email" placeholder="Name" />
      <BarberInput
        id="password"
        iconType="lock"
        placeholder="Password"
        isPassword
      />
      <Button w="100%">Entrar</Button>
      <BarberText>Esqueci minha senha</BarberText>
      <BarberLink direction="right">Criar conta</BarberLink>
    </VStack>
  );
}
