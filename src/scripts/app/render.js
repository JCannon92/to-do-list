//Return a DOM element of project.
function createProjectElement(project) {
    const projectElement = window.document.createElement("div");
        projectElement.classList.add("project");

    const projectTitle = window.document.createElement("h1");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.name;
    const projectDescription = window.document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = project.description;

    projectElement.appendChild(projectTitle);
    projectElement.appendChild(projectDescription);

    return projectElement;
    
}

//Return a DOM element of todo.
function createToDoElement(todo) {
    const todoElement = window.document.createElement("div");
        todoElement.classList.add("to-do");

    const todoTitle = window.document.createElement("h1");
        todoTitle.classList.add("to-do-title");
        todoTitle.textContent = todo.title;
    
    const todoDescription = window.document.createElement("p");
        todoDescription.classList.add("to-do-description");
        todoDescription.textContent = todo.description;
    
    const todoDueDate = window.document.createElement("p");
        todoDueDate.classList.add("to-do-due-date");
        todoDueDate.textContent = todo.dueDate;

    const todoPriority = window.document.createElement("p");
        todoPriority.classList.add("to-do-priority");
        todoPriority.textContent = todo.priority;

    const todoStatus = window.document.createElement("p");
        todoStatus.classList.add("to-do-status");
        todoStatus.textContent = todo.status;

    todoElement.appendChild(todoTitle);
    todoElement.appendChild(todoDescription);
    todoElement.appendChild(todoDueDate);
    todoElement.appendChild(todoPriority);
    todoElement.appendChild(todoStatus);

    return todoElement;
}

//Render individual to-do on window.
function renderToDo(todo) {
    const todoListElement = window.document.querySelector("div.to-dos");
    const todoElement = createToDoElement(todo);

    todoListElement.appendChild(todoElement);
}

//Render all a project's to-dos on window.
function renderProjectToDos(project) {
    project.getToDosArray().forEach(renderToDo);
}

//Render individual project on window.
function renderProject(project) {
    const projectListElement = window.document.querySelector("div.projects");
    const projectElement = createProjectElement(project);
    
    projectListElement.appendChild(projectElement);
}

//Render all projects in project library on window.
function renderProjectLibrary(projectLibrary) {
    //Loop through project list and render each one to projectListElement
    projectLibrary.getProjectArray().forEach(renderProject);
}


export {
    renderProjectLibrary,
    renderProjectToDos,
};