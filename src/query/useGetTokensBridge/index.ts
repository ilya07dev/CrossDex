import axios from "axios";
import { getBridgeTokensUrl } from "query/apiUrl/bridge";
import { useQuery } from "wagmi";

export interface tokensBridge {
    "address": string,
    "chainId": number,
    "decimals": number,
    "name": string,
    "symbol": string,
    "logoURI": string,
}

export const useGetTokensBridge = () => {
    const {data:tokensBridge } = useQuery(
        ["tokensErc20Bridge"],
        () => axios.get(getBridgeTokensUrl()),
        {
            refetchOnWindowFocus: false,
        }
    );

    if(!tokensBridge?.data) return []

    return tokensBridge?.data;
}