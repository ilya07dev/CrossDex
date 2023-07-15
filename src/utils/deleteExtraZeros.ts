export function deleteExtraZeros(
  num: number,
  toFixed = 4
  // minFixed = 0
): number {
  const str = Number(num).toFixed(toFixed);
  const stripped = str.replace(/\.?0+$/, "");
  if (stripped.indexOf(".") === -1) {
    return parseFloat(stripped);
  }
  const [int, dec] = stripped.split(".");
  if (dec.length > toFixed) {
    return parseFloat(`${int}.${dec.slice(0, toFixed)}`);
  }
  return parseFloat(stripped);
  //parseFloat(stripped + "0".repeat(minFixed - dec.length) + "1")
}
