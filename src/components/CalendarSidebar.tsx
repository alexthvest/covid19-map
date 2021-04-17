import React, { useState } from "react";
import DayPicker from "react-day-picker";

const __COVID_PERIOD__ = {
  before: new Date(2019, 11, 31),
  after: new Date(),
};

export const CalendarSidebar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="flex flex-col items-center p-4 py-8 z-10 shadow">
      <h1 className="text-lg font-semibold mb-8">Back in Time</h1>
      <DayPicker selectedDays={date} onDayClick={setDate} disabledDays={__COVID_PERIOD__} />
    </div>
  );
};
