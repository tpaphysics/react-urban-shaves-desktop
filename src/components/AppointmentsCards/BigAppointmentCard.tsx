import { Avatar, HStack } from "@chakra-ui/react";
import React from "react";
import { BarberText } from "../Typograph/BarberText";

export function BigAppointmentCard(name: string) {
  return (
    <HStack>
      <Avatar name={name} />
      <BarberText>{name}</BarberText>
    </HStack>
  );
}
