export function roundNumber(n: number): string {
  if (n > 1000000000) {
    return Math.round(n / 100000000) / 10 + "Bn";
  }

  if (n > 1000000) {
    return Math.round(n / 100000) / 10 + "M";
  }

  return Math.round(n / 100) / 10 + "K";
}
