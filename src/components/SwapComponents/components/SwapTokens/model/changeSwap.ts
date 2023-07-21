import { createEvent, createStore } from "effector";


export const $isChangeSwap = createStore<boolean>(false);

export const changeSwap = createEvent();

$isChangeSwap
    .on(changeSwap, (state) => !state)