//Class for a project
class Project {
    constructor(
        name,
        description
    ) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.toDoList = {};
    }

    printProjectDetails() {
        console.log(`Project Name: ${this.name}`);
        console.log(`Project Description: ${this.description}`);
    }

    printToDoItems() {
        Object.entries(this.toDoList).forEach(([id, toDo]) => {
            toDo.printToDo();
        })
    }

    addToDo(
        ToDoItem,
    ) {
        this.toDoList[ToDoItem.id] = ToDoItem;
    }

    removeToDo(
        ToDoItem,
    ) {
        delete this.toDoList[ToDoItem.id];
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