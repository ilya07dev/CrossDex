
import { createEvent, createStore } from "effector";

interface choseToken {
    pairAddress:string,
}

const factoryChoseToken = () => {
    const $choseToken = createStore<choseToken | null>(null);

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
