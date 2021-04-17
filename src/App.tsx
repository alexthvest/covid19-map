import React, { useEffect, useState } from "react";
import { Layer } from "leaflet";

import { WorldMapContainer } from "~/components/WorldMapContainer";
import { CountryFeature, CountryStatus } from "~/models";
import { getCovidStatusColor } from "~/utils/getStatusColor";

export const App: React.FC = () => {
  const [statuses, setStatuses] = useState<CountryStatus[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCovidStatuses().then(response => {
      setStatuses(response);
      setLoading(false);
    });
  }, []);

  const fetchCovidStatuses = async (): Promise<CountryStatus[]> => {
    const response = await fetch("/api/status/");

    if (!response.ok) {
      return [];
    }

    return response.json();
  };

  const handleCountryRender = (country: CountryFeature, layer: Layer) => {
    const status = statuses.find(status => status.country === country.properties.iso_a2);

    if (status) {
      layer.options.fillColor = getCovidStatusColor(status.cases);
      layer.options.fillOpacity = 0.9;
    }
  };

  return <>{!loading && <WorldMapContainer handleCountryRender={handleCountryRender} />}</>;
};
