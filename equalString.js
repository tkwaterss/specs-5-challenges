//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

let regX = /[x]/ig
let regO = /[o]/ig

const XO = str => [...str.matchAll(/x/ig)].length === [...str.matchAll(/o/ig)].length ? true : false

console.log(XO('xxXoOO'))
console.log(XO('xoswldixx'))