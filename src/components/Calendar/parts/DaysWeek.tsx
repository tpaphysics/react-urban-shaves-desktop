import { Flex, StackProps } from "@chakra-ui/react";
import { BoxDay } from "./BoxDay";

interface DaysWeekProps extends StackProps {
  days: string[];
  bgDays?: string;
  colorDays?: string;
  weekDay: number;
}

export function DaysWeek({
  days,
  bgDays,
  colorDays,
  weekDay,
  ...props
}: DaysWeekProps) {
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
      {days.map((element, index) => (
        <BoxDay
          day={element}
          bg={element && "black.medium"}
          color={index === weekDay ? "orange" : colorDays}
        />
      ))}
    </Flex>
  );
}
