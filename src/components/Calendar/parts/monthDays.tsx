import { Flex, StackProps } from "@chakra-ui/react";
import { BoxDay } from "./BoxDay";

interface MonthDaysProps extends StackProps {
  days: string[];
  bgDays?: string;
  colorDays?: string;
  monthDay: string;
}

export function MonthDays({
  days,
  bgDays,
  colorDays,
  monthDay,
  ...props
}: MonthDaysProps) {
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
          bg={
            element
              ? element === monthDay
                ? "orange"
                : bgDays
              : "black.medium"
          }
          color={element === monthDay ? "black.inputs" : colorDays}
        />
      ))}
    </Flex>
  );
}
