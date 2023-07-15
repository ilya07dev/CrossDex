import { SERVER } from "./base";

export const tradingTokensUrl = (address:string,chainId:number, time:string) => 
    `${SERVER}tradingTokens/${chainId}/${address}/${time}`;