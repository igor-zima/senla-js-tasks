import { ToDo } from './script/ToDo';

import './style.css';

const taskList = document.getElementById('task-list');

const toDo = new ToDo(taskList);
toDo.init();
