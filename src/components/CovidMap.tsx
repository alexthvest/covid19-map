import React from "react";

import { WorldMapContainer, WorldMapFeatureProps } from "~/components/WorldMapContainer";
import { WorldMapFeature, CountryCovidStatus, Country } from "~/models";
import { getCovidStatusColor, roundNumber } from "~/utils";
import { ComposableMapProps } from "react-simple-maps";

export type CovidMapProps = ComposableMapProps & {
  data: CountryCovidStatus[];
};

export const CovidMap: React.FC<CovidMapProps> = ({ data, ...props }) => {
  const handleCountryRender = (feature: WorldMapFeature<Country>): WorldMapFeatureProps => {
    const status = data.find(status => status.CountryCode === feature.properties.iso_a2);

    return {
      label: `${feature.properties.name} - ${status ? roundNumber(status.TotalConfirmed) : "?"}`,
      fill: getCovidStatusColor(status?.TotalConfirmed ?? 0),
      stroke: "#20202010",
    };
  };

  return <WorldMapContainer handleFeatureRender={handleCountryRender} {...props} />;
};
