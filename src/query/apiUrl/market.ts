import { SERVER } from "./base";
import { convertChainMarket } from "utils/convertChain";

export const marketListUrl = (chainId:number) => 
    `${SERVER}marketList/${convertChainMarket(chainId)}`;

export const marketLoosersUrl = (chainId:number) => 
    `${SERVER}marketLoosers/${convertChainMarket(chainId)}`;

export const marketGainersUrl = (chainId:number) => 
    `${SERVER}marketGainers/${convertChainMarket(chainId)}`;