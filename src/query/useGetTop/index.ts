import axios from "axios";
import { useQuery } from "react-query";
import { looserToken } from "./type";
import { tokensType } from "components/MarketComponens/components/MarketTable/Components/Categories/config";

import { convertToCorrectChains } from "utils/convertCorrectChains";
import { convertLinkImg } from "utils/convertLinkimg";
import { useStore } from "effector-react";
import { $choseChain } from "config/stateChain";


export const useGetTops = (
    key:string,
    query:(chainId:number) => string
) => {
    const chain = useStore($choseChain);
    const chainCurrent = convertToCorrectChains(chain);
    const {data } = useQuery(
        key,
        () => axios.get(query(chainCurrent)),
        {
            refetchOnWindowFocus: false,
        }
    );
    
    if(!data?.data) return [];
    const responseTops:looserToken[] = data.data.data
    const tokensTop:tokensType[] = [];

    if(!responseTops?.length) return [];

    responseTops?.forEach((token:looserToken, index:number) => {
        if(index > 2) return null
        console.log((token.priceDiff / 100), )
        
        tokensTop.push({
            name:token.token.symbol,
            logo:convertLinkImg(token.token.reprPair.id.token),
            changeToken:token.price * token.priceDiff / 100,
            changePercent:token.priceDiff,
            address:token.token.reprPair.id.pair,
        })
    })



    return tokensTop;
}