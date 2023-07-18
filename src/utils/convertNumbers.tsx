import numeral from "numeral";

export const convertNumbers = (
  value:string | number,
):JSX.Element => {

  // console.log(value.toString().length)

  value = (+value).toFixed(30);
  const index = value.indexOf(".");
  const indexNumb = value.split("").findIndex((symbol) => +symbol !== 0 && !Number.isNaN(+symbol));
  const zeroes = value.slice(index+1, indexNumb);

  if(
    (+value < 1
    &&
    +value > 0
    ||
    +value > -1
    &&
    +value < 0)
    &&
    zeroes.length >= 4
  ) {
    
    const content = value.split(zeroes);

    return <>{content[0]}0<sub>{zeroes.length-1}</sub>{content[1].slice(0, 4)}</>
  }
  let decimals;

  if(
    +value > 1
    ||
    +value < -0
  ) {
    decimals = '00'
  }

  if(
    (+value < 1
    &&
    +value > 0
    ||
    +value > -1
    &&
    +value < 0)
  ) {
    decimals = '0000'
  }

  let result:string = numeral(value).format(`0,0[.][${decimals}]`);

  return <>{result}</>;
}

export const NumbersDeleteStr = (integer: string | number) => {
  return +(String(integer).replace("<", "").replace(">", ""))
}