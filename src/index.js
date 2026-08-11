import './styles/core.css';

import ToDo from './scripts/app/todo.js';
import {
    Project,
    ProjectLibrary,
} from './scripts/app/project.js'

//Intialisation setup with various sample ToDos
const waterPlants = new ToDo(
    'Water Plants',
    'I need to water the plants in the garden beds.',
    '12/08/2026',
    'Low',
);

const vacuumHouse = new ToDo(
    'Vacuum House',
    'I need to vacuum all rooms in the house thoroughly before the party.',
    '15/08/2026',
    'High',
);

const feedCat = new ToDo(
    'Feed Cat',
    'I need to feed the cat.',
    '16/08/2026',
    'High',
);

const dailyTasks = new Project(
    'Daily Tasks',
    'A project full of daily tasks'
);

const projectLibrary = new ProjectLibrary();
projectLibrary.addProject(dailyTasks);

dailyTasks.addToDo(waterPlants);
dailyTasks.addToDo(vacuumHouse);
dailyTasks.addToDo(feedCat);

//For debugging purposes
window.projectLibrary = projectLibrary;