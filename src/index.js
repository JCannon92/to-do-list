import './styles/core.css';

import ToDo from './scripts/app/create-todo.js';
import Project from './scripts/app/create-project.js'

const waterPlants = new ToDo(
    'Water Plants',
    'I need to water the plants in the garden beds.',
    '12/02/2026',
    'Low',
);

const vacuumHouse = new ToDo(
    'Vacuum House',
    'I need to vacuum all rooms in the house thoroughly before the party.',
    '15/02/2026',
    'High',
)

const newProject = new Project(
    'Daily Tasks',
    'A project full of daily tasks'
);

newProject.addToDo(waterPlants);
newProject.addToDo(vacuumHouse);
newProject.printToDoItems();