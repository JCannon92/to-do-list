//Class for a project
class Project {
    constructor(
        name,
        description
    ) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.toDos = {};
    }

    printProjectDetails() {
        console.log(`Project Name: ${this.name}`);
        console.log(`Project Description: ${this.description}`);
    }

    printToDoItems() {
        Object.entries(this.toDos).forEach(([id, toDo]) => {
            toDo.printToDo();
        })
    }

    addToDo(ToDoItem) {
        this.toDos[ToDoItem.id] = ToDoItem;
    }

    removeToDo(ToDoItem) {
        delete this.toDos[ToDoItem.id];
    }

    getToDosArray() {
        return Object.values(this.toDos);
    }

}

//Class for a container for all projects
class ProjectLibrary {
    constructor() {
        this.projects = {};
    }

    getProject(projectId) {
        return this.projects[projectId];
    }

    addProject(project) {
        this.projects[project.id] = project;
    }

    removeProject(project) {
        delete this.projects[project.id];
    }

    getProjectArray() {
        return Object.values(this.projects);
    }
}

export {
    Project,
    ProjectLibrary
};