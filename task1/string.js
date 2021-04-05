const string = 'string test example';

// Получить первую и последнюю букву строки
const firstLetter = string[0];
const lastLetter = string[string.length - 1];
// console.log('%cПервая буква:', 'color: red;', firstLetter);
// console.log('%cПоследняя буква:', 'color: red;', lastLetter);

// Сделать первую и последнюю буквы в верхнем регистре
const firstLastUpperCase = string
  .split('')
  .map((el, idx, arr) => (idx === 0 || idx === arr.length - 1 ? el.toUpperCase() : el))
  .join('');
// console.log('%cПервая и последняя буква в верхнем регистре:', 'color: red;', firstLastUpperCase);

// Найти положение слова string в строке
const stringIndex = string.indexOf('string');
// console.log('%cПоложение слова string в строке:', 'color: red;', stringIndex);

// Найти положение второго пробела
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
// console.log('%cПоложение второго пробела:', 'color: red;', secondSpace);

// Получить строку со 2-ого символа длинной 6 букв
const substring = string.substr(1, 6);
// console.log('%cПодстрока со 2-ого символа длинной 6 букв:', 'color: red;', substring);

// Получить строку с 1 по 7 символ
const substring2 = string.substring(0, 6);
// console.log('%cПодстрока с 1 по 7 символ:', 'color: red;', substring2);

// Получить из двух переменных типа number x = 20, y = 21 строку '2021'
const x = 20,
  y = 21;
const stringFromNumber = '' + x + y;
// console.log('%cСтрока из двух переменных типа number:', 'color: red;', stringFromNumber);
