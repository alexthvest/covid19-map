import { CovidSummary } from "~/models";

export async function fetchCovidSummary(): Promise<CovidSummary | undefined> {
  try {
    const response = await fetch("/api/summary");
    const summary = response.ok ? await response.json() : undefined;

    return summary as CovidSummary;
  } catch (e) {
    console.error(e);
  }
}
