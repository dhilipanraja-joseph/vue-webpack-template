<template>
    <div id="todo">
        <h2>Todo List</h2>
        <TodoView 
            v-bind:todos="todos" 
            v-bind:deleteTodo="deleteTodo"
            v-bind:updateTodo="updateTodo"
        />
        <input 
            id="todo_input" 
            v-on:keyup.enter="submit" 
            v-model="todo" 
            placeholder="Add to List"
        />
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
            todos: [
                // {text: 'test Todo', isDone: false },
                // {text: 'testTodo', isDone: true },
            ],
        }
    },
    methods: {
        submit() {
            if (this.todo) {
                this.todos= this.todos.concat({
                    text: this.todo,
                    isDone: false
                })
            }
            this.todo=''
        },
        deleteTodo(index) {
            this.todos= this.todos.filter((e,i)=> index!==i)
        },
        updateTodo(index, todo) {
            this.todos[index]= {
                text: todo,
                isDone: false,
            }
        }
    }
}
</script>

<style>
#todo {
    color:#212121;
    width: 500px;
    margin: auto;
    text-align: center;
    border: 0px;
    border-radius: 10px;
    background-color: whitesmoke;
    padding: 20px;

}

#todo_input {
    text-align: left;
    width: 460px;
    padding: 5px 10px;
    margin: 0px;
    font-size: 20px;
    background-color: white;
    border: none;
    box-shadow: 0px 0px 2px #a7a7a7;
    color: #212121;
}

#todo_input:focus {
    box-shadow: 0px 0px 5px #a7a7a7;
}

#todo_input::placeholder {
    color: #bebebe;
    font-style: italic;
}
</style>