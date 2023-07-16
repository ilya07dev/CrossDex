import {useQuery} from 'react-query';
import axios from 'axios';
import { hotTokensUrl } from 'query/apiUrl';
import {trendsTokens} from './type'
import { useNetwork } from 'wagmi';
import { convertToCorrectChains } from 'utils/convertCorrectChains';


export const useGetTrends = (): trendsTokens[] => {

    const {chain} = useNetwork();
    const chainCurrent = convertToCorrectChains(chain?.id);
    const {data } = useQuery(
        'trendsTorkens',
        () => axios.get(hotTokensUrl(chainCurrent)),
        {
            refetchOnWindowFocus: false,
        }
    );
    
    if(!data?.data?.pairs?.data) return [];

    return data.data.pairs.data;
}

export {type trendsTokens}