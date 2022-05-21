import { Icon, Text, TextProps, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/jsx-no-undef
interface BarberLinkProps extends TextProps {
  direction: "left" | "right";
}

const icon = {
  left: BsBoxArrowLeft,
  right: BsBoxArrowRight,
};

export function BarberLink({ direction, children, ...props }: BarberLinkProps) {
  return (
    <Link to="profile">
      <HStack>
        <Icon
          as={icon[direction]}
          fontSize="md"
          fontWeight="normal"
          color="orange"
        />

        <Text {...props} fontSize="md" fontWeight="normal" color="orange">
          {children}
        </Text>
      </HStack>
    </Link>
  );
}
