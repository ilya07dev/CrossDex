

export const allTokensUrl = (chainId:number) => `https://api.1inch.io/v5.0/${chainId}/tokens`;

export interface tokens1Inch {
    "symbol": string,
    "name": string,
    "decimals": number,
    "address": string,
    "logoURI": string,
    "tags": string[]
}