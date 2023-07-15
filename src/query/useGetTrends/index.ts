import {useQuery} from 'react-query';
import axios from 'axios';
import { hotTokensUrl } from 'query/apiUrl';
import {trendsTokens} from './type'
import { useNetwork } from 'wagmi';


export const useGetTrends = (): trendsTokens[] => {

    const {chain} = useNetwork();
    const {data } = useQuery(
        'trendsTorkens',
        () => axios.get(hotTokensUrl(chain?.id ?? 1)),
        {
            refetchOnWindowFocus: false,
        }
    );
    
    if(!data?.data?.pairs?.data) return [];

    return data.data.pairs.data;
}

export {type trendsTokens}