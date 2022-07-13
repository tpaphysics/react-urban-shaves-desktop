import { Flex, Avatar, AvatarBadge, Icon } from '@chakra-ui/react';
import { AiOutlineCamera } from 'react-icons/ai';

import useAuth from '../../hooks/Auth';

interface AvatarProfileButtonProps {
  onClick: () => void;
}

export default function AvatarProfileButton({ onClick }: AvatarProfileButtonProps) {
  const { currentUser: user } = useAuth();
  const { avatar } = user;
  return (
    <Flex w="100%" justify="center" mb="8">
      <Avatar
        size="2xl"
        position="relative"
        name="Richard"
        src={avatar}
        // filter="grayscale(75)"
      >
        <AvatarBadge
          boxSize="0.9em"
          bg="orange"
          border="none"
          cursor="pointer"
          onClick={onClick}
          children={<Icon as={AiOutlineCamera} w="6" color="black.background" />}
        />
      </Avatar>
    </Flex>
  );
}
