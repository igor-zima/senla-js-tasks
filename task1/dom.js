// Получить и вывести в консоль:
console.log('%cПолучить и вывести в консоль:', 'color: red');

// 1.head
const head = document.head;
console.log('%c1.Head\n', 'color: red', head);

// 2.body
const body = document.body;
console.log('%c2.Body\n', 'color: red', body);

// 3.все дочерние элементы body
const bodyChildren = body.children;
console.log('%c3.Все дочерние элементы body\n', 'color: red', bodyChildren);

// 4.первый div и все его дочерние узлы
const firstDiv = body.firstElementChild;
console.log('%c4.Первый div\n', 'color: red', firstDiv);

const firstDivNodes = firstDiv.childNodes;
console.log('%cBсе его дочерние узлы\n', 'color: red', firstDivNodes);

// 4.1 вывести все дочерние узлы в консоль
console.log('%c4.1.Все дочерние узлы:', 'color: red');
for (let index = 0; index < firstDivNodes.length; index++) {
  console.log(firstDivNodes[index]);
}

// 4.2 вывести все дочерние узлы в консоль кроме первого
console.log('%c4.2.Bсе дочерние узлы кроме первого:', 'color: red');
for (let index = 1; index < firstDivNodes.length; index++) {
  console.log(firstDivNodes[index]);
}
