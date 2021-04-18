import { CovidSummary } from "~/models";

export async function fetchCovidSummary(): Promise<CovidSummary | undefined> {
  try {
    const response = await fetch("/api/summary");
    return response.ok ? response.json() : undefined;
  } catch (e) {
    console.error(e);
  }
}
