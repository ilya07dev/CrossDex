import { NumbersDeleteStr } from "./convertNumbers"


export const convertGrow = (integer: string | number):boolean => {
    return NumbersDeleteStr(integer) > 0
}