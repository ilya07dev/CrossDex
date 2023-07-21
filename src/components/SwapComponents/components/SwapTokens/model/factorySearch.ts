import { createEvent, createStore } from "effector"


export const searchTokensSwap = () => {
    const $searchToken = createStore<string>('');

    const setSearchToken = createEvent<string>();

    $searchToken
        .on(setSearchToken, (_, value) => value);

    return {
        $searchToken,
        setSearchToken,
    }
}