<template>
    <div id="todoView">
        <ul>
            <li v-for="(todo, index) in todos" v-bind:key="index"> 
                <input 
                    id="todo_edit"
                    v-if="index===editAt" 
                    v-model="input"
                    v-on:keyup.enter="update"
                />
                <div 
                    class="todo done" 
                    v-else-if="todo.isDone" 
                    v-on:click="todo.isDone=false" 
                    v-on:dblclick="delteTodo(index)"
                >{{ todo.text }}</div>
                <div 
                    class="todo" 
                    v-else v-on:click="todo.isDone=true" 
                >{{ todo.text }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'todoView',
    props: ['todos', 'deleteTodo', 'updateTodo'],
    data() {
        return {
            editAt: null,
            input: '',
        }
    },
    methods: {
        delteTodo(index) {
            this.deleteTodo(index)
        },
        setEditAt(index, text) {
            this.editAt= index
            this.input= text
        },
        update() {
            this.updateTodo(this.editAt, this.input)
            this.editAt= null
        }
    }
}
</script>

<style>
    .todo {
        font-size: 20px;
        width: 100%;
    }    
    .done {
        text-decoration-line: line-through;
        font-style: italic;
    }
    li {
        list-style-type: none;
        text-align: left;
        padding: 20px;
        margin-left: -40px;
        border-bottom: 1px solid #e6e6e6;
        cursor: pointer;
        transition: all .25s;
    }
    li:hover {
        background-color: white;
        border-radius: 10px;
        transition: all .25s;
        box-shadow: 0px 0px 10px #d3d3d3;
    }
    #todo_edit {
        padding: 0px;
        margin: 0px;
        outline: none;
        border: none;
        text-align: left;
        font-size: 20px;
    }
</style>


