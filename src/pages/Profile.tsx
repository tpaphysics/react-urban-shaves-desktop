import React from "react";
import { Hour } from "../components/Hour/Hour";
import { TimeLineText } from "../components/TimeLine/TimeLineText";

export default function Profile() {
  return (
    <>
      <TimeLineText period="Manhã" />
      <Hour time="08:00" size="large" />
    </>
  );
}
