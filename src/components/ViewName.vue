<template>
    <div id="viewName">
        <h3>Welcome, {{ name.last }}</h3>
        <p>First Name: <span>{{ name.first }}</span></p>
    </div>
</template>

<script>
export default {
    name: 'viewName',
    data() {
        return {
            name: {
                first: '',
                last: ''
            }
        }
    },
    created() {
        let [ first, last ]= this.$route.params.name.split(' ')
        this.name.first= this.cap(first)
        this.name.last= this.cap(last)
    },
    methods: {
        cap(str) {
            if (str) return str[0].toUpperCase()+str.slice(1)
            else return ''
        }
    }
}
</script> 