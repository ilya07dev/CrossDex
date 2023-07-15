import { SERVER } from "./base";

export const hotTokensUrl = (chainId:number) => `${SERVER}trending/${chainId}`;