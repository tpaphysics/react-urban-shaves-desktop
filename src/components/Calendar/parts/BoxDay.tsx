import { Flex, Text } from "@chakra-ui/react";

interface BoxDayProps {
  day: string;
  color?: string;
  bg?: string;
}
export function BoxDay({
  day,
  color = "gray.hard",
  bg = "black.medium",
}: BoxDayProps) {
  return (
    <Flex
      w="40px"
      h="40px"
      bg={bg}
      borderRadius="10px"
      align="center"
      justify="center"
    >
      <Text fontSize="1rem" color={color}>
        {day}
      </Text>
    </Flex>
  );
}
