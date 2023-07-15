export function extraShortenAddress(address: string, length = 2) {
  return `${address.slice(0, 2 + length)}`.toLowerCase();
}


export function formattedAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`.toLowerCase();
}
