import React from "react";
import { Layer } from "leaflet";
import { GeoJSON, MapContainer, MapContainerProps } from "react-leaflet";

import { CountryFeature } from "~/models";
import worldMapData from "~/data/world-50m.json";

const countryStyle = {
  color: "#202020",
  weight: 0.6,
};

type WorldMapContainerProps = MapContainerProps & {
  handleCountryRender: (country: CountryFeature, layer: Layer) => void;
};

export const WorldMapContainer: React.FC<WorldMapContainerProps> = ({ handleCountryRender, children, ...props }) => {
  return (
    <MapContainer center={[50, 0]} zoom={3} style={{ width: "100%", height: "100vh" }} {...props}>
      <GeoJSON data={worldMapData} style={countryStyle} onEachFeature={handleCountryRender} />
      {children}
    </MapContainer>
  );
};
