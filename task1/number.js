// Получить число Pi из Math и округлить его до двух знаков после точки
const pi = +Math.PI.toFixed(2);
// console.log('%cPI number:', 'color: red;', pi);

// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
const numbers = [10, 17, 5, 12, 15, 99, 1];
const maxNum = Math.max(...numbers);
const minNum = Math.min(...numbers);
// console.log('%cMax number:', 'color: red;', maxNum);
// console.log('%cMin number:', 'color: red;', minNum);

// С помощью Math.random:
// получить случайное число и округлить его до двух цифр после запятой
const randomNum = +Math.random().toFixed(2);
// console.log('%cRandom number', 'color: red;', randomNum);

// получить случайное число от 0 до Х
const x = 10;
const randomNumberToX = Math.floor(Math.random() * x);
// console.log('%cRandom number to X:', 'color: red;', randomNumberToX);

// Получить число из строки '100$'
const string = '100$';
const numberFromString = Number.parseInt(string);
// console.log('%cЧисло из строки "100$":', 'color: red;', numberFromString);
