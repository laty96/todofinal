class TodoModel {
    constructor(todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.isCompleted = false;
        this.created = Date.now();
    }
}

export default TodoModel;