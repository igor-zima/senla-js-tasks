const taskList = document.getElementById('task-list');
const newTaskArea = document.getElementById('new-task__area');
const addTaskBtn = document.getElementById('add-btn');

const TASKS = [];

taskList.addEventListener('click', markTask);
addTaskBtn.addEventListener('click', addTask);

function markTask(evt) {
  const e = evt;

  if (e.target.classList.contains('task')) {
    const done = e.target.dataset.done === 'true' ? true : false;
    e.target.dataset.done = !done;
  }

  if (e.target.classList.contains('mark-btn')) {
    const important = e.target.closest('.task').dataset.important === 'true' ? true : false;

    e.target.classList.toggle('mark-btn_important');
    e.target.closest('.task').dataset.important = !important;
  }
}

function addTask() {
  const { value } = newTaskArea;

  const task = {
    value,
    important: false,
    done: false,
  };

  createTask(task);

  newTaskArea.value = '';

  TASKS.push(task);
}

function createTask({ value, important, done }) {
  const btnImportant = important ? '' : 'mark-btn_important';

  const html = `
    <li class="task" data-important=${important} data-done=${done}>
      <div class="task-btn__wrapper">
        <button class="mark-btn ${btnImportant}">Mark important</button>
        <button class="delete-btn"></button>
      </div>
      <div class="star"></div>
      <span class="task__text">${value}</span>
    </li>`;

  taskList.insertAdjacentHTML('beforeend', html);
}
