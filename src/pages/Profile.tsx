import { VStack, Flex, useBreakpointValue, Box } from "@chakra-ui/react";
import React from "react";
import { BigAppointmentCard } from "../components/AppointmentsCards/BigAppointmentCard copy";
import { SmallAppointmentCard } from "../components/AppointmentsCards/SmallAppointmentCard";
import Calendar from "../components/Calendar/Calendar";
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
      {isWideVersion && (
        <Header
          name="Richard"
          avatar="https://i.pravatar.cc/400?img=11"
          message="Be Welcome"
        />
      )}
      <Flex
        flex="1"
        w="100%"
        minW="100vw"
        m="0 auto"
        px={{ base: 2, sm: 4, lg: 0 }}
        py={{ base: 2, sm: 4, lg: 0 }}
      >
        <Flex
          w={isWideVersion ? "50%" : "100%"}
          flexDir="column"
          py={{ lg: "16" }}
          paddingLeft={{ lg: "40" }}
          alignItems="center"
        >
          <Box w="100%" maxW="520px" minW={{ lg: "420px" }} alignItems="center">
            {!isWideVersion && (
              <Flex my="16" align="center" flexDir="column">
                <Calendar />
              </Flex>
            )}
            <BarberText size="4xl" color="orangeFont">
              Appointments
            </BarberText>
            <DateText />
            <TimeLineText period="Next service" mt="12" />

            <BigAppointmentCard
              name="Joseph Neto"
              avatar="https://i.pravatar.cc/400?img=13"
              time="16:00"
              mt="6"
            />

            <TimeLineText period="Morning" mt="12" />

            <SmallAppointmentCard
              mt="12"
              avatar="https://i.pravatar.cc/400?img=51"
              name="Alex Ramos"
              time="08:00"
            />
            <SmallAppointmentCard
              mt="12"
              avatar="https://i.pravatar.cc/256?u=a"
              name="Eric Rapolla"
              time="10:00"
            />
            <TimeLineText period="Afternoon" mt="12" />

            <SmallAppointmentCard
              mt="12"
              avatar="https://i.pravatar.cc/150?u=10o"
              name="Brian James"
              time="08:00"
            />
            <SmallAppointmentCard
              mt="12"
              avatar="https://i.pravatar.cc/150?u=a042581f4e290267"
              name="Lery Willians"
              time="10:00"
            />
          </Box>
        </Flex>
        <Flex
          w="50%"
          flexDir="column"
          py="16"
          paddingLeft="40"
          display={!isWideVersion ? "none" : "flex"}
        >
          <Calendar />
        </Flex>
      </Flex>
    </VStack>
  );
}

export default Profile;
