// Используя функцию, найти последний элемент массива, не изменяя его.
function findLastElement(arr) {
  return arr[arr.length - 1];
}

console.log('%cНайти последний элемент массива:', 'color: red', findLastElement([1, 2, 3]));

// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
function duplicateArray(arr) {
  return arr.concat(arr);
}

console.log('%cMассив с дублированными элементами\n', 'color: red', duplicateArray([1, 3, 6]));

// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
function fill(n) {
  const arr = Array(n).fill(0);
  return arr.map((_, idx) => idx + 1);
}

console.log('%cMассив, заполненный числами от 1 до n\n', 'color: red', fill(10));

// Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
function deleteFirstEl() {
  const arr = [...arguments];
  return arr.map((el) => {
    el.shift();
    return el;
  });
}

console.log(
  '%cФункция принимает любое число массивов и удаляет из каждого массива первый элемент, возвращая массив оставшихся значений\n',
  'color:red',
  deleteFirstEl([1, 2, 3], ['x', 'y', 'z']),
);

// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").
function sortAndReverse(str) {
  const arr = str.split('');
  const sortArr = arr.sort();
  return sortArr.reverse();
}

console.log(sortAndReverse('екважбигёзд'));

// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
function sortNumReverse(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortNumReverse([5, 2, -1, 6, 9, -9, 3]));

// Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер
// Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.
function getNewArray(arr, start, end) {
  // return arr.slice(start, end + 1);
  return arr.filter((el, idx) => {
    if (idx >= start && idx <= end) {
      return el;
    }
  });
}

console.log(getNewArray(['а', 'б', 'в', 'г', 'д', 'е'], 1, 3));

// Удвоить элементы массива, не используя циклы.
function double(arr) {
  const result = [];
  arr.forEach((el) => result.push(el, el));
  return result;
}

console.log(double([1, 2, 3, 'a', 'b', 'c']));

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);
console.log(arr);

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 2, 'три', 'четыре');
console.log(arr2);

// Вставить в произвольный массив любое значение после второго элемента.
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(3, 0, 'add');
console.log(arr3);

// Отсортировать массив таким образом, чтобы вначале шли массивы с наименьшей длиной.
const arr4 = [
  ['а', 'б', 'в', 'г', 'д', 'е'],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 'a', 'b', 'c'],
];
const sortArr4 = arr4.sort((a, b) => a.length - b.length);
console.log(sortArr4);

// Создать копию произвольного массив
const copyArr = arr3.slice();
// const copyArr = [...arr3];
console.log(copyArr);

// Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},
const arr5 = [
  { kind: 'tarantula', info: { legs: 8, eyes: 8 } },
  { kind: 'french bulldog', info: { legs: 4, eyes: 2 } },
  { kind: 'human', info: { legs: 2, eyes: 2 } },
  { kind: 'lobster', info: { legs: 10, eyes: 2 } },
];
const sortArr5 = arr5.sort((a, b) => a.info.legs - b.info.legs);
console.log(sortArr5);

// Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}]
const services = [
  { service: 'service1', executionTime: 56 },
  { service: 'service2', executionTime: 97 },
  { service: 'service3', executionTime: 23 },
  { service: 'service4', executionTime: 65 },
  { service: 'service5', executionTime: 2 },
  { service: 'service6', executionTime: 73 },
  { service: 'service7', executionTime: 82 },
  { service: 'service8', executionTime: 19 },
  { service: 'service9', executionTime: 33 },
  { service: 'service10', executionTime: 42 },
];

function filterServices(arr, minTime, maxTime) {
  const services = arr;

  const filterServices = services.filter(
    (service) => service.executionTime >= minTime && service.executionTime <= maxTime,
  );

  return filterServices.sort((a, b) => a.executionTime - b.executionTime);
}

console.log(filterServices(services, 20, 60));
