<template>
    <div id="app">
        <!-- <h2>Vue Apps:</h2> -->
        <p id="routes">
            <router-link to='/'>Home</router-link>
            <router-link to='/todo'>Todo</router-link>
            <router-link to='/counter'> Counter </router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
}

</script>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    background-color: #333333;
}
a {
    color: white;
}

/* h3 {
    text-align: center;
} */
input {
    text-align: center;
    color: white;
    background-color: grey;
    outline: none;
    /* border: none; */
    border: 2px solid #a5a5a5;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
}
</style>

