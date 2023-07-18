
import axios from 'axios';
import { infoTokenUrl } from 'query/apiUrl';
import {tokenInfo} from './type'
import { useStore } from 'effector-react';
import { $choseChain } from 'config/stateChain';


export const useGetToken = () => {

    const chain = useStore($choseChain);
    const getInfoToken = async (address:string): Promise<tokenInfo> => {
        const getInfo = await axios(infoTokenUrl(address, chain));

        return getInfo.data.pairs.data
    };

    return getInfoToken;
}

export {type tokenInfo}
