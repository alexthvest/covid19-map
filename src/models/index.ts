import { Feature, Geometry } from "geojson";

export interface Country {
  name: string;
  iso_a2: string;
  iso_a3: string;
  iso_n3: string;
}

export type CountryFeature = Feature<Geometry, Country>;
