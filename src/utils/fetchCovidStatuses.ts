import { CountryStatus } from "~/models";

export async function fetchCovidStatuses(): Promise<CountryStatus[] | undefined> {
  try {
    const response = await fetch("/api/status/");
    return response.ok ? response.json() : undefined;
  } catch (e) {
    console.error(e);
  }
}
