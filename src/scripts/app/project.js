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

//There can only be on projectLibrary so it's an IIFE.
const projectLibrary = (() => {
    const library = {}; 
    
    const getLibrary = () => {
        return library
    }

    const getProject = (projectId) => {
        return library[projectId];
    }

    const addProject = (project) => {
        library[project.id] = project;
    }


    return {
        getLibrary,
        getProject,
        addProject,
    }

})();

export {
    Project,
    projectLibrary
};