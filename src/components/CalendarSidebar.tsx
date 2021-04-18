import React, { useState } from "react";
import DayPicker from "react-day-picker";
import { CountryCovidStatus, TotalCovidStatus } from "~/models";
import { roundNumber } from "~/utils";
import { fetchCountryStatusByDate } from "~/api";

const __COVID_PERIOD__ = {
  before: new Date(2019, 11, 31),
  after: new Date(),
};

export interface CalendarSidebarProps {
  status: CountryCovidStatus<TotalCovidStatus> | undefined;
  setStatus(status: CountryCovidStatus<TotalCovidStatus> | undefined): void;
}

export const CalendarSidebar: React.FC<CalendarSidebarProps> = ({ status, setStatus }) => {
  const [date, setDate] = useState<Date>(new Date());

  const handleDayClick = (date: Date) => {
    setDate(date);

    if (status?.Country === "World") {
      return;
    }

    fetchCountryStatusByDate(status?.CountryCode ?? "RU", date).then(response => {
      if (!response) {
        return;
      }

      setStatus({
        ...response[0],
        TotalConfirmed: response[0].Confirmed,
        TotalDeaths: response[0].Deaths,
        TotalRecovered: response[0].Recovered,
      });
    });
  };

  return (
    <div className="flex flex-col px-6 py-8 z-10 shadow">
      <DayPicker selectedDays={date} onDayClick={handleDayClick} disabledDays={__COVID_PERIOD__} />
      <h1 className="text-xl font-semibold mt-8 mb-4">{status?.Country}</h1>
      <p>
        <span className="font-semibold">Cases:</span> {status ? roundNumber(status.TotalConfirmed) : "?"}
      </p>
      <p>
        <span className="font-semibold">Deaths:</span> {status ? roundNumber(status.TotalDeaths) : "?"}
      </p>
      <p>
        <span className="font-semibold">Recovered:</span> {status ? roundNumber(status.TotalRecovered) : "?"}
      </p>
    </div>
  );
};
