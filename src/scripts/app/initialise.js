//Intialisation setup with various sample projects
import ToDo from './todo.js';
import {
    Project,
    ProjectLibrary,
} from './project.js';
import {
    renderProjectLibrary,
    renderProjectToDos,
} from './render.js';

function initialiseProjects() {
    const projectLibrary = new ProjectLibrary();

    const dailyTasks = new Project(
        'Daily Tasks',
        'A project full of daily tasks.'
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
    );

    const measureLength = new ToDo(
        'Measure Fence Length',
        'Need to measure the length of the southern boundary.',
        '20/08/2026',
        'Medium',
    )

    const buyPosts = new ToDo(
        'Buy Fence Posts',
        'Make sure you get enough',
        '25/08/2026',
        'Medium',
    )

    fixFences.addToDo(measureLength);
    fixFences.addToDo(buyPosts);

    const installLightbar = new Project(
        'Install Lightbar',
        'I need to install a lightbar on the Camry.'
    );

    projectLibrary.addProject(dailyTasks);
    projectLibrary.addProject(fixFences);
    projectLibrary.addProject(installLightbar);

    renderProjectLibrary(projectLibrary);
    renderProjectToDos(fixFences);

}

export default initialiseProjects;
