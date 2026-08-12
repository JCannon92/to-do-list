import './styles/core.css';
import './styles/project.css'

import ToDo from './scripts/app/todo.js';

import {
    Project,
    ProjectLibrary,
} from './scripts/app/project.js';

import {
    renderProjectLibrary,
} from './scripts/app/render.js';

//Intialisation setup with various sample projects
const projectLibrary = new ProjectLibrary();

const dailyTasks = new Project(
    'Daily Tasks',
    'A project full of daily tasks'
);
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

dailyTasks.addToDo(waterPlants);
dailyTasks.addToDo(vacuumHouse);
dailyTasks.addToDo(feedCat);

const fixFences = new Project(
    'Fix Fences',
    'Fences need fixing around southern boundary.'
)

projectLibrary.addProject(dailyTasks);
projectLibrary.addProject(fixFences);

renderProjectLibrary(projectLibrary);

//For debugging purposes
window.projectLibrary = projectLibrary;