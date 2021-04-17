import React from "react";
import { Layer } from "leaflet";
import { MapContainerProps } from "react-leaflet";

import { WorldMapContainer } from "~/components/WorldMapContainer";
import { CountryFeature, CountryCovidStatus } from "~/models";
import { getCovidStatusColor, buildCovidTooltip } from "~/utils";

export type CovidMapProps = MapContainerProps & {
  data: CountryCovidStatus[];
};

export const CovidMap: React.FC<CovidMapProps> = ({ data, ...props }) => {
  const handleCountryRender = (feature: CountryFeature, layer: Layer) => {
    const status = data.find(status => status.CountryCode === feature.properties.iso_a2);

    const tooltip = buildCovidTooltip(feature.properties.name, status);
    layer.bindTooltip(tooltip);

    if (status) {
      layer.options.fillColor = getCovidStatusColor(status.TotalConfirmed);
      layer.options.fillOpacity = 0.7;
    }
  };

  return <WorldMapContainer handleCountryRender={handleCountryRender} {...props} />;
};
