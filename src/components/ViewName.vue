<template>
    <div id="viewName">
        <h3>Welcome, {{ last() }}</h3>
        <p>Name[first]: <span>{{ first() }}</span></p>
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
        this.name.first= first
        this.name.last= last
    },
    methods: {
        first() {
            let { first }= this.name
            if (first) return first[0].toUpperCase()+first.slice(1)
        },
        last() {
            let { last }= this.name
            if (last) return last[0].toUpperCase()+last.slice(1)
        }
    }
}
</script>