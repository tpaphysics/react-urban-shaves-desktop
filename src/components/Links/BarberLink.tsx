import { Icon, Text, TextProps, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";

interface BarberLinkProps extends TextProps {
  direction?: "left" | "right";
  color?: "white" | "orange";
  to: string;
}

const icon = {
  left: BsBoxArrowLeft,
  right: BsBoxArrowRight,
};

export function BarberLink({
  direction,
  children,
  to,
  color = "white",
  ...props
}: BarberLinkProps) {
  return (
    <Box {...props}>
      <Link to={to}>
        <HStack color="pink">
          {direction && (
            <Icon
              as={icon[direction]}
              fontSize="md"
              fontWeight="normal"
              color={color}
            />
          )}

          <Text fontSize="md" fontWeight="normal" color={color}>
            {children}
          </Text>
        </HStack>
      </Link>
    </Box>
  );
}
