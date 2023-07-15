import axios from "axios";
import { MOCK_CHAIN_ID } from "config";
import { useQuery } from "react-query";
import { looserToken } from "./type";
import { tokensType } from "components/MarketComponens/components/MarketTable/Components/Categories/config";
import { convertNumbers } from "utils";


export const useGetTops = (
    key:string,
    query:(chainId:number) => string
) => {
    const {data } = useQuery(
        key,
        () => axios.get(query(MOCK_CHAIN_ID))
    );
    
    if(!data?.data) return [];
    const responseTops:looserToken[] = data.data.data
    const tokensTop:tokensType[] = [];

    responseTops.forEach((token:looserToken, index:number) => {
        if(index > 2) return null
        tokensTop.push({
            name:token.token.symbol,
            logo:`https://www.dextools.io/resources/tokens/logos/${token.token.logo}`,
            changeToken:convertNumbers(token.price - (token.priceDiff / 100 * token.price)),
            changePercent:convertNumbers(token.priceDiff),
        })
    })



    return tokensTop;
}