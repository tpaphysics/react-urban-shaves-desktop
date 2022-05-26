import { lastDayOfMonth } from "date-fns";
import React, { useEffect, useState } from "react";
import HeaderPanel from "./Header/HeaderPanel";
import MonthDaysPanel from "./MonthDaysPanel/MonthDaysPanel";
import { WeekDayPanel } from "./WeekDayPanel/WeekDayPanel";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

interface DataCalendar {
  year: number;
  month: number;
  lastDayMonth: number;
  primaryWeekDayOfMonth: number;
  weekDayNow: number;
  dayNow: number;
}
export default function Calendar() {
  const [data, setData] = useState<DataCalendar>({} as DataCalendar);
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const weekDayNow = date.getDay();
    const dayNow = date.getDate();
    const primaryDayOfMonth = new Date(year, month, 1);
    const primaryWeekDayOfMonth = primaryDayOfMonth.getDay();
    const lastDayMonth = lastDayOfMonth(date).getDate();

    setData({
      year,
      month,
      lastDayMonth,
      primaryWeekDayOfMonth,
      weekDayNow,
      dayNow,
    });
  }, []);

  return (
    <>
      <HeaderPanel month={months[data.month]} year={data.year} />
      <WeekDayPanel weekDays={weekDays} weekDay={data.weekDayNow} />
      <MonthDaysPanel
        dayNow={data.dayNow}
        lastDayOfMonth={data.lastDayMonth - 3}
        cb={(day) => console.log(day)}
        primaryWeekDayOfMonth={data.primaryWeekDayOfMonth} // Ter-Qua-Qui
      />
    </>
  );
}
