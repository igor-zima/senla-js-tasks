// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.
function multiply() {
  const args = [...arguments];
  return args.reduce((acc, el) => acc + el);
}

console.log(multiply(1, 2, 3));

// С помощью ри курсе вычислить факториал числа 10.
function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1);
}

console.log(factorial(10));

// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('test'));

// Написать функцию, которая проверяет является ли слово палиндромом
function isPalindrom(str) {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

console.log(isPalindrom('test'));
console.log(isPalindrom('abba'));

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")
function toUnicode(str) {
  return [...str].map((el) => el.charCodeAt(0)).join(' ');
}

console.log(toUnicode('hello'));

// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'
function stringForChar(str, index = 0) {
  if (index === str.length - 1) {
    console.log(str[index]);
    return;
  }

  console.log(str[index]);
  return stringForChar(str, ++index);
}

stringForChar('test');

// Создать две функции и дать им осмысленные названия:
// первая функция принимает массив и callback, возвращая строку из обработанного массива.
function arrayToString(arr, callback) {
  return callback(arr).join('');
}
// вторая функция (callback) обрабатывает каждый элемент массива
function square(arr) {
  return arr.map((el) => el ** 2);
}

const arr = [1, 2, 3, 4, 5];

console.log(arrayToString(arr, square));
