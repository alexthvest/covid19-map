import React from "react";
import { Layer } from "leaflet";
import { MapContainer, MapContainerProps, GeoJSON } from "react-leaflet";

import { CountryFeature } from "~/models";
import worldMapData from "~/map-data/world-50m.json";

export type WorldMapContainerProps = MapContainerProps & {
  handleCountryRender: (feature: CountryFeature, layer: Layer) => void;
};

export const WorldMapContainer: React.FC<WorldMapContainerProps> = ({ handleCountryRender, children, ...props }) => {
  return (
    <MapContainer className="w-full h-screen" center={[50, 0]} zoom={3} minZoom={2} maxZoom={4} {...props}>
      <GeoJSON
        data={worldMapData}
        onEachFeature={handleCountryRender}
        style={{
          color: "#202020",
          weight: 0.3,
        }}
      />
      {children}
    </MapContainer>
  );
};
