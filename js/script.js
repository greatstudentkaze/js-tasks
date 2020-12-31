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
