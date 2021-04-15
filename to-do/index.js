class ToDo {
  constructor(list) {
    this.list = list;
    this.tasks = [];
    this.checkLocal();
    document.getElementById('add-btn').addEventListener('click', this.addTaskHandler);
    this.list.addEventListener('click', this.taskHandler);
  }

  checkLocal() {
    const localList = localStorage.getItem('taskList');

    if (localList) this.renderList(localList);
  }

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

  createTask(value) {
    const task = {
      value,
      important: false,
      done: false,
      id: Date.now(),
    };

    this.renderTask(task);

    this.tasks.push(task);
  }

  addTaskHandler = () => {
    const taskArea = document.getElementById('new-task__area');
    const { value } = taskArea;
    this.createTask(value);
    taskArea.value = '';
  };

  taskHandler = (e) => {
    if (e.target.classList.contains('task')) {
      const done = e.target.dataset.done === 'true' ? true : false;
      e.target.dataset.done = !done;
    }

    if (e.target.classList.contains('mark-btn')) {
      const important = e.target.closest('.task').dataset.important === 'true' ? true : false;

      e.target.classList.toggle('mark-btn_important');
      e.target.closest('.task').dataset.important = !important;
    }

    if (e.target.classList.contains('delete-btn')) {
      this.deleteTask(e);
    }
  };

  deleteTask = (evt) => {
    const { id } = evt.target.closest('.task').dataset;

    const index = this.tasks.findIndex((el) => el.id === +id);

    this.tasks.splice(index, 1);

    this.renderList(this.tasks);
  };
}

const taskList = document.getElementById('task-list');

const toDo = new ToDo(taskList);
