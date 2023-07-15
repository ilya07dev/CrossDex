
import axios from 'axios';
import { searchTokensUrl } from 'query/apiUrl';
import { useNetwork } from 'wagmi';
import {searchToken} from './type'


export const useSearchToken = () => {
    const {chain} = useNetwork();
    const getInfoToken = async (address:string): Promise<searchToken[]> => {
        const getInfo = await axios(searchTokensUrl(address, chain?.id ?? 1));

        return getInfo.data.pairs.data
    };

    return getInfoToken;
}

export {type searchToken}
