import React, { useState } from "react";

import { WorldMapContainer, WorldMapFeatureProps } from "~/components/WorldMapContainer";
import { WorldMapFeature, CountryCovidStatus, Country, CovidSummary, TotalCovidStatus } from "~/models";
import { getCovidStatusColor, roundNumber } from "~/utils";
import { ComposableMapProps } from "react-simple-maps";
import { CalendarSidebar } from "~/components/CalendarSidebar";

export type CovidMapProps = ComposableMapProps & {
  data?: CovidSummary;
};

export const CovidMap: React.FC<CovidMapProps> = ({ data, ...props }) => {
  const [countryStatus, setCountryStatus] = useState<CountryCovidStatus<TotalCovidStatus> | undefined>(
    data && {
      Country: "World",
      CountryCode: "WD",
      ...data.Global,
    }
  );

  const handleCountryRender = (feature: WorldMapFeature<Country>): WorldMapFeatureProps => {
    const status = data?.Countries.find(status => status.CountryCode === feature.properties.iso_a2);

    return {
      label: `${feature.properties.name} - ${status ? roundNumber(status.TotalConfirmed) : "?"}`,
      fill: getCovidStatusColor(status?.TotalConfirmed ?? 0),
      stroke: "#20202010",
      onClick: () => setCountryStatus(status),
    };
  };

  return (
    <div className="flex w-full h-screen">
      <WorldMapContainer handleFeatureRender={handleCountryRender} {...props} />
      <CalendarSidebar status={countryStatus} setStatus={setCountryStatus} />
    </div>
  );
};
