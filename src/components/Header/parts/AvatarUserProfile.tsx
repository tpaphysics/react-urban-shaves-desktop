/* eslint-disable import/named */
import {
  Avatar,
  HStack,
  StackProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BarberText } from "../../Typograph/BarberText";
import { BarberTextProps } from "../../Typograph/BarberTextProps";

interface AvatarUserProfileProps extends StackProps {
  name: string;
  message?: string;
  avatar: string;
  type: "header" | "BigCard" | "SmallCard";
}

const sizes = {
  header: {
    avatarSize: "lg",
    fontSize: "md",
    spacing: "4",
  },
  SmallCard: {
    avatarSize: "lg",
    fontSize: "lg",
    spacing: "4",
  },
  BigCard: {
    avatarSize: "xl",
    fontSize: "2xl",
    spacing: "6",
  },
};

export function AvatarUserProfile({
  avatar,
  name,
  message,
  type,
  ...props
}: AvatarUserProfileProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { avatarSize, fontSize, spacing } = sizes[type];
  return (
    <HStack spacing={spacing} {...props}>
      <Avatar
        name={name}
        src={avatar}
        size={isWideVersion ? avatarSize : "lg"}
        filter="grayscale(75)"
      />
      <VStack align="left" spacing="0">
        {type === "header" && <BarberText>{message}</BarberText>}

        <BarberText
          size={isWideVersion ? (fontSize as BarberTextProps["size"]) : "lg"}
          color={type === "header" ? "orange" : "white"}
          fontWeight="700"
        >
          {name}
        </BarberText>
      </VStack>
    </HStack>
  );
}
