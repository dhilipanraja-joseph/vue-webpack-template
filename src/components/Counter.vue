<template>
    <div id="counter">
        <p>Counter: {{ count }}</p>
        <button v-on:click="increment">up</button>
        <button v-on:click="decrement">down</button>
    </div>
</template>

<script>
export default {
    name: 'counter',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            this.count+=1
        },
        decrement() {
            this.count-=1
        },
    }
}
</script>
