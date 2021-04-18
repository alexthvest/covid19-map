import { CountryCovidStatus, CovidStatus, CovidSummary } from "~/models";

export async function fetchCovidStatus(): Promise<CovidSummary | undefined> {
  try {
    const response = await fetch("/api/summary");
    return response.ok ? response.json() : undefined;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchCountryStatusByDate(
  iso2: string,
  date: Date
): Promise<CountryCovidStatus<CovidStatus>[] | undefined> {
  try {
    const toDate = new Date(date);
    toDate.setDate(toDate.getDate() + 1);

    const response = await fetch(`/api/country/${iso2}?from=${date.toISOString()}&to${toDate.toISOString()}`);
    return response.ok ? response.json() : undefined;
  } catch (e) {
    console.error(e);
  }
}
