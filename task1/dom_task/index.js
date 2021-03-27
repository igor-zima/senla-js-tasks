document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  // Создать функцию которая принимает два аргумента. Функция проверяет является ли первый элемент родителeм для второго элемента isParent(parent, child) => true || false
  function isParent(parent, child) {
    return child.parentNode === parent;
  }
  const html = document.documentElement;
  const body = document.body;
  console.log('%cHtml является родителем body:', 'color: red', isParent(html, body));

  // Найти элемент который находится перед списком ul
  const list = document.querySelector('ul');
  const beforeListElement = list.previousElementSibling;
  console.log('%cЭлемент который находится перед списком ul\n', 'color: red', beforeListElement);

  // Найти параграф и получить его текстовые содержимое
  const paragraphTextContent = document.querySelector('p').textContent;
  console.log(
    '%cНайти параграф и получить его текстовые содержимое:',
    'color: red',
    paragraphTextContent,
  );

  // Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.
  function nodeInfo(node) {
    const types = {
      1: 'ELEMENT_NODE',
      2: 'ATTRIBUTE_NODE',
      3: 'TEXT_NODE',
      4: 'CDATA_SECTION_NODE',
      5: 'ENTITY_REFERENCE_NODE',
      6: 'ENTITY_NODE',
      7: 'PROCESSING_INSTRUCTION_NODE',
      8: 'COMMENT_NODE',
      9: 'DOCUMENT_NODE',
      10: 'DOCUMENT_TYPE_NODE',
      11: 'DOCUMENT_FRAGMENT_NODE',
      12: 'NOTATION_NODE',
    };

    return {
      type: types[node.nodeType],
      name: node.nodeName,
      childNodesCount: node.childNodes.length,
    };
  }
  console.log('%cNode info:', 'color: red');
  console.table(nodeInfo(list));

  // Найти список и добавить ему класс "list"
  list.classList.add('list');
});
