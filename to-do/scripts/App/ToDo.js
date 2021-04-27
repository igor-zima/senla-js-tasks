import 'core-js/stable';

export class ToDo {
  constructor(list) {
    this.list = list;
    this.tasks = [];
  }

  init() {
    this.checkLocal();
    document.getElementById('add-btn').addEventListener('click', this.addTaskHandler);
    document.getElementById('search-input').addEventListener('input', this.searchTaskHandler);
    document.getElementById('tabs').addEventListener('click', this.filterTaskHandler);
    document.getElementById('new-task__area').addEventListener('keydown', this.addTaskHandler);
    this.list.addEventListener('click', this.taskHandler);
  }

  checkLocal() {
    const localList = localStorage.getItem('taskList');

    if (localList) {
      this.tasks = JSON.parse(localList);
      this.renderList(this.tasks);
    }
  }

  updateLocal(list) {
    localStorage.setItem('taskList', JSON.stringify(list));
  }

  createTask(value) {
    if (!value) return;

    const task = {
      value,
      important: false,
      done: false,
      id: Date.now(),
    };

    this.renderTask(task);

    this.tasks.push(task);

    this.updateLocal(this.tasks);
  }

  updateTask(id, option) {
    const el = this.tasks.find((el) => el.id === +id);

    el[option] = !el[option];

    this.updateLocal(this.tasks);
  }

  deleteTask = (evt) => {
    const { id } = evt.target.closest('.task').dataset;

    const index = this.tasks.findIndex((el) => el.id === +id);

    this.tasks.splice(index, 1);

    const checkTab = this.checkTabs();

    const filterTask = this.filterTask(checkTab);

    this.renderList(filterTask);

    this.updateLocal(this.tasks);
  };

  filterTask(tab) {
    let currentTasks;

    if (tab === 'active') {
      currentTasks = this.tasks.filter((task) => !task.done);
    } else if (tab === 'done') {
      currentTasks = this.tasks.filter((task) => task.done);
    } else {
      return this.tasks;
    }

    return currentTasks;
  }

  renderList(tasks) {
    this.list.innerHTML = '';

    tasks.forEach((el) => {
      this.renderTask(el);
    });
  }

  renderTask({ value, important, done, id }) {
    const currentValue = value.replace(/\n/g, '<br>');
    const btnImportant = important ? '' : 'mark-btn_important';
    const taskImportant = important ? 'important' : '';
    const taskDone = done ? 'done' : '';

    const html = `
      <li class="task ${taskImportant} ${taskDone}" data-id=${id} tabindex="0">
        <div class="task-btn__wrapper">
          <button class="mark-btn ${btnImportant}" tabindex="0">Mark important</button>
          <button class="delete-btn" tabindex="0"></button>
        </div>
        <div class="task__text-wrapper">
          <p class="task__text">${currentValue}</p>
        </div>
      </li>`;

    this.list.insertAdjacentHTML('beforeend', html);
  }

  checkTabs() {
    return document.querySelector('.tab.active').dataset.tab;
  }

  showWarning(text) {
    const warning = document.getElementById('warning');

    warning.textContent = text;

    warning.classList.add('warning_show');
  }

  hideWarning() {
    const warning = document.getElementById('warning');

    warning.classList.remove('warning_show');
  }

  addTaskHandler = (e) => {
    const taskArea = document.getElementById('new-task__area');
    let { value } = taskArea;

    if (!value) {
      this.showWarning('Please enter text!');
      return;
    }

    if (e.type === 'click') {
      this.createTask(value);
      taskArea.value = '';
      this.hideWarning();
      return;
    }

    if (navigator.maxTouchPoints === 0) {
      if (e.ctrlKey && e.key === 'Enter') {
        taskArea.value += '\n';
        value += '\n';
      } else if (e.key === 'Enter') {
        e.preventDefault();
        this.createTask(value);
        taskArea.value = '';
        this.hideWarning();
      }
    }
  };

  taskHandler = (e) => {
    const { id } = e.target.closest('.task').dataset;

    if (
      e.target.closest('.task') &&
      !e.target.classList.contains('mark-btn') &&
      !e.target.classList.contains('delete-btn')
    ) {
      e.target.closest('.task').classList.toggle('done');
      this.updateTask(id, 'done');
    }

    if (e.target.classList.contains('mark-btn')) {
      e.target.classList.toggle('mark-btn_important');
      e.target.closest('.task').classList.toggle('important');
      this.updateTask(id, 'important');
    }

    if (e.target.classList.contains('delete-btn')) {
      this.deleteTask(e);
    }
  };

  searchTaskHandler = (e) => {
    const tabList = document.getElementById('tabs');
    const tabs = tabList.querySelectorAll('.tab');

    tabs.forEach((el) => el.classList.remove('active'));
    tabs[0].classList.add('active');

    const value = e.target.value.toLowerCase();

    if (!value) this.renderList(this.tasks);

    const currentTasks = this.tasks.filter((task) => task.value.toLowerCase().includes(value));

    this.renderList(currentTasks);
  };

  filterTaskHandler = (e) => {
    if (e.target.classList.contains('tab')) {
      const tabData = e.target.dataset.tab;
      const tabList = e.target.closest('.tabs');

      const tabs = tabList.querySelectorAll('.tab');

      tabs.forEach((el) => el.classList.remove('active'));
      e.target.classList.add('active');

      const filterTask = this.filterTask(tabData);

      this.renderList(filterTask);
    }
  };
}