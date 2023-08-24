import { utils } from "ethers";
import { SERVER } from "./base";

export const txUserUrl = (address:string, chainId:number) => {

    return `${SERVER}approvals/${utils.hexlify(chainId)}/${address}`
};