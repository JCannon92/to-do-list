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
        this.projectList = {};
    }

    getProject(projectId) {
        return this.projectList[projectId];
    }

    addProject(project) {
        this.projectList[project.id] = project;
    }

    removeProject(project) {
        delete this.projectList[project.id];
    } 
}

export {
    Project,
    ProjectLibrary
};