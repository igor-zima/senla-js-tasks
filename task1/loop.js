// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
function toUpperCase() {
  const string = 'Я стану крутым программистом';

  let result = '';

  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    if (string[index - 1] === ' ') {
      result += element.toUpperCase();
    } else {
      result += element;
    }
  }

  console.log(result);
}

toUpperCase();

// Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .
function factorialNine() {
  let result = 1;

  for (let index = result; index <= 9; index++) {
    result *= index;
  }

  console.log(result);
}

factorialNine();

// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
function countdown() {
  let string = 'Просветление наступит через: ';

  for (let index = 10; index > 0; index--) {
    index === 1 ? (string += `${index}`) : (string += `${index}, `);
  }

  console.log(string);
}

countdown();

// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
function odd() {
  for (let index = 1; index <= 20; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
  }
}

odd();

// На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.
function changeString() {
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

  console.log(result);
}

changeString();
