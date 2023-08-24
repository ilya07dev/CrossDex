
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $choseChain } from 'config/stateChain';
import { useGetTrends } from 'query/useGetTrends';
import { changeToken } from './stateChoseToken';

export const useNavigateToken = () => {
    const [query] = useSearchParams();
    const navigate = useNavigate();
    const chain = useStore($choseChain);
    const trends = useGetTrends()

    useEffect(() => {

        if(!trends[0]?.address) return;
        
        let pairAddressQuery = query.get("pairAddress");
        let network = query.get("network");

        // if(pairAddress !== "undefined" && pairAddress !== null ) {
        //     console.log(pairAddress)
        //     return;
        // }
        
        
        
        // if(!network || network === "undefined" || network === "null") {
        //     network = "1";
        // }

        // if(!pairAddress || pairAddress === "undefined" || pairAddress === "null" || pairAddress === null) {
        //     // @ts-ignore
        //     pairAddress = trends[0]?.address;
        // }  

        const pairAddress = pairAddressQuery?.toString()?.replace("undefined", trends[0]?.address) as string;
        console.log(trends[0]?.address)

        changeToken({
            pairAddress,
        })

        return navigate(`/?pairAddress=${pairAddress}&network=${network?.replace("undefined", "1")}`);
    }, [query,navigate,chain, trends])
}