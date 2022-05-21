import { Text, TextProps } from "@chakra-ui/react";

export function BarberTextDescription({ children, ...props }: TextProps) {
  return (
    <Text {...props} fontWeight="bold" fontSize="3xl">
      {children}
    </Text>
  );
}
