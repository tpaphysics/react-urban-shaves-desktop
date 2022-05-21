import { Text, TextProps } from "@chakra-ui/react";

interface WhiteTextProps extends TextProps {
  color?: "white" | "gray" | "orange";
  size?: "md" | "lg" | "2xl" | "4xl";
  fontWeight?: "400" | "500" | "600" | "700";
}
export function BarberText({
  children,
  color = "white",
  size = "md",
  fontWeight = "400",
  ...props
}: WhiteTextProps) {
  return (
    <Text {...props} color={color} fontSize={size} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}
