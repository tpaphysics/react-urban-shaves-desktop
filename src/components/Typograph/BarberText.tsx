import { Text } from "@chakra-ui/react";
import { BarberTextProps } from "./BarberTextProps";

export function BarberText({
  children,
  color = "white",
  size = "md",
  fontWeight = "400",
  ...props
}: BarberTextProps) {
  return (
    <Text {...props} color={color} fontSize={size} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}
