export type MediaType =
  | "Ethereum"
  | "Tron"
  | "BSC"
  | "Solana"
  | "Bitcoin"
  | "Polygon"
  | "Twitter"
  | "Github"
  | "Discord"
  | "Telegram"
  | "Youtube"
  | "Email";

export function getMediaLink(type: MediaType, param: any) {
  if (!param) return "#";
  
  switch (type) {
    case "Ethereum":
      return `https://etherscan.io/address/${param}`;
    case "Tron":
      return `https://tronscan.org/#/address/${param}`;
    case "BSC":
      return `https://bscscan.com/address/${param}`;
    case "Solana":
      return `https://explorer.solana.com/address/${param}`;
    case "Bitcoin":
      return `https://www.blockchain.com/btc/address/${param}`;
    case "Polygon":
      return `https://polygonscan.com/address/${param}`;
    case "Twitter":
      return `https://twitter.com/${param}`;
    case "Github":
      return `https://github.com/${param}`;
    case "Discord":
      return `https://discord.com/users/${param}`;
    case "Telegram":
      return `https://t.me/${param}`;
    case "Youtube":
      return `https://www.youtube.com/channel/${param}`;
    case "Email":
      return `mailto:${param}`;
    default:
      return "#";
  }
}
