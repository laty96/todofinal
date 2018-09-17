const todoStorage = require('./index');

var modifyTodo = {
    fetchTodos() {
        return todoStorage.default.fetch();
    },
    saveTodos(item) {
        // console.log(item);
        todoStorage.default.save(item);
    },
    delTodo(item) {

    },
    editTodo(item) {

    },
    count(a) {
        // console.log(todoStorage.default.count(a));
        
        return todoStorage.default.count(a);
    }
}

export default modifyTodo;