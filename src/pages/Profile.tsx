import React from "react";
import {
  BigAppointmentCard,
  SmallAppointmentCard,
} from "../components/AppointmentsCards/SmallAppointmentCard";

export default function Profile() {
  return (
    <SmallAppointmentCard
      avatar="https://avatars.githubusercontent.com/u/46402647?v=4"
      name="Thiago Pacheco"
      time="08:00"
    />
  );
}
