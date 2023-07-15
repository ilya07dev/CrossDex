export function shortenText(text: string, maxLength = 14) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 2)}...`;
}
