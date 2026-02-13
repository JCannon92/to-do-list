//Class for a todo

class ToDoItem {
    constructor (
        title,
        description,
        dueDate,
        priority,
    ) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = 'New';
    }

    printToDo () {
        console.log('Title: ' + this.title);
        console.log('Description: ' + this.description);
        console.log('Due Date: ' + this.dueDate);
        console.log('Priority: ' + this.priority);
        console.log('Status: ' + this.status);
    }

    set status (value) {
        this.status = value;
    }
}

export default ToDoItem;