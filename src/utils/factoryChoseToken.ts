
import { createEvent, createStore } from "effector";

interface choseToken {
    tokenAddress:string,
    pairAddress:string,
}

const factoryChoseToken = <T>(
    initData:T
) => {
    const $choseToken = createStore<T | choseToken>(initData);

    const changeToken = createEvent<choseToken>();

    $choseToken
        .on(changeToken, (_, value) => value)
        
    ;

    return {
        $store:$choseToken,
        changeToken,
    }
}

export {factoryChoseToken, type choseToken}
