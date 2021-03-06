// Записать в коротком виде:
function shortView() {
  let a = a + 5; // => let a += 5;
  let b = b * 15; // => let b *= 15;
  let c = c - 3; // => let c -= 3;
  let d = d % 2; // => let d %= 2;
  let k = a + k; // => let k += a;
  let l = l * b; // => let l *= b;
  let m = m * 3 * k; // => let m *= 3 * k;

  // Возвести переменную в куб, используя краткую запись.
  a ** 3;
}

// Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
function condition() {
  let a = 'маленький';

  if (a === 'маленький') {
    a = 'большой';
  } else {
    a = 'маленький';
  }

  a = a === 'маленький' ? 'большой' : 'маленький';

  // Записать условие, используя условный оператор if: если переменная меньше нуля: присвоить ей строку “меньше нуля” если переменная равна нулю: присвоить 1 если больше нуля: используя краткую запись, умножить переменную на 10 Сделать тоже самое, используя тернарный оператор.

  let b = 0;

  if (b < 0) {
    b = 'меньше нуля';
  } else if (b === 0) {
    b = 1;
  } else {
    b *= 10;
  }

  b = b < 0 ? 'меньше нуля' : b === 0 ? 1 : (b *= 10);
}

// Используя конструктор switch, записать следующее условие:
// if(a == 'котик') {
//   console.log('котик');
// } else if(a == 'собака') {
//   console.log('собака');
// } else if(a == 'хомячок') {
//   console.log('хомячок');
// } else {
//   console.log('неизвестное науке животное');
// }
function switchCondition() {
  const a = 'котик';
  switch (a) {
    case 'котик':
      console.log('котик');
      break;
    case 'собака':
      console.log('собака');
      break;
    case 'хомячок':
      console.log('хомячок');
      break;
    default:
      console.log('неизвестное науке животное');
      break;
  }
}

// Чему равен x в каждом из примеров, объясните почему:
function typeConversion() {
  let x = 0 || 'строка'; // => 'строка', потому что оператор || вернет первое true значение
  x = 1 && 'строка'; // => 'строка', потому что оператор && вернет последнее true значение
  x = null || 1; // => 1, потому что оператор || вернет первое true значение
  x = null && 1; // => null, потому что оператор && вернет первое falsy значение
  x = 1 && null; // => null, потому что оператор && вернет первое falsy значение
  x = null || 0 || 1; // => 1, потому что оператор || вернет первое true значение
  x = null && 0 && 1; // => null, потому что оператор && вернет первое falsy значение

  x = 1 + 2 + '3'; // => '33', 1 + 2 = 3, дальше происходит конкатенация со строкой 3 + "3" = "33"
  x = 1 + 2 - '1'; // => 2, 1 + 2 = 3, при арифметических вычислениях строка приводится к числу(за исключением сложения), 3 - 1 = 2
  x = '1' + 2 - 1; // => 11, 1 + "2" = "12", "12" - 1 = 11
  x = true + 1; // => 2, при арифметических вычислениях Boolean значения приводятся к числу, true = 1, 1 + 1 = 2
  x = +'1' + 2; // => 3, унарный плюс приводит строку к числу, +"1" = 1, 1 + 2 = 3
  x = null + 2; // => 2, null приводится к числу, null = 0, 0 + 2 = 2
  x = undefined + 2; // => NaN, undefined не приводится к числу
  x = true + undefined; // => NaN,  undefined не приводится к числу
}
