import React, { SVGProps } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  ComposableMapProps,
  ZoomableGroup,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";

import { Country, WorldMapFeature } from "~/models";
import worldMapData from "~/map-data/world-50m.json";

export type WorldMapFeatureProps = Pick<SVGProps<SVGPathElement>, Exclude<keyof SVGProps<SVGPathElement>, "style">> & {
  label?: string;
};

export type WorldMapContainerProps = ComposableMapProps & {
  handleFeatureRender: (feature: WorldMapFeature<Country>) => WorldMapFeatureProps;
};

export const WorldMapContainer: React.FC<WorldMapContainerProps> = ({ handleFeatureRender, ...props }) => {
  const renderGeographyFeature = (feature: WorldMapFeature<Country>) => {
    const centroid = geoCentroid(feature);
    const featureProps = handleFeatureRender(feature);

    return (
      <>
        <Geography key={feature.rsmKey} geography={feature} {...featureProps} />
        <g key={feature.rsmKey + "-name"}>
          <Marker coordinates={centroid}>
            <text y="2" fontSize={3} textAnchor="middle">
              {featureProps.label ?? feature.properties.name}
            </text>
          </Marker>
        </g>
      </>
    );
  };

  return (
    <ComposableMap height={500} {...props}>
      <ZoomableGroup zoom={1} maxZoom={3}>
        <Graticule stroke="#E4E5E6" strokeWidth={0.4} />
        <Geographies geography={worldMapData}>
          {({ geographies }) => geographies.map(renderGeographyFeature)}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};
