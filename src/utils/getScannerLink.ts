type chainIds = 1 | 137 | 42161 | 56 | 10;

export function getScannerLink(chaindId: chainIds) {
  switch (chaindId) {
    case 1:
      return "https://etherscan.io/";
    case 137:
      return "https://polygonscan.com/";
    case 42161:
      return "https://arbiscan.io/";
    case 10:
      return "https://optimistic.etherscan.io/";
    case 56:
      return "https://bscscan.com/";
    default:
      return "https://etherscan.io/";
  }
}
