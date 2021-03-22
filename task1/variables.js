// Придумать название для переменных
const name = 'Ihar';
const lastName = 'Zimnitski';
let age;
let userData;

// Что будет в консоли и почему
// 1
// => undefined, потому что переменные объявленные через var всплывают и им присваивается значение undefined
console.log(test);
var test = 'string';

// 2
var x = 'string';
var x = 'string 2';
// => 'string 2', потому что мы объявляем новую переменную через var
console.log(x);

// 3
// => Error, потому что переменные объявленные через let не всплывают
console.log(test);
let test = 'string';

// 4
const x = 'string';
const x = 'string 2';
// Error, потому что переменную объявленную через const нельзя переписать
console.log(x);

// 5
let num = 12;
let num = 1;
// Error, потому что переменную объявленную через let нельзя переписать
console.log(num);
