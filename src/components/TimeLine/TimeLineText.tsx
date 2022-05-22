import { Box, StackProps, VStack } from "@chakra-ui/react";
import { BarberText } from "../Typograph/BarberText";

interface TimeLineText extends StackProps {
  period: "Manhã" | "Tarde" | "Noite";
}

export function TimeLineText({ period, ...props }: TimeLineText) {
  return (
    <VStack w="100%" maxW="640px" align="left" spacing="4" {...props}>
      <BarberText color="gray" fontWeight="400" size="lg">
        {period}
      </BarberText>
      <Box w="100%" maxW="640px" h="1px" bg="black.shape" />
    </VStack>
  );
}
