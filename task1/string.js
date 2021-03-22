const string = 'string test example';

// Получить первую и последнюю букву строки
console.log(string[0], string[string.length - 1]);

// Сделать первую и последнюю буквы в верхнем регистре
const firstLastUpperCase = string
  .split('')
  .map((el, idx, arr) => (idx === 0 || idx === arr.length - 1 ? el.toUpperCase() : el))
  .join('');
console.log(firstLastUpperCase);

// Найти положение слова string в строке
const stringIndex = string.indexOf('string');
console.log(stringIndex);

// Найти положение второго пробела
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

// Получить строку со 2-ого символа длинной 6 букв
const substring = string.substr(2, 6);
console.log(substring);

// Получить строку с 1 по 7 символ
const substring2 = string.substring(1, 7);
console.log(substring2);

// Получить из lдвух переменных типа number x = 20, y = 21 строку '2021'
const x = 20,
  y = 21;
const stringFromNumber = '' + x + y;
console.log(stringFromNumber);
