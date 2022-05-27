import { TextProps } from "@chakra-ui/react";

export interface BarberTextProps extends TextProps {
  color?: "white" | "gray" | "orange" | "orangeFont";
  size?: "md" | "lg" | "2xl" | "3xl" | "4xl";
  fontWeight?: "400" | "500" | "600" | "700";
}
