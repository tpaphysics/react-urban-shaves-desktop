import { Flex, FlexProps } from "@chakra-ui/react";

interface DayProps extends FlexProps {
  day: string;
}

export function WeekDay({ day, bg = "black.input", ...props }: DayProps) {
  return (
    <Flex
      {...props}
      h="40px"
      w="40px"
      fontSize="md"
      borderRadius="10px"
      bg={bg}
      align="center"
      justify="center"
    >
      {day}
    </Flex>
  );
}
