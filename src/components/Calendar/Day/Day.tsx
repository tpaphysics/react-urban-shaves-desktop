import { Button, ButtonProps } from "@chakra-ui/react";

interface DayProps extends ButtonProps {
  day: number;
  dayNow: number;
}

export function Day({ day, dayNow, bg = "black.shape", ...props }: DayProps) {
  return (
    <Button
      disabled={day < dayNow && true}
      autoFocus={dayNow === day && true}
      variant="none"
      size="sm"
      // autoFocus={dayNow === day && true}
      cursor={day > 0 ? "pointer" : "default"}
      {...props}
      _focus={{
        bg: day > 0 && "orange",
        color: day > 0 && "black.inputs",
      }}
      h="40px"
      w="40px"
      fontSize="md"
      fontWeight={dayNow === day ? "700" : "400"}
      borderRadius="10px"
      color={dayNow === day ? "black.inputs" : "white"}
      bg={day > 0 ? (dayNow === day ? "gray.normal" : bg) : "black.inputs"}
      align="center"
      justify="center"
    >
      {day > 0 ? day : ""}
    </Button>
  );
}
