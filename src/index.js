import './styles/core.css';

import ToDo from './scripts/app/todo.js';
import {
    Project,
    projectLibrary,
} from './scripts/app/project.js'

//Intialisation setup with various sample ToDos
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

const dailyTasks = new Project(
    'Daily Tasks',
    'A project full of daily tasks'
);

projectLibrary.addProject(dailyTasks);

dailyTasks.addToDo(waterPlants);
dailyTasks.addToDo(vacuumHouse);

