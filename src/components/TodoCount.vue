<template>  
    <div class="footer" v-if="count.allTodo > 0">
        <div class="allTodo">
            {{count.allTodo}} todos
        </div>
        <div class="activeTodo">
            {{count.activeTodo}} active
        </div>
        <div class="completedTodo">
            {{count.completedTodo}} completed
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoCount",
    props: {
        count: Object
    },
    // mounted() {
    //     console.log(this.count);
        
    // }
    // watch: {
    //     count: function(count) {
    //         console.log(count);
            
    //     }
    // }
}
</script>

<style>
    .footer {
        display: grid;
        grid-template-columns: auto auto auto;
        width: 30vw;
        margin: auto;
    }
</style>
