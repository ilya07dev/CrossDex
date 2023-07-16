

export function getScannerLink(chaindId: number) {
  switch (chaindId) {
    case 1:
      return "https://etherscan.io/";
    case 137:
      return "https://polygonscan.com/";
    case 56:
      return "https://bscscan.com/";
    default:
      return "https://etherscan.io/";
  }
}
