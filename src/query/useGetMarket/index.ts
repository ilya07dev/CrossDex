import axios from "axios";
import { useNetwork } from 'wagmi';
import { infoTokenUrl, marketListUrl } from "query/apiUrl";
import { useQuery } from "react-query";
import { tokenMarket, tokenResultMarket, graphic } from "./type";
import { convertNumbers } from "utils";
import { shortName } from "utils/shortName";
import { convertToCorrectChains } from "utils/convertCorrectChains";
import { useStore } from "effector-react";
import { $choseTokenMarket } from "pages/MarketPage/model";
import { convertLinkImg } from "utils/convertLinkimg";

export const useGetMarket = ():tokenResultMarket[] => {
    const {chain} = useNetwork();
    const chainCurrent = convertToCorrectChains(chain?.id);
    const choseToken = useStore($choseTokenMarket);

    const {data:searchToken } = useQuery(
        ['marketTokens', choseToken, chainCurrent],
        (args:any) => axios.get(infoTokenUrl(args.queryKey[1]?.pairAddress ?? '', args.queryKey[2])),
        {
            refetchOnWindowFocus: false,
        }
    );

    const {data } = useQuery(
        ['marketTokens', chainCurrent],
        (args:any) => axios.get(marketListUrl(args.queryKey[1])),
        {
            refetchOnWindowFocus: false,
        }
    );
    
    if(!data?.data?.pools?.data) return [];

    let tokens = [];
    const poolSearch = searchToken?.data?.pairs?.data
    if(poolSearch) {
        tokens = [{
            name:shortName(poolSearch.token0Name),
            symbol:poolSearch.token0Symbol,
            logo:convertLinkImg(poolSearch.baseTokenLogo, poolSearch.token0),
            price:convertNumbers(poolSearch.priceUsd),
            price24h:poolSearch.newInformation.priceChange24h,
            holders:'...',
            txCount:'...',
            mcap:'...',
            volume24h:convertNumbers(poolSearch.newInformation.volume24h),
            volume24hBtc:convertNumbers(poolSearch.newInformation.volume24h / +(data.data.btcPrice)),
            swaps24h:convertNumbers(poolSearch.newInformation.totalTransaction24h),
            address:poolSearch.address,
        }]
    } else {
        tokens = data.data.pools.data.map((pool:tokenMarket) => {
            return {
                name:shortName(pool.token.name),
                symbol:pool.token.symbol,
                logo:`https://www.dextools.io/resources/tokens/logos/${pool.token.logo}`,
                price:convertNumbers(pool.price),
                price24h:pool.price24h,
                holders:convertNumbers(pool.token.metrics.holders),
                txCount:convertNumbers(pool.token.metrics.txCount),
                mcap:pool.token.metrics.mcap ? convertNumbers(pool.token.metrics.mcap) : '...',
                volume24h:convertNumbers(pool.volume24h),
                volume24hBtc:convertNumbers(pool.volume24h / +(data.data.btcPrice)),
                swaps24h:convertNumbers(pool.swaps24h),
                address:pool._id.pair,
            }
        })
    }

    return tokens;
}

export type { tokenResultMarket, graphic}