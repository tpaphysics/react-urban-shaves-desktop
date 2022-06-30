import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { PuffLoader } from "react-spinners";
import { colors } from "../../theme/config/colors";

export default function BarberButton({ children, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      spinner={<PuffLoader size={28} color={colors.black.background} />}
    >
      {children}
    </Button>
  );
}
