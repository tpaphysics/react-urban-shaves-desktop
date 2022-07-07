import { Avatar, AvatarGroup, Flex, Stack, StackProps, Text } from '@chakra-ui/react';
import React from 'react';

interface AvatarElement {
  name: string;
  url: string;
}

interface AvatarsProps extends StackProps {
  avatars: AvatarElement[];
  avatarSize: string;
}

export default function Avatars({ avatars, avatarSize, ...props }: AvatarsProps) {
  return (
    <Stack
      {...props}
      direction="row"
      spacing={1}
      align="center"
      // bg="#573C41"
      borderRadius="10px">
      <AvatarGroup {...props}>
        {avatars.map((avatar) => (
          <Avatar
            borderColor="orange"
            key={avatar.name}
            name={avatar.name}
            src={avatar.url}
            size={avatarSize}
            position="relative"
            zIndex={2}
            _before={{
              content: '""',
              width: 'full',
              height: 'full',
              rounded: 'full',
              transform: 'scale(1.125)',
              bgGradient: 'linear(to-bl, orange.400,yellow.400)',
              position: 'absolute',
              zIndex: -1,
              top: 0,
              left: 0,
            }}
          />
        ))}
      </AvatarGroup>
      <Text fontFamily="cursive" color="orange" fontSize={{ base: '2xl', md: '4xl' }}>
        +
      </Text>

      <Flex
        border="2px"
        borderColor="#E6D1AB"
        align="center"
        justify="center"
        fontFamily="heading"
        fontSize={{ base: 'xs', md: 'xs' }}
        bg="black.inputs"
        color="orangeFont"
        rounded="full"
        width={{ base: '48px', md: '48px' }}
        height={{ base: '48px', md: '48px' }}
        position="relative"
        _before={{
          content: '""',
          width: 'full',
          height: 'full',
          rounded: 'full',
          transform: 'scale(1.125)',
          bgGradient: 'linear(to-bl, orange.400,yellow.400)',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
        }}>
        You
      </Flex>
    </Stack>
  );
}
