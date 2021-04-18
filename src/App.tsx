import React, { useEffect, useState } from "react";

import { CovidMap } from "~/components/CovidMap";

import { CovidSummary } from "~/models";
import { fetchCovidStatus } from "~/api";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CovidSummary | undefined>();

  useEffect(() => {
    fetchCovidStatus().then(response => {
      setData(response);
      setLoading(false);
    });
  }, []);

  return <>{!loading && <CovidMap data={data} />}</>;
};
