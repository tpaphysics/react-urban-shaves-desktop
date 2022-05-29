import {
  HStack,
  VStack,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { BigAppointmentCard } from "../components/AppointmentsCards/BigAppointmentCard copy";
import { SmallAppointmentCard } from "../components/AppointmentsCards/SmallAppointmentCard";
import DateText from "../components/DateText/DateText";
import { Header } from "../components/Header";
import { TimeLineText } from "../components/TimeLine/TimeLineText";
import { BarberText } from "../components/Typograph/BarberText";

function Profile() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <VStack h="100%" w="100%" minH="100vh" minW="100vw" spacing="0">
      <Header
        name="Thiago Pacheco"
        avatar="https://avatars.githubusercontent.com/u/46402647?s=96&v=4"
        message="Be Welcome"
      />
      <HStack flex="1" w="100%" minW="100vw" spacing="0">
        <Flex
          h="100%"
          minH="calc(100vh - 144px)"
          w="50%"
          flexDir="column"
          py="16"
          paddingLeft="40"
          align="flex-start"
        >
          <BarberText size="4xl" color="orangeFont">
            Appointments
          </BarberText>
          <DateText />
          <TimeLineText period="Next service" mt="12" />
          <BigAppointmentCard
            name="Thiago Pacheco"
            avatar=""
            time="16:00"
            mt="6"
          />
          <TimeLineText period="Morning" mt="12" />

          <SmallAppointmentCard
            mt="12"
            avatar=""
            name="Alex Ramos"
            time="08:00"
          />
          <SmallAppointmentCard
            mt="12"
            avatar=""
            name="Jeckson Rapola"
            time="10:00"
          />
          <TimeLineText period="Afternoon" mt="12" />

          <SmallAppointmentCard
            mt="12"
            avatar=""
            name="Alex Ramos"
            time="08:00"
          />
          <SmallAppointmentCard
            mt="12"
            avatar=""
            name="Jeckson Rapola"
            time="10:00"
          />
        </Flex>
        <VStack
          display={!isWideVersion ? "none" : "flex"}
          h="100%"
          minH="calc(100vh - 144px)"
          w="50%"
          spacing="0"
        >
          <Text>Part1</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Profile;
