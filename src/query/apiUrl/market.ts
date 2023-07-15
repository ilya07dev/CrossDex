import { SERVER } from "./base";
import { convertChain } from "utils/convertChain";

export const marketListUrl = (chainId:number) => 
    `${SERVER}marketList/${convertChain(chainId)}`;

export const marketLoosersUrl = (chainId:number) => 
    `${SERVER}marketLoosers/${convertChain(chainId)}`;

export const marketGainersUrl = (chainId:number) => 
    `${SERVER}marketGainers/${convertChain(chainId)}`;