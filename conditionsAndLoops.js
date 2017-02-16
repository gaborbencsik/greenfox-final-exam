'use strict';

let integerArray = [1,2,3,4,5,6,7,8,9];
let stringArray = ["hello", "bello", "green", "fox"];

function testIt(element, index, array) {
  return element < 5;
  // return element < 10;
};

function doubleThis(item) {
  return item * 2;
};

function countLength(item) {
  return item.length;
};


// every()  -  returns a boolean
// console.log(integerArray.every(testIt));
// console.log(stringArray.every(testIt));


// filter()  -  returns a new array
// console.log(integerArray.filter(testIt));
// console.log(stringArray.filter(testIt));


// map()  -  returns a new array
// console.log(integerArray.map(doubleThis));
// console.log(stringArray.map(countLength));


// some()  -  returns a boolean
// console.log(integerArray.some(testIt));
// console.log(stringArray.some(testIt));


// forEach()  -  executes once for each array element
integerArray.forEach(function(item) {
  console.log(item*2);
});


// reduce()
