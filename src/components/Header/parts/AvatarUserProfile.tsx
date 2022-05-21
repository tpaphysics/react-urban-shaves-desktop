import { Avatar, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { BarberText } from "../../Typograph/BarberText";

interface AvatarUserProfileProps {
  name: string;
  message: string;
  avatar: string;
}

export function AvatarUserProfile({
  avatar,
  name,
  message,
}: AvatarUserProfileProps) {
  return (
    <HStack spacing="4">
      <Avatar name={name} src={avatar} size="lg" />
      <VStack align="left" spacing="0">
        <BarberText>{message}</BarberText>
        <BarberText color="orange" fontWeight="700">
          {name}
        </BarberText>
      </VStack>
    </HStack>
  );
}
