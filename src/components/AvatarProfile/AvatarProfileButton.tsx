import { Flex, Avatar, AvatarBadge, Icon } from '@chakra-ui/react';
import { AiOutlineCamera } from 'react-icons/ai';

interface AvatarProfileButtonProps {
  src: string;
  onClick: () => void;
}

export default function AvatarProfileButton({ src, onClick }: AvatarProfileButtonProps) {
  return (
    <Flex w="100%" justify="center" mb="8">
      <Avatar
        size="2xl"
        position="relative"
        name="Richard"
        src={src}
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
        <input type="file" />
      </Avatar>
    </Flex>
  );
}
