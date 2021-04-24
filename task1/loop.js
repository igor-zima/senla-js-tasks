// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
function toUpperCase() {
  const string = 'Я стану крутым программистом';

  let result = '';

  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    if (string[index] === ' ') {
      result += element;
      result += string[index + 1].toUpperCase();
      index++;
    } else {
      result += element;
    }
  }

  return result;
}

// console.log('%cПервая буква каждого слова в верхнем регистре:\n', 'color: red;', toUpperCase());

// Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .
function factorialNine() {
  let result = 1;

  for (let index = result; index <= 9; index++) {
    result *= index;
  }

  return result;
}

// console.log('%cФакториал 9:', 'color: red;', factorialNine());

// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
function countdown() {
  let string = 'Просветление наступит через: ';

  for (let index = 10; index > 0; index--) {
    index === 1 ? (string += `${index}`) : (string += `${index}, `);
  }

  return string;
}

// console.log('%cСоздать строку:\n', 'color: red;', countdown());

// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
/**
 * @remark
 * Решить через увелечение индекса index на 2.
 */
function odd() {
  console.log('%cВывести в консоль все нечетные числа от 1 до 20 включительно:', 'color: red;');

  for (let index = 1; index <= 20; index += 2) {
    console.log(index);
  }
}

// odd();

// На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.
function newString() {
  const string = 'теперь я мастер циклов javascript';
  let result = '';

  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    if (index === 0) {
      result += element.toUpperCase();
    } else if (element === ' ') {
      result += string[index + 1].toUpperCase();
      index++;
    } else {
      result += element;
    }
  }

  return result;
}

// console.log(
//   '%cCоздать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы:\n',
//   'color: red;',
//   newString(),
// );
