let test1 = [9, 4, 7, 2, 5, 4, 78, 9, 236, 31];
let test2 = [1,2,3,4,5,6]

const sumTwoSmallestNumbers = array => array.sort((a,b) => a - b)[0] + array.sort((a,b) => a - b)[1]

console.log(sumTwoSmallestNumbers(test1));
