import { CountryCovidStatus } from "~/models";
import { Tooltip } from "leaflet";

export function buildCovidTooltip(country: string, status: CountryCovidStatus | undefined): Tooltip {
  const tooltip = new Tooltip({ sticky: true, direction: "top" });

  const content = [
    `<h2 class="text-lg font-bold">${country}</h2>`,
    `<span class="font-semibold">Cases:</span> ${status?.TotalConfirmed ?? "?"}`,
    `<span class="font-semibold">Deaths:</span> ${status?.TotalDeaths ?? "?"}`,
    `<span class="font-semibold">Recovered:</span> ${status?.TotalRecovered ?? "?"}`,
  ].join("<br>");

  return tooltip.setContent(content);
}
