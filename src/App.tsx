import React, { useEffect, useState } from "react";

import { CalendarSidebar } from "~/components/CalendarSidebar";
import { CovidMap } from "~/components/CovidMap";

import { CountryCovidStatus } from "~/models";
import { fetchCovidSummary } from "~/api";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CountryCovidStatus[] | undefined>([]);

  useEffect(() => {
    fetchCovidSummary().then(response => {
      setData(response?.Countries);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <div className="flex h-screen">
          <CovidMap data={data ?? []} />
          <CalendarSidebar />
        </div>
      )}
    </>
  );
};
