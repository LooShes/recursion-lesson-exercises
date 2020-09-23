/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (number, factorial = 1) {

  if (number === 1) {
    return factorial
  }

  factorial *= number
  return findFactorial(number - 1, factorial)
}

console.log(findFactorial(8))

//Exercise 2
const reverseString = function (str) {
  if (str.length === 0) {
    return str
  }
    return str[str.length-1] + reverseString(str.substr(0, str.length-1))
}

let str = "Abba"
console.log(reverseString(str))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (arr1, arr2) {
  if(arr1.length === 0) {return}

  let temp = arr1.splice(arr1.length-1, 1)
  arr2.unshift(temp[0])
  return swap(arr1, arr2)
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]


/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = {
  findFactorial,
  reverseString,
  swap
}