import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { addresses } from "../config";
import { changeToken } from "./stateChoseToken";


export const useSetTokenInfo = () => {

    const [query] = useSearchParams();
    
    useEffect(() => {
        const pairAddress = addresses["1"].pairAddress ?? query.get("pairAddress");
        const tokenAddress = addresses["1"].tokenAddress ?? query.get("tokenAddress");

        changeToken({
            pairAddress,
            tokenAddress,
        })
    }, [query])

}