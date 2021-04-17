import React, { useEffect, useState } from "react";

import { CalendarSidebar } from "~/components/CalendarSidebar";
import { CovidMap } from "~/components/CovidMap";

import { CountryStatus } from "~/models";
import { fetchCovidStatuses } from "~/api";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CountryStatus[] | undefined>([
    {
      country: "RU",
      deaths: 1000,
      cases: 1000,
      recovered: 1000,
      lastUpdate: new Date().toLocaleString(),
    },
  ]);

  useEffect(() => {
    // fetchCovidStatuses().then(response => {
    //   setData(response);
    //   setLoading(false);
    // });
  }, []);

  return (
    <>
      {!loading && (
        <div className="flex">
          <CovidMap data={data ?? []} />
          <CalendarSidebar />
        </div>
      )}
    </>
  );
};
