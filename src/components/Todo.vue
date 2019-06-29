<template>
    <div id="todo">
        <label>
            Add to List: 
            <input v-on:keyup.enter="submit" v-model="todo" />
        </label>
        <TodoView v-bind:todos="todos" />
    </div>
</template>

<script>

import TodoView from './TodoView.vue'
export default {
    name: 'todo',
    components: {
        TodoView
    },
    data() {
        return {
            todo: '',
            todos: [],
        }
    },
    methods: {
        submit() {
            this.todos= this.todos.concat({
                text: this.todo,
                isDone: false
            })
            this.todo=''
        }
    }
}
</script>

