
import axios from 'axios';
import { searchTokensUrl } from 'query/apiUrl';
import { MOCK_CHAIN_ID } from 'config';
import {searchToken} from './type'


export const useSearchToken = () => {

    const getInfoToken = async (address:string): Promise<searchToken[]> => {
        const getInfo = await axios(searchTokensUrl(address, MOCK_CHAIN_ID));

        return getInfo.data.pairs.data
    };

    return getInfoToken;
}

export {type searchToken}
