<template>
  <div class="todos">
    <div>
      <input type="checkbox" id="checkall" v-model="completeAll" @click="checkAll">
      <label for="checkall"></label>
      <input type="text" autofocus v-model="newTodo" @keyup.enter="addTodo" class="addTodo">
    </div>
    <todo :todoList="todosList"/>
    <todoCount :count="count"/>
  </div>
</template>

<script>
import Todo from './Todo';
import TodoCount from './TodoCount';

import TodoModel from '../models/todo.model.js';
import todoStorage from '../controllers/index.js';
import modifyTodo from '../controllers/ModifyTodo.js';

export default {
  name: 'Todos',
  props: {
    title: String,
    todoList: Object
  },
  components: {
    Todo, TodoCount
  },
  data() {
    return {
      newTodo: '',
      saveTodoo: '',
      completeAll: false,
      todosList: modifyTodo.fetchTodos(),
      count: {},
    }
  },
  watch: {
    todosList: {
      handler: function (todosList) {
        // todoStorage.save(todosList);
        // todosList= todoStorage.fetch();
        // this.count = todoStorage.count;
        // console.log(todoStorage.count);

        modifyTodo.saveTodos(todosList);
        todosList = modifyTodo.fetchTodos();
        this.count = modifyTodo.count(todosList);
        // console.log(this.count); 
        
      },
      deep: true 
    }
  },
  methods: {
    addTodo: function() {
      let a = this.newTodo;
      if (!a) return;
      let b = new TodoModel({
          id: todoStorage.uid++,
          title: this.newTodo
      });
      modifyTodo.fetchTodos()
      this.todosList.push(b);
      this.newTodo = '';
      this.completeAll = false;
      this.todosList.forEach(function (todo, index) {
          todo.id = index
        })
    },
    checkAll() {
      for (let i in this.todosList) {
        this.todosList[i].isCompleted = !this.completeAll;
      }
    }   
  },
  created() {
    this.count = modifyTodo.count(this.todosList);
    this.todosList = modifyTodo.fetchTodos();
    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.addTodo {
  padding: 10px;
  font-size: 20px;
  border-radius: 15px;
  outline: none;
  border:2px solid #999;
}
input[type="checkbox"] {
  display: none;
  
}
input[type="checkbox"]:checked + label{
    background-color: springgreen
}
input[type="checkbox"] + label {
    background-color: slategray;
    height: 15px;
    width: 15px;
    display: inline-block;
    border: 2px solid #999;
    vertical-align: text-bottom;   
    margin: 0 10px;
}
.completedTodo {
  text-decoration: line-through;
  border-color: transparent;
}
</style>
