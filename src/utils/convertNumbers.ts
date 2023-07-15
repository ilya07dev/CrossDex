import numeral from "numeral";

export const convertNumbers = (
  value:string | number,
  format?:string,
):string => {

  if(value.toString().includes("e")) {
    let data = String(value).split(/[eE]/);
    if (data.length == 1) return data[0];

    let z = '',
      sign = +value < 0 ? '-' : '',
      str = data[0].replace('.', ''),
      mag = Number(data[1]) + 1;

    if (mag < 0) {
      z = sign + '0.';
      while (mag++) z += '0';


      value = z + str.replace(/^\-/, '');
      const degree = +value[value.length-1];
      value = value.slice(0, degree+4);
      if(value.length > 9) {
        value = `${value.slice(0, 3)}...${value.slice(-4)}`
      }

      return value
    }


    mag -= str.length;
    while (mag--) z += '0';
    value = str + z;

    const degreePositive = +value[value.length-1];
    value = value.slice(0, degreePositive+4);
  }

  let result:string = numeral(value).format('0,0[.][00]' ?? format);

  if(result.includes("NaN")) {
    result = result.replace("NaN", "0")
  }

  return result;
}

export const NumbersDeleteStr = (integer: string | number) => {
  return +(String(integer).replace("<", "").replace(">", ""))
}