
import { trendsTokens, useGetTrends } from "query/useGetTrends";
import { useEffect, useState } from "react";
import { tokensType } from "../config";
import { useSearchToken, searchToken } from "query/useSearchToken";
import { mockTokenImage } from "mook/linkImg";
import { convertNumbers } from "utils/convertNumbers";


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
                    name:infoToken.baseTokenName,
                    logo:infoToken.baseTokenLogo || mockTokenImage,
                    changeToken:convertNumbers(infoToken.priceUsd - (infoToken.priceChange24h / 100) * infoToken.priceUsd ),
                    changePercent:+infoToken.priceChange24h.toFixed(2),
                }


                setTokenInfo((prevState:tokensType[]) => [...prevState, result])
            })
    
        }

        getTokenArray()
    }, [trends])

    return tokenInfo;
}