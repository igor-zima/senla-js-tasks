import { ToDo } from './ToDo';
import Logo from '../../assets/image/logo.svg';

// eslint-disable-next-line import/prefer-default-export
export function renderToDoPage(uid) {
  const header = createHeader();
  const main = createMain();

  const app = document.getElementById('app');
  app.innerHTML = '';
  app.insertAdjacentHTML('afterbegin', header);
  app.insertAdjacentHTML('beforeend', main);

  const taskList = document.getElementById('task-list');

  const toDo = new ToDo(taskList, uid);
  toDo.init();
}

function createHeader() {
  const html = `
  <header class="header">
    <div class="logo">
      <a href="https://senlainc.com/" target="_blank">
        <img src="${Logo}" alt="logo" />
      </a>
    </div>
    <div class="search">
      <input
        class="search-input"
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search task for to do"
        autocomplete="off"
      />
    </div>
  </header>`;

  return html;
}

function createMain() {
  const html = `
    <main>
      <div class="task-settings">
        <ul class="tabs" id="tabs">
          <li><button class="tab active" data-tab="all">All</button></li>
          <li><button class="tab" data-tab="active">Active</button></li>
          <li><button class="tab" data-tab="done">Done</button></li>
        </ul>
        <div class="new-task">
          <span class="new-task__title">New task</span>
          <textarea name="new-task__area" id="new-task__area" class="new-task__area"></textarea>
          <div class="add-task__wrapper">
            <span class="warning" id="warning"></span>
            <button class="btn add-btn" id="add-btn">Add</button>
          </div>
        </div>
      </div>
      <ul class="task-list" id="task-list"></ul>
    </main>`;

  return html;
}
