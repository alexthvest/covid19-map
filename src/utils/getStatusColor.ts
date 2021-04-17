export function getCovidStatusColor(cases: number): string {
  cases /= 10000;

  if (cases >= 55) return "#8E2511";
  if (cases >= 45) return "#B81D1C";
  if (cases >= 35) return "#E73A33";
  if (cases >= 25) return "#DE4E47";
  if (cases >= 15) return "#F0886F";
  if (cases >= 5) return "#FBE7E0";

  return "#E0E0E0";
}
