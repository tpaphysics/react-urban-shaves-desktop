import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface HeaderPanel {
  year: number;
  month: string;
}

function HeaderPanel({ month, year }: HeaderPanel) {
  return (
    <Flex
      flexWrap="wrap"
      w="360px"
      h="50px"
      align="center"
      justify="space-between"
      px="7"
      bg="black.shape"
      borderTopRadius="10px"
      fontWeight="600"
    >
      <IconButton
        disabled
        as={AiOutlineArrowLeft}
        bg="transparent"
        _hover={{
          bg: "transparent",
        }}
        color="gray.normal"
        size="xs"
        aria-label="Arrow Left"
        cursor="pointer"
      />
      {`${month} - ${year}`}
      <IconButton
        disabled
        as={AiOutlineArrowRight}
        bg="transparent"
        _hover={{
          bg: "transparent",
        }}
        color="gray.normal"
        size="xs"
        aria-label="Arrow Right"
        cursor="pointer"
      />
    </Flex>
  );
}

export default HeaderPanel;
