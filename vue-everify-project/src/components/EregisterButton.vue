<script>
export default {
    name: 'EregisterButton',
    methods: {
        onClick() {
            console.log('click')
        }
    }
}

</script>

<template>
    <button @click="onClick()">
        Register with PhilSys ID
    </button>

</template>

<style>
</style>