import axios from "axios";
import { useNetwork } from 'wagmi';
import { marketListUrl } from "query/apiUrl";
import { useQuery } from "react-query";
import { tokenMarket, tokenResultMarket, graphic } from "./type";
import { convertNumbers } from "utils";
import { shortName } from "utils/shortName";
import { convertToCorrectChains } from "utils/convertCorrectChains";

export const useGetMarket = ():tokenResultMarket[] => {
    const {chain} = useNetwork();
    const chainCurrent = convertToCorrectChains(chain?.id);
    const {data } = useQuery(
        'marketTokens',
        () => axios.get(marketListUrl(chainCurrent)),
        {
            refetchOnWindowFocus: false,
        }
    );
    
    if(!data?.data?.pools?.data) return [];

    const tokens = data.data.pools.data.map((pool:tokenMarket) => {
        return {
            name:shortName(pool.token.name),
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
            address:pool._id.pair,
        }
    })


    return tokens;
}

export type { tokenResultMarket, graphic}