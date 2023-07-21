import { createEvent, createStore } from "effector";

export const $valueToken1 = createStore<string>("");

export const setValueToken1 = createEvent<string>();

$valueToken1
    .on(setValueToken1, (_, value) => value)