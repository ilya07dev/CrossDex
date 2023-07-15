
import axios from 'axios';
import { infoTokenUrl } from 'query/apiUrl';
import { MOCK_CHAIN_ID } from 'config';
import {tokenInfo} from './type'


export const useGetToken = () => {

    const getInfoToken = async (address:string): Promise<tokenInfo> => {
        const getInfo = await axios(infoTokenUrl(address, MOCK_CHAIN_ID));

        return getInfo.data.pairs.data
    };

    return getInfoToken;
}

export {type tokenInfo}
