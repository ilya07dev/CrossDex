
import axios from 'axios';
import { infoTokenUrl } from 'query/apiUrl';
import { useNetwork } from 'wagmi';
import {tokenInfo} from './type'


export const useGetToken = () => {

    const {chain} = useNetwork();
    const getInfoToken = async (address:string): Promise<tokenInfo> => {
        const getInfo = await axios(infoTokenUrl(address, chain?.id ?? 1));

        return getInfo.data.pairs.data
    };

    return getInfoToken;
}

export {type tokenInfo}
