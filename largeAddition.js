//kata name: Adding Big Numbers

const add = (num1, num2) => {
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();

  let result;
  let extra;

  num1.length <= num2.length ? (result = num2) : (result = num1);
  num1.length <= num2.length ? (extra = num1) : (extra = num2);

  result = result.map((item) => +item);
  extra = extra.map((item) => +item);

  let remainder = 0;
  for (let i = 0; i < extra.length; i++) {
    result[i] += extra[i] + remainder;
    if (result[i] > 9) {
      remainder = 1;
      result[i] = result[i] % 10;
    } else {
      remainder = 0;
    }
  }
  if (remainder > 0 && result.length === extra.length) {
    result.push(remainder);
  } else if (remainder > 0) {
    result[extra.length] += remainder
  }
  return result
    .map((item) => item.toString())
    .reverse()
    .join("");
};

console.log(add("156", "65"));
console.log(add("6754", "4786"));
console.log(add("12323452345234532452345234523454323", "1232345254234523462345"));


let length2 = ('63829983432984289347293874').split('').length
let length1 = ('90938498237058927340892374089').split('').length

//!answer does not work

console.log(length1, length2)
