import {
  addTaskToDatabase,
  deleteTaskFromDatabase,
  updateTaskInDatabase,
  getTaskListFromDatabase,
} from '../firebase/database';

export class ToDo {
  constructor(list, uid) {
    this.uid = uid;
    this.list = list;
    this.tasks = [];
    this.tabList = document.getElementById('tabs');
    this.taskArea = document.getElementById('new-task__area');
    this.warning = document.getElementById('warning');
  }

  init() {
    this.getTaskList();
    document.getElementById('add-btn').addEventListener('click', this.addTaskHandler);
    document.getElementById('search-input').addEventListener('input', this.searchTaskHandler);
    this.tabList.addEventListener('click', this.filterTaskHandler);
    this.taskArea.addEventListener('keyup', this.addTaskHandler);
    this.list.addEventListener('click', this.taskHandler);
  }

  getTaskList() {
    getTaskListFromDatabase(this.uid).then((snapshot) => {
      const data = snapshot.val();

      const databaseList = data && Object.keys(data).map((key) => data[key]);
      const localList = localStorage.getItem('taskList');

      if (data && databaseList.length) {
        this.tasks = databaseList;
      } else if (localList) {
        this.tasks = JSON.parse(localList);
      }

      this.renderList(this.tasks);
    });
  }

  updateLocal(list) {
    localStorage.setItem('taskList', JSON.stringify(list));
  }

  async createTask(value) {
    if (!value) return;

    const task = {
      value,
      important: false,
      done: false,
    };

    await addTaskToDatabase(this.uid, task);

    this.renderTask(task);

    this.tasks.push(task);

    this.updateLocal(this.tasks);
  }

  updateTask(id, option) {
    const el = this.tasks.find((el) => el.id === id);

    el[option] = !el[option];

    this.updateLocal(this.tasks);

    updateTaskInDatabase(this.uid, id, el);
  }

  deleteTask = (target) => {
    const { id } = target.closest('.task').dataset;

    const index = this.tasks.findIndex((el) => el.id === id);

    this.tasks.splice(index, 1);

    const checkTab = this.checkTabs();

    const filterTask = this.filterTask(checkTab);

    this.renderList(filterTask);

    this.updateLocal(this.tasks);

    deleteTaskFromDatabase(this.uid, id);
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
    this.warning.textContent = text;

    this.warning.classList.add('warning_show');
  }

  hideWarning() {
    this.warning.classList.remove('warning_show');
  }

  addTaskHandler = (e) => {
    let value = this.taskArea.value.trim();

    if (!value) {
      this.showWarning('Please enter text!');
      return;
    }

    this.hideWarning();

    if (e.type === 'click') {
      this.createTask(value);
      this.taskArea.value = '';
      return;
    }

    if (navigator.maxTouchPoints === 0) {
      if (e.ctrlKey && e.key === 'Enter') {
        this.taskArea.value += '\n';
        value += '\n';
      } else if (e.key === 'Enter') {
        e.preventDefault();
        this.createTask(value);
        this.taskArea.value = '';
      }
    }
  };

  taskHandler = ({ target }) => {
    if (!target.closest('.task')) return;

    const { id } = target.closest('.task').dataset;

    if (
      target.closest('.task') &&
      !target.classList.contains('mark-btn') &&
      !target.classList.contains('delete-btn')
    ) {
      target.closest('.task').classList.toggle('done');
      this.updateTask(id, 'done');
    }

    if (target.classList.contains('mark-btn')) {
      target.classList.toggle('mark-btn_important');
      target.closest('.task').classList.toggle('important');
      this.updateTask(id, 'important');
    }

    if (target.classList.contains('delete-btn')) {
      this.deleteTask(target);
    }
  };

  searchTaskHandler = ({ target }) => {
    const tabs = this.tabList.querySelectorAll('.tab');

    tabs.forEach((el) => el.classList.remove('active'));
    tabs[0].classList.add('active');

    const value = target.value.toLowerCase();

    if (!value) this.renderList(this.tasks);

    const currentTasks = this.tasks.filter((task) => task.value.toLowerCase().includes(value));

    this.renderList(currentTasks);
  };

  filterTaskHandler = ({ target }) => {
    if (!target.classList.contains('tab')) return;

    const tabData = target.dataset.tab;
    const tabList = target.closest('.tabs');

    const tabs = tabList.querySelectorAll('.tab');

    tabs.forEach((el) => el.classList.remove('active'));
    target.classList.add('active');

    const filterTask = this.filterTask(tabData);

    this.renderList(filterTask);
  };
}
