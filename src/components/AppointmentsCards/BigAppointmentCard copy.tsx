import { Avatar, HStack } from "@chakra-ui/react";
import React from "react";
import { AvatarUserProfile } from "../Header/parts/AvatarUserProfile";
import { Hour } from "../Hour/Hour";
import { BarberText } from "../Typograph/BarberText";

interface BigAppointmentCard {
  avatar: string;
  name: string;
  time: string;
}

export function BigAppointmentCard({ avatar, name, time }: BigAppointmentCard) {
  return (
    <HStack
      w="640px"
      bg="black.shape"
      borderRadius="10px"
      px="6"
      py="4"
      justify="space-between"
    >
      <AvatarUserProfile name={name} type="BigCard" avatar={avatar} />
      <Hour size="large" time={time} />
    </HStack>
  );
}
