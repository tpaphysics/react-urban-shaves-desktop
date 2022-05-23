import { Box, HStack, StackProps } from "@chakra-ui/react";
import { AvatarUserProfile } from "../Header/parts/AvatarUserProfile";
import { Hour } from "../Hour/Hour";

interface BigAppointmentCard extends StackProps {
  avatar: string;
  name: string;
  time: string;
}

export function BigAppointmentCard({
  avatar,
  name,
  time,
  ...props
}: BigAppointmentCard) {
  return (
    <HStack
      w="100%"
      maxW="640px"
      bg="black.shape"
      borderRadius="10px"
      {...props}
    >
      <Box w="2px" h="80px" bg="orange" />
      <HStack
        w="100%"
        maxW="639px"
        bg="black.shape"
        borderRadius="10px"
        px="6"
        py="4"
        justify="space-between"
      >
        <AvatarUserProfile name={name} type="BigCard" avatar={avatar} />
        <Hour size="large" time={time} />
      </HStack>
    </HStack>
  );
}
