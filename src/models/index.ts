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

export interface TotalCovidStatus {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidStatus {
  Confirmed: number;
  Deaths: number;
  Recovered: number;
}

export type CountryCovidStatus<T> = T & {
  Country: string;
  CountryCode: string;
};

export interface CovidSummary {
  Global: TotalCovidStatus;
  Countries: CountryCovidStatus<TotalCovidStatus>[];
}
