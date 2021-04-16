import React, { useEffect } from "react";
import { Layer } from "leaflet";

import { WorldMapContainer } from "~/components/WorldMapContainer";
import { CountryFeature } from "~/models";

import axios from "axios";

export interface CountryStatus {
  country: string;
  lastUpdate: string;
  cases: number;
  deaths: number;
  recovered: number;
}

export const App: React.FC = () => {
  useEffect(() => {
    axios.get("https://covid19-api.org/api/status/", {}).then(console.log);
  }, []);

  const handleCountryRender = (country: CountryFeature, layer: Layer) => {
    if (country.properties.iso_a2 === "RU") {
      layer.options.fillColor = "#0000ff";
    }

    if (country.properties.iso_a2 === "US") {
      layer.options.fillColor = "#00ff00";
    }
  };

  return <WorldMapContainer handleCountryRender={handleCountryRender} />;
};
