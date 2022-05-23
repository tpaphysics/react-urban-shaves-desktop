import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HeaderCalendar } from "../components/Calendar/parts/HeaderCalendar";
import { DaysWeek } from "../components/Calendar/parts/DaysWeek";
import { MonthDays } from "../components/Calendar/parts/monthDays";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const month = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function Profile() {
  // const [month, setMonth] = useState([]);
  // const [monthDays, setMonthDays] = useState([]);
  // useEffect(() => {}, []);

  return (
    <Box paddingBottom="14px" bg="black.medium" h="100%" w="359px">
      <HeaderCalendar month={month[2]} />
      <Flex flexDir="column" alignItems="center" justify="center">
        <DaysWeek days={weekDays} py="5" paddingBottom="10px" weekDay={3} />
        <MonthDays
          days={days}
          bgDays="black.shape"
          colorDays="white"
          monthDay="6"
        />
      </Flex>
    </Box>
  );
}
