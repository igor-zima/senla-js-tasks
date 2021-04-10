// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.
/**
 * @remark
 * Функция должна вернуть произведение, а не сумму.
 */
function multiply(...args) {
  return args.reduce((acc, el) => acc + el, 0);
}

// console.log('%cMultiply с агруметами 1, 2, 3:', 'color: red;', multiply(1, 2, 3));
// console.log('%cMultiply без аргументов:', 'color: red;', multiply());

// С помощью рекурсии вычислить факториал числа 10.
function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1);
}

// console.log('%cFactorial 10:', 'color: red;', factorial(10));

// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'
function reverseString(str) {
  return str.split('').reverse().join('');
}

// console.log('%cПеревернуть строку "test":', 'color: red;', reverseString('test'));

// Написать функцию, которая проверяет является ли слово палиндромом
function isPalindrom(str) {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;

  // let start = 0;
  // let end = str.length - 1;
  // const mid = Math.floor(end / 2);

  // for (; start <= mid; ) {
  //   if (str[start] === str[end]) {
  //     start++;
  //     end--;
  //     continue;
  //   } else {
  //     return false;
  //   }
  // }

  // return true;
}

// console.log('%cПроверка на палиндром слова "test":', 'color: red;', isPalindrom('test'));
// console.log('%cПроверка на палиндром слова "abba":', 'color: red;', isPalindrom('abba'));

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")
function toUnicode(str) {
  return [...str].map((el) => el.charCodeAt(0)).join(' ');
}

// console.log('%cСтрока в юникод:', 'color: red;', toUnicode('hello'));

// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'
function stringForChar(str) {
  if (str.length === 1) {
    console.log(str);
    return;
  }

  const sliceStr = str.slice(1);
  const newStr = str.slice(0, 1);
  console.log(newStr);

  return stringForChar(sliceStr);
}
// console.log('%cФункция-рекурсия, которая выводит каждый символ строки в конcоль:', 'color: red;');
// stringForChar('test');

// Создать две функции и дать им осмысленные названия:
// первая функция принимает массив и callback, возвращая строку из обработанного массива.
function arrayToString(arr, callback) {
  // 1 вариант
  // return callback(arr).join(', ');

  // 2 вариант
  return arr.map(callback).join(', ');
}
// вторая функция (callback) обрабатывает каждый элемент массива
function square(/* arr */ el) {
  // 1 варинат
  // return arr.map((el) => el ** 2);

  // 2 вариант
  return el ** 2;
}

const arr = [1, 2, 3, 4, 5];

// console.log('%cCтрокa из обработанного массива:', 'color: red;', arrayToString(arr, square));
