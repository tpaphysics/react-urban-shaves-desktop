import { StackProps } from "@chakra-ui/react";

export interface AvatarUserProfileProps extends StackProps {
  name: string;
  message?: string;
  avatar: string;
  type: "header" | "BigCard" | "SmallCard";
}

export interface HeaderProps {
  name: string;
  avatar: string;
  message?: string;
}
