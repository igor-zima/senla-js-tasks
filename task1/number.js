// Получить число Pi из Math и округлить его до двух знаков после точки
const pi = +Math.PI.toFixed(2);
console.log('PI number:', pi);

// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
const maxNum = Math.max(10, 17, 5, 12, 15, 99, 1);
const minNum = Math.min(10, 17, 5, 12, 15, 99, 1);
console.log('max:', maxNum, 'min:', minNum);

// С помощью Math.random:
// получить случайное число и округлить его до двух цифр после запятой
// получить случайное число от 0 до Х
const randomNum = Math.random().toFixed(2);
console.log('Random number', randomNum);

const x = 10;
const randomNumberToX = (Math.random() * x).toFixed();
console.log('Random number to X:', randomNumberToX);

// Получить число из строки '100$'
const string = '100$';
const numberFromString = Number.parseInt(string);
console.log(numberFromString);
