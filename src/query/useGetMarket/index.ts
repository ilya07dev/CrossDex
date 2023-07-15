import axios from "axios";
import { MOCK_CHAIN_ID } from "config";
import { marketListUrl } from "query/apiUrl";
import { useQuery } from "react-query";
import { tokenMarket, tokenResultMarket, graphic } from "./type";
import { convertNumbers } from "utils";

export const useGetMarket = ():tokenResultMarket[] => {
    const {data } = useQuery(
        'marketTokens',
        () => axios.get(marketListUrl(MOCK_CHAIN_ID))
    );
    
    if(!data?.data?.pools?.data) return [];

    const tokens = data.data.pools.data.map((pool:tokenMarket, index:number) => {
        return {
            name:pool.token.name,
            symbol:pool.token.symbol,
            logo:`https://www.dextools.io/resources/tokens/logos/${pool.token.logo}`,
            price:convertNumbers(pool.price),
            price24h:convertNumbers((pool.price - pool.price24h) / pool.price24h * 100),
            holders:convertNumbers(pool.token.metrics.holders),
            txCount:convertNumbers(pool.token.metrics.txCount),
            mcap:pool.token.metrics.mcap ? convertNumbers(pool.token.metrics.mcap) : '...',
            volume24h:convertNumbers(pool.volume24h),
            volume24hBtc:convertNumbers(pool.volume24h / +(data.data.btcPrice)),
            swaps24h:convertNumbers(pool.swaps24h),
            graphic:[
                { time: 1642425322, value: 0 },
                { time: 1642511722, value: index * 5 },
                { time: 1642598122, value: index + 5 },
                { time: 1642598322, value: 4 },
                { time: 1642684522, value: 8.22863710677195e-12 },
                { time: 1642770922, value: index },
                { time: 1642857322, value: index + 1 },
                { time: 1642943722, value: 41 },
                { time: 1642945722, value: index },
                { time: 1643030122, value: index * 10 },
                { time: 1643116522, value: index * 4 },
                { time: 1643202922, value: 46 },
            ],
        }
    })


    return tokens;
}

export type { tokenResultMarket, graphic}