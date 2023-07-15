
import { useSearchParams, useNavigate } from 'react-router-dom';
import { mainnet, useNetwork } from 'wagmi'
import { useEffect } from 'react';
import { addresses } from '../config';

export const useNavigateToken = () => {
    const [query] = useSearchParams();
    const navigate = useNavigate();
    const {chain} = useNetwork();

    useEffect(() => {
        let tokenAddress = query.get("tokenAddress");

        tokenAddress = addresses["1"].tokenAddress;
        let pairAddress = addresses["1"].pairAddress;
            
        switch(chain?.id ?? mainnet.id) {
            case 56:
                tokenAddress=addresses["56"].tokenAddress;
                pairAddress=addresses["56"].pairAddress;
                break;
            case 137:
                tokenAddress=addresses["137"].tokenAddress;
                pairAddress=addresses["137"].pairAddress;
                break;
        }

        return navigate(`/?tokenAddress=${tokenAddress}&pairAddress=${pairAddress}`);
    }, [query,navigate,chain])
}