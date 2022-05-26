import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Day } from "../Day/Day";

interface MonthDaysPanel {
  lastDayOfMonth: number;
  primaryWeekDayOfMonth: number;
  cb: (day: number) => void;
  dayNow: number;
}

function MonthDaysPanel({
  lastDayOfMonth,
  primaryWeekDayOfMonth,
  dayNow,
  cb,
}: MonthDaysPanel) {
  const [array, setArray] = useState(
    Array.from({ length: lastDayOfMonth }, (v, i) => i + 1)
  );
  useEffect(() => {
    setArray(Array.from({ length: lastDayOfMonth }, (v, i) => i + 1));
    if (primaryWeekDayOfMonth >= 1) {
      const days = Array.from({ length: lastDayOfMonth }, (v, i) => i + 1);
      const complement = Array.from({ length: primaryWeekDayOfMonth }, () => 0);
      setArray([...complement, ...days]);
      console.log(Array.from({ length: lastDayOfMonth }, (v, i) => i + 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primaryWeekDayOfMonth, cb]);

  return (
    <Flex
      flexWrap="wrap"
      w="360px"
      gap="2"
      p="4"
      bg="black.medium"
      borderBottomRadius="10px"
    >
      {array.map((day) => (
        <Day
          day={day}
          key={day}
          dayNow={dayNow}
          // eslint-disable-next-line consistent-return
          onClick={() => {
            if (day > 0) {
              return cb(day);
            }
          }}
        />
      ))}
    </Flex>
  );
}

export default MonthDaysPanel;
