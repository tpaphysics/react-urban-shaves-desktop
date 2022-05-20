import { ComponentStyleConfig } from "@chakra-ui/react";
import { colors } from "../config/colors";

const { orange, black, orangeHover } = colors;

export const Button: ComponentStyleConfig = {
  variants: {
    barber: {
      color: black.background,
      bg: orange,
      _hover: {
        bg: orangeHover,
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: "barber",
  },
};
