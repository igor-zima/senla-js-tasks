class ToDo {
  constructor(list) {
    this.list = list;
    this.tasks = [];
  }

  init() {
    this.checkLocal();
    document.getElementById('add-btn').addEventListener('click', this.addTaskHandler);
    document.getElementById('search-input').addEventListener('input', this.searchTaskHandler);
    document.getElementById('tabs').addEventListener('click', this.filterTaskHandler);
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

    Object.keys(option).forEach((opt) => (el[opt] = option[opt]));

    this.updateLocal(this.tasks);
  }

  deleteTask = (evt) => {
    const { id } = evt.target.closest('.task').dataset;

    const index = this.tasks.findIndex((el) => el.id === +id);

    this.tasks.splice(index, 1);

    this.renderList(this.tasks);

    this.updateLocal(this.tasks);
  };

  renderList(tasks) {
    this.list.innerHTML = '';

    tasks.forEach((el) => {
      this.renderTask(el);
    });
  }

  renderTask({ value, important, done, id }) {
    const btnImportant = important ? '' : 'mark-btn_important';

    const html = `
      <li class="task" data-important=${important} data-done=${done} data-id=${id}>
        <div class="task-btn__wrapper">
          <button class="mark-btn ${btnImportant}">Mark important</button>
          <button class="delete-btn"></button>
        </div>
        <div class="star"></div>
        <span class="task__text">${value}</span>
      </li>`;

    this.list.insertAdjacentHTML('beforeend', html);
  }

  addTaskHandler = () => {
    const taskArea = document.getElementById('new-task__area');
    const { value } = taskArea;
    this.createTask(value);
    taskArea.value = '';
  };

  taskHandler = (e) => {
    const { id } = e.target.closest('.task').dataset;

    if (e.target.classList.contains('task')) {
      const done = e.target.dataset.done === 'true' ? true : false;
      e.target.dataset.done = !done;

      this.updateTask(id, { done: e.target.dataset.done });
    }

    if (e.target.classList.contains('mark-btn')) {
      const important = e.target.closest('.task').dataset.important === 'true' ? true : false;

      e.target.classList.toggle('mark-btn_important');
      e.target.closest('.task').dataset.important = !important;

      this.updateTask(id, { important: e.target.closest('.task').dataset.important });
    }

    if (e.target.classList.contains('delete-btn')) {
      this.deleteTask(e);
    }
  };

  searchTaskHandler = (e) => {
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

      let currentTasks;

      if (tabData === 'active') {
        currentTasks = this.tasks.filter((task) => (task.done === 'true' ? false : true));
      } else if (tabData === 'done') {
        currentTasks = this.tasks.filter((task) => (task.done === 'true' ? true : false));
      } else {
        this.renderList(this.tasks);
        return;
      }

      this.renderList(currentTasks);
    }
  };
}

const taskList = document.getElementById('task-list');

const toDo = new ToDo(taskList);
toDo.init();
