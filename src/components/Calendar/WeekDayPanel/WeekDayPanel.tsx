import { Flex } from "@chakra-ui/react";
import { WeekDay } from "../Day/WeekDay";

interface MonthDaysPanel {
  weekDays: string[];
  weekDay: number;
}

export function WeekDayPanel({ weekDays, weekDay }: MonthDaysPanel) {
  return (
    <Flex
      flexWrap="wrap"
      w="360px"
      gap="2"
      px="4"
      paddingTop="2"
      bg="black.medium"
    >
      {weekDays.map((day, index) => (
        <WeekDay
          day={day}
          bg="transparent"
          color={index === weekDay ? "orange" : "gray.hard"}
        />
      ))}
    </Flex>
  );
}
