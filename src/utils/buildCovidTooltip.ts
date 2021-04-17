import { CountryStatus } from "~/models";
import { Tooltip } from "leaflet";

export function buildCovidTooltip(country: string, status: CountryStatus | undefined): Tooltip {
  const tooltip = new Tooltip({ sticky: true, direction: "top" });

  const content = [
    `<h2 class="text-lg font-bold">${country}</h2>`,
    `<span class="font-semibold">Cases:</span> ${status?.cases ?? "?"}`,
    `<span class="font-semibold">Deaths:</span> ${status?.deaths ?? "?"}`,
    `<span class="font-semibold">Recovered:</span> ${status?.recovered ?? "?"}`,
  ].join("<br>");

  return tooltip.setContent(content);
}
