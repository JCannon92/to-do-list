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

export default Project;