import { SERVER } from "./base";

export const searchTokensUrl = (text:string,chainId:number) => `${SERVER}searchTokens/${text}/${chainId}`;