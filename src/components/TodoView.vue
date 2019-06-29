<template>
    <div id="todoView">
        <ol>
            <li v-for="(todo, index) in todos" v-bind:key="index"> 
                <span class="todo done" v-if="todo.isDone" v-on:click="todo.isDone=false">{{ todo.text }}</span>
                <span class="todo" v-else v-on:click="todo.isDone=true">{{ todo.text }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'todoView',
    props: ['todos'],

}
</script>

<style>
    .todo {
        cursor: pointer;
    }    
    .done {
        text-decoration-line: line-through;
        font-style: italic;
    }
</style>


