import React, { useEffect, useState } from "react";
import { Layer } from "leaflet";

import { WorldMapContainer } from "~/components/WorldMapContainer";
import { CalendarSidebar } from "~/components/CalendarSidebar";

import { CountryFeature, CountryStatus } from "~/models";
import { fetchCovidStatuses, getCovidStatusColor } from "~/utils";

export const App: React.FC = () => {
  const [statuses, setStatuses] = useState<CountryStatus[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCovidStatuses().then(response => {
      setStatuses(response);
      setLoading(false);
    });
  }, []);

  const handleCountryRender = (feature: CountryFeature, layer: Layer) => {
    const status = statuses?.find(status => status.country === feature.properties.iso_a2);

    if (status) {
      const tooltip = [
        `<h2 class="text-lg font-bold">${feature.properties.name}</h2>`,
        `<span class="font-semibold">Cases:</span> ${status.cases}`,
        `<span class="font-semibold">Deaths:</span> ${status.deaths}`,
        `<span class="font-semibold">Recovered:</span> ${status.recovered}`,
      ].join("<br>");

      layer.bindTooltip(tooltip, { direction: "top", sticky: true });

      layer.options.fillColor = getCovidStatusColor(Date.now() / 10000000);
      layer.options.fillOpacity = 0.4;
    }
  };

  return (
    <>
      {!loading && (
        <div className="flex">
          <WorldMapContainer handleCountryRender={handleCountryRender} />
          <CalendarSidebar />
        </div>
      )}
    </>
  );
};
