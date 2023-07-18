
import { factoryChoseToken } from "utils/factoryChoseToken";
import { addresses } from "../config";

export const {$store: $choseTokenSwap, changeToken} = factoryChoseToken({
    tokenAddress:addresses["1"].tokenAddress,
    pairAddress:addresses["1"].pairAddress,
})

