import {SERVER } from "./base";

export const infoTokenUrl = (address:string,chainId:number) => `${SERVER}infoToken/${address}/${chainId}`;