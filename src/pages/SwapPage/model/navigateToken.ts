
import { useSearchParams, useNavigate } from 'react-router-dom';
import { queryRoute } from '../config';
import { useNetwork } from 'wagmi';
import { useEffect } from 'react';

export const useNavigateToken = () => {
    const [query, setQuery] = useSearchParams();
    const navigate = useNavigate();
    const {chain} = useNetwork();

    useEffect(() => {
        const tokenAddress = query.get("tokenAddress")
        if(!tokenAddress) {
            let tokenAddress = "0x856c83B7C8E2F259AF7c90810ff8A85f93925Dbd";
            let pairAddress = "0xf29A5AdE4AbDdd589c024e7a0e17c4505a53aD1F";
            
            switch(chain?.id) {
                case 56:
                    tokenAddress="0x2622220E94E95AE0071cbdCf26A1b444d92C7dA7";
                    pairAddress="0xC41a7F69D252aE33FE5e8e0572240aD0c3ea142C";
                    break;
                case 137:
                    tokenAddress="0x6082ab7E0068512E74A577fDbF94730d958d0625";
                    pairAddress="0x0400a4822d914c8C53C16261306B5f697380b542";
                    break;
            }


            return navigate(`/?tokenAddress=${tokenAddress}&pairAddress=${pairAddress}`);
        }
    }, [query,navigate,chain])
}