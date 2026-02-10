import './styles/core.css';

import ToDo from './scripts/app/create-todo.js';

const newToDo = new ToDo(
    'Water Plants',
    'I need to water the plants in the garden beds.',
    '12/02/2026',
    'Low',
);

newToDo.printToDo();