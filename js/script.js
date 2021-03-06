'use strict';

/*
Задача из собеседования.
Переверните каждое слово в строке. Например, строка
"Welcome to this Javascript Guide!" должна стать "emocleW ot siht tpircsavaJ !ediuG".
 */

const task1 = () => {
  const string = 'Welcome to this Javascript Guide!';
  const trueString = 'emocleW ot siht tpircsavaJ !ediuG';

  const reverse = (string, separator) => string.split(separator).reverse().join(separator);

  const reversedString = reverse(string, '');
  const result = reverse(reversedString, ' ');

  console.log(trueString === result);
};

/*
Задача из собеседования.

Напишите функцию сложения вида add(num1)(num2)...
Примечание: Количество слагаемых (num1, num2...) не ограничено.
 */
const task2 = () => {
  const add = (...args) => {
    let sum = args.reduce((acc, arg) => acc + arg, 0);
    const func = (...args) => {
      if (args.length) {
        sum += args.reduce((acc, arg) => acc + arg, 0);
        return func;
      } else {
       return sum;
      }
    };
    return func;
  };

  const result1 = add(2)(1)(2)();
  const result2 = add(2)(1,2)();
  const result3 = add(1, 1, 3)();
  console.log(5 === result1);
  console.log(5 === result2);
  console.log(5 === result3);
};

/*
Простенькая задачка из собеседования.

Превратите функцию ниже в IIFE.
let result = (a, b) => a + b;
 */
const task3 = () => {
  const result = (a, b) => a + b;

  console.log(result(4, 8) === ((a, b) => a + b)(4, 8));
};

/*
Задача из собеседования.

Прежде, чем вы начнёте - самое популярное предполагаемое решение этой задачки - неправильное и не приводит к желанному результату.

Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
 */
const task4 = () => {
  const array = [5, 4, 3, 2, 7, 4, 2, 1, 7];

  // const func = array => {
  //   array.forEach((item, i) => {
  //     const itemNumber = i + 1;
  //     setTimeout(() => console.log(i), 3000 * itemNumber);
  //   });
  // };

  const func = async array => {
    for (let i = 0; i < array.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(i);
    }
  };

  func(array)
    .catch(err => console.error(err));
};

/*
Реализуйте каррирование (англ. currying).
 */
const task5 = () => {
  const addBase = base => num => base + num;

  const addTen = addBase(10);
  console.log(addTen(5) === 15);
  console.log(addTen(80) === 90);
  console.log(addTen(-5) === 5);
};
