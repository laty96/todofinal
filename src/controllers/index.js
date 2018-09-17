var todoStorage = {
    fetch: function () {
      var todos = JSON.parse(localStorage.getItem('vuejsTodo') || '[]')
      // todoStorage.count = {
      //     completedTodo: 0,
      //     allTodo: 0,
      //     activeTodo: 0
      //   };
        todos.forEach(function (todo, index) {
          todo.id = index
        })
        todoStorage.uid = todos.length
      // todos.forEach(function (todo, index) {
      //   todo.id = index
      //   if (todo.isCompleted) todoStorage.count.completedTodo++;
      // })
      // todoStorage.uid = todos.length;
      // todoStorage.count.allTodo = todoStorage.uid;
      // todoStorage.count.activeTodo = todoStorage.uid - todoStorage.count.completedTodo;
      return todos
    },
    save: function (todos) {
      localStorage.setItem('vuejsTodo', JSON.stringify(todos))
    },
    count: function(todos) {
      if (!todos) return;
      let completedTodo = 0,
          allTodo = 0,
          activeTodo = 0;

      todos.forEach(function (todo, index) {
        todo.id = index
        if (todo.isCompleted) completedTodo++;
      })
      allTodo = todos.length;
      activeTodo = allTodo - completedTodo;
      return {
        activeTodo,
        allTodo,
        completedTodo
      }
    }
  }

export default todoStorage;