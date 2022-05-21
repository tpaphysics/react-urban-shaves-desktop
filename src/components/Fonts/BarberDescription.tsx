import { Text, TextProps } from "@chakra-ui/react";

export function BarberText({ children, ...props }: TextProps) {
  return (
    <Text {...props} fontSize="md" fontWeight="normal">
      {children}
    </Text>
  );
}
