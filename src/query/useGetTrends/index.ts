import {useQuery} from 'react-query';
import axios from 'axios';
import { hotTokensUrl } from 'query/apiUrl';
import {trendsTokens} from './type'
import { useStore } from 'effector-react';
import { $choseChain } from 'config/stateChain';


export const useGetTrends = (): trendsTokens[] => {

    const chain = useStore($choseChain);
    
    const {data } = useQuery(
        ['trendsTorkens', chain],
        (args:any) => axios.get(hotTokensUrl(args.queryKey[1])),
        {
            refetchOnWindowFocus: false,
        }
    );
    
    
    if(!data?.data?.pairs?.data) return [];

    return data.data.pairs.data;
}

export {type trendsTokens}