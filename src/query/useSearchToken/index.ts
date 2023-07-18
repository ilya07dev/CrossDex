
import axios from 'axios';
import { searchTokensUrl } from 'query/apiUrl';
import {searchToken} from './type'
import { useStore } from 'effector-react';
import { $choseChain } from 'config/stateChain';


export const useSearchToken = () => {
    const chain = useStore($choseChain);
    const getInfoToken = async (address:string): Promise<searchToken[]> => {
        const getInfo = await axios(searchTokensUrl(address, chain));

        return getInfo.data.pairs.data
    };

    return getInfoToken;
}

export {type searchToken}
