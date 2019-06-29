<template>
    <div id="enterName">
        <input v-model="name" placeholder="your-name-here"/>
        <button v-on:click="go">Go</button>
    </div>
</template>

<script>
export default {
    name: 'enterName',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        go() {
            this.$router.push(`/user/${this.name}`)
        }
    }
}
</script>

