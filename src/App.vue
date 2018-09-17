<template>
  <div id="app">
    <h1>Todos</h1>
    <todos title="Some title"/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todos,
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  body {
    background: rgb(231, 231, 231);
  };
</style>
