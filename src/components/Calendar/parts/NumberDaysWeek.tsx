import React from "react";
import LineDay from "./LineDay";

export default function NumberDaysWeek() {
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return <LineDay days={days} bgDays="black.shape" colorDays="white" />;
}
