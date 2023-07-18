import { trendsTokens, useGetTrends } from "query/useGetTrends";
import { useEffect, useState } from "react";
import { tokensType } from "../config";
import { useSearchToken, searchToken } from "query/useSearchToken";
import { convertLinkImg } from "utils/convertLinkimg";


export const useGetInfoTrends = () => {
    const trends:trendsTokens[] = useGetTrends();
    const searchTokenInfo = useSearchToken();

    const [tokenInfo, setTokenInfo] = useState<tokensType[]>([])

    useEffect(() => {

        async function getTokenArray() {
            
            trends.forEach(async (trend:trendsTokens, index) => {
                if(index > 2) return;
                const searchTokens:searchToken[] = await searchTokenInfo(trend.address);
                const infoToken:searchToken = searchTokens[0];


                const result = {
                    name:infoToken.baseTokenSymbol,
                    logo:convertLinkImg(infoToken.baseToken),
                    changeToken: infoToken.priceUsd + (infoToken.priceChange24h / 100),
                    changePercent:+infoToken.priceChange24h,
                    address:infoToken.address,
                }


                setTokenInfo((prevState:tokensType[]) => [...prevState, result])
            })
    
        }

        getTokenArray()
    }, [trends])

    return tokenInfo;
}
