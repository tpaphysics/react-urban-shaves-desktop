import { Icon, Text, TextProps, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";

interface BarberLinkProps extends TextProps {
  direction?: "left" | "right";
  color?: "white" | "orange";
}

const icon = {
  left: BsBoxArrowLeft,
  right: BsBoxArrowRight,
};

export function BarberLink({
  direction,
  children,
  color = "white",
  ...props
}: BarberLinkProps) {
  return (
    <Link to="profile">
      <HStack color="pink">
        {direction && (
          <Icon
            as={icon[direction]}
            fontSize="md"
            fontWeight="normal"
            color={color}
          />
        )}

        <Text {...props} fontSize="md" fontWeight="normal" color={color}>
          {children}
        </Text>
      </HStack>
    </Link>
  );
}
