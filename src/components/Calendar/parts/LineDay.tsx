import { Flex, HStack, StackProps } from "@chakra-ui/react";
import { BoxDay } from "./BoxDay";

interface LineDayProps extends StackProps {
  days: string[];
  bgDays?: string;
  colorDays?: string;
}

function LineDay({
  days,
  bgDays,

  colorDays,
  ...props
}: LineDayProps) {
  return (
    <Flex
      w="329px"
      bg="black.medium"
      alignItems="center"
      justifyContent="left"
      flexWrap="wrap"
      {...props}
      gap="2"
    >
      {days.map((element) => (
        <BoxDay
          day={element}
          bg={element ? bgDays : "black.medium"}
          color={colorDays}
        />
      ))}
    </Flex>
  );
}

export default LineDay;
