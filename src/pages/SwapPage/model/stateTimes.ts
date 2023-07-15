import { createEvent, createStore } from "effector";
import { TIME_VARIANTS } from "../config";


export const $timeCuurent = createStore(TIME_VARIANTS.H24);


export const changeTime = createEvent<TIME_VARIANTS>();

$timeCuurent
    .on(changeTime, (_, value) => value)
    
;