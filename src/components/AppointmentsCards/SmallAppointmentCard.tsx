import { Avatar, HStack } from "@chakra-ui/react";
import React from "react";
import { AvatarUserProfile } from "../Header/parts/AvatarUserProfile";
import { Hour } from "../Hour/Hour";
import { BarberText } from "../Typograph/BarberText";

interface SmallAppointmentCard {
  avatar: string;
  name: string;
  time: string;
}

export function SmallAppointmentCard({
  avatar,
  name,
  time,
}: SmallAppointmentCard) {
  return (
    <HStack spacing="7">
      <Hour size="small" time={time} />
      <HStack
        w="544px"
        bg="black.shape"
        borderRadius="10px"
        px="4"
        py="4"
        justify="space-between"
      >
        <AvatarUserProfile name={name} type="SmallCard" avatar={avatar} />
      </HStack>
    </HStack>
  );
}
