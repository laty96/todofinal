<template>
    <div class="todoItem">
        <div v-for="item in todoList" :key="item.id">
            <input type="checkbox" v-bind:id="item.id" v-model="item.isCompleted">
            <label v-bind:for="item.id"></label>
            <input type="text" 
              v-bind:readonly="item.isCompleted" 
              v-bind:class="{completedTodo: item.isCompleted}" 
              v-model="item.title" 
              @keyup.enter="editTodo(item)">
            <button @click="removeTodo(item)">&times;</button>
        </div>
    </div>
</template>

<script>
import todoStorage from '../controllers/index.js';
import modifyTodo from '../controllers/ModifyTodo.js';

export default {
    name: "Todo",
    props: {
        todoList: Array,
        index: Number
    },
    // data() {
        
    //     return {
    //         // todosList: this.todoList
    //     }
    // },
    methods: {
        removeTodo: function(item) {
            this.todoList.splice(this.todoList.indexOf(item), 1);
        },
        editTodo: function(index, title) {
            // console.log(this.todoList);
            
            for (let i = 0; i < this.todoList.length; i++) {
                if (this.todoList[i].id == index) {
                    this.todoList[i].title = title;
                    // todoStorage.save(this.todoList)
                }
                
            }
        }  
    },
    // watch: {
    //     todoList: {
    //         handler: function (todoList) {
    //             // modifyTodo.saveTodos(todoList);
    //         },
    //         deep: true  
            
    //     }
    // },
    // mounted() {
        
    // },
    // created() {
        
    // },
    // beforeMount() {
        
    // },
    // beforeCreate() {
        
    // }
}
</script>

<style scoped>

.todoItem input[type="text"] {
  padding: 5px;
  font-size: 15px;
  border-radius: 15px;
  margin: 5px;
  box-sizing: border-box;
}

.todoItem input[type="checkbox"] {
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
    vertical-align: middle;   
}
.completedTodo {
  text-decoration: line-through;
  border-color: transparent;
}
button {
    vertical-align: middle;  
}

</style>
