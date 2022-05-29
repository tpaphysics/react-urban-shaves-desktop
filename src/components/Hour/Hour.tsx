import { HStack, Icon } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { BarberText } from "../Typograph/BarberText";
import { BarberTextProps } from "../Typograph/BarberTextProps";

interface HourProps {
  time: string;
  size: "small" | "large";
}

const sizes = {
  small: {
    fontSize: "md",
    color: "white",
  },
  large: {
    fontSize: "lg",
    color: "orangeFontHard",
  },
};

export function Hour({ time, size }: HourProps) {
  const { fontSize, color } = sizes[size];
  return (
    <HStack align="center" maxW="70px">
      <Icon as={BsClock} fontSize={fontSize} color="orange" />
      <BarberText
        size={fontSize as BarberTextProps["size"]}
        color={color as BarberTextProps["color"]}
      >
        {time}
      </BarberText>
    </HStack>
  );
}
