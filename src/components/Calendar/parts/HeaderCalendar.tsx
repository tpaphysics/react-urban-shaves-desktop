import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface HeaderCalendarProps {
  month: string;
}

export function HeaderCalendar({ month }: HeaderCalendarProps) {
  return (
    <HStack
      as="header"
      w="359px"
      h="50px"
      bg="black.shape"
      px="6"
      justify="space-between"
      borderTopRadius="10px"
    >
      <Icon as={AiOutlineArrowLeft} />
      <Text fontSize="16px" fontWeight="700">
        {month}
      </Text>
      <Icon as={AiOutlineArrowRight} />
    </HStack>
  );
}
