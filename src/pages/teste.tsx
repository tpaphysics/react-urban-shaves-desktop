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
  <BigAppointmentCard name="Thiago Pacheco" avatar="" time="16:00" mt="6" />
  <TimeLineText period="Morning" mt="12" />

  <SmallAppointmentCard mt="12" avatar="" name="Alex Ramos" time="08:00" />
  <SmallAppointmentCard mt="12" avatar="" name="Jeckson Rapola" time="10:00" />
  <TimeLineText period="Afternoon" mt="12" />

  <SmallAppointmentCard mt="12" avatar="" name="Alex Ramos" time="08:00" />
  <SmallAppointmentCard mt="12" avatar="" name="Jeckson Rapola" time="10:00" />
</Flex>;
