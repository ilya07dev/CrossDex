import {useQuery} from 'react-query';
import axios from 'axios';
import { hotTokensUrl } from 'query/apiUrl';
import {trendsTokens} from './type'
import { MOCK_CHAIN_ID } from 'config';


export const useGetTrends = (): trendsTokens[] => {

    const {data } = useQuery(
        'trendsTorkens',
        () => axios.get(hotTokensUrl(MOCK_CHAIN_ID))
    );
    
    if(!data?.data) return [];

    return data.data.pairs.data;
}

export {type trendsTokens}