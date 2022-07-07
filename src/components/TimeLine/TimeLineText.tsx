import { Box, StackProps, VStack } from '@chakra-ui/react';

import { BarberText } from '../Typograph/BarberText';

interface TimeLineTextProps extends StackProps {
  period: string;
}

export function TimeLineText({ period, ...props }: TimeLineTextProps) {
  return (
    <VStack w="100%" maxW="640px" align="left" spacing="4" {...props}>
      <BarberText color="orangeFontHard" fontWeight="400" size="lg">
        {period}
      </BarberText>
      <Box w="100%" maxW="640px" h="1px" bg="black.shape" />
    </VStack>
  );
}
