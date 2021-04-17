export function getCovidStatusColor(cases: number): string {
  cases /= 10000;

  if (cases > 55) return "#7A1E0F";
  if (cases > 45) return "#A91918";
  if (cases > 35) return "#E73A33";
  if (cases > 25) return "#E4EEF7";
  if (cases > 15) return "#F0886F";
  if (cases > 5) return "#FBE7E0";

  return "#E0E0E0";
}
