<template>
    <div id="home">
        <p>Click on above links to switch components.</p>
        <EnterName />
    </div>
</template>

<script>
import EnterName from './EnterName.vue'
export default {
    name: 'home',
    components: {
        EnterName
    }
}
</script>
