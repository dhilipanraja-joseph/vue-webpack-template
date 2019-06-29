<template>
    <div id="app">
        <h2>Vue Apps:</h2>
        <p>
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
