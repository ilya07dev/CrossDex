
export interface NetworksI {
    name: string;
    symbol: string,
    icon: string;
    chain:number;
}

export const chainsActive:NetworksI[] = [
    {
        name: "Ethereum",
        symbol: "ETH",
        icon: "https://cdn.via.exchange/networks/Ethereum.svg",
        chain:1,
    },

    {
        name: "Polygon",
        symbol: "MATIC",
        icon: "https://cdn.via.exchange/networks/Polygon.svg",
        chain:137,
    },
    
    
    {
        name: "BNB",
        symbol: "BSC",
        icon: "https://cdn.via.exchange/networks/BSC.svg",
        chain:56,
    },
]

export const chainsActiveId:Record<string, NetworksI> = {
    "1":chainsActive[0],
    "137":chainsActive[1],
    "56":chainsActive[2],
}