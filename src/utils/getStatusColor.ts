export function getCovidStatusColor(cases: number): string {
  cases /= 10_000;

  if (cases >= 100) return "#B81D1C";
  if (cases >= 65) return "#8E2511";
  if (cases >= 55) return "#E73A33";
  if (cases >= 35) return "#DE4E47";
  if (cases >= 15) return "#EA6442";
  if (cases >= 2) return "#DE6A48";

  return "#E0E0E0";
}
