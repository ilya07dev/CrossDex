import { SERVER } from "./base";

export const allTokensUrl = (chainId:number) => `${SERVER}allTokens/${chainId}`;

export interface tokens1Inch {
    "symbol": string,
    "name": string,
    "decimals": number,
    "address": string,
    "logoURI": string,
    "tags": string[]
}