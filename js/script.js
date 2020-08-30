'use strict';

const isSomeTrue = (array, func) => {
  let result = func(array[0]);

  if (array.length > 1 && !result) {
    array.splice(0, 1);
    let currentResult = isSomeTrue(array, func);
    result = result || currentResult;
  }

  return result;
};

function isNumber(val) {
  return typeof val === 'number';
}

let allNumbers= [1, 2, 4, 5, 6, 7, 8],
  someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
  noNumbers = ['здесь', 'нет',  'чисел'],
  testXd = ['xd', 1, 2, 3, 4];

console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
console.log(isSomeTrue(testXd, isNumber)); //вернет true
