import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";

import data from "~/data/world-50m.json";

export const App: React.FC = () => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ width: "100%", height: "100vh" }}>
      <GeoJSON data={data} style={{ color: "#202020", weight: 0.6 }} />
    </MapContainer>
  );
};
