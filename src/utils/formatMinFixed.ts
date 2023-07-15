export function formatMinFixed(value: number, min: number): string {
  const str = value.toString();
  const [int, dec] = str.split(".");
  if (dec === undefined) {
    return `${str}.${"0".repeat(min)}`;
  }

  if (dec.length >= min) {
    return str;
  }

  return `${int}.${dec.padEnd(min, "0")}`;
}
