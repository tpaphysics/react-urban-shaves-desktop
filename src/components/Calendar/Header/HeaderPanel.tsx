import { Flex, Icon } from "@chakra-ui/react";
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
      <Icon as={AiOutlineArrowLeft} color="gray.stroke" />
      {`${month} - ${year}`}
      <Icon as={AiOutlineArrowRight} />
    </Flex>
  );
}

export default HeaderPanel;
