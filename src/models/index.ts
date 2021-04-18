import { Feature, Geometry } from "geojson";

export interface Country {
  name: string;
  iso_a2: string;
  iso_a3: string;
  iso_n3: string;
}

export type WorldMapFeature<T> = Feature<Geometry, T> & {
  rsmKey: string;
};

export interface CovidStatus {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CountryCovidStatus extends CovidStatus {
  CountryCode: string;
}

export interface CovidSummary {
  Global: CovidStatus;
  Countries: CountryCovidStatus[];
}
