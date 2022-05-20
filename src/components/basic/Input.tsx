import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

import { FiUser, FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

interface BarberInputProps extends InputProps {
  id: string;
  isPassword?: boolean;
  iconType: "user" | "email" | "lock";
  eyerIconColor?: boolean;
}

const iconsOptions = {
  user: FiUser,
  email: FiMail,
  lock: FiLock,
};

export function BarberInput({
  isPassword = false,
  iconType,
  type,
  ...props
}: BarberInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        height="100%"
        children={
          <Icon
            as={iconsOptions[iconType]}
            color={isFocused ? "orange" : "gray.hard"}
          />
        }
      />
      <Input
        {...props}
        type={isPassword ? (isVisiblePassword ? "text" : "password") : type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isPassword && (
        <InputRightElement
          height="100%"
          onClick={() => setIsVisiblePassword(!isVisiblePassword)}
          children={
            <Icon as={isVisiblePassword ? FiEyeOff : FiEye} color="gray.hard" />
          }
        />
      )}
    </InputGroup>
  );
}
