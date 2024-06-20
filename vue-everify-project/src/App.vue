<script>
import SignUpForm from './components/SignUpForm.vue'
import EregisterButton from './components/EregisterButton.vue'

export default {
    name: 'App',
    components: {
        SignUpForm,
        EregisterButton
    }
}

</script>

<template>
    <EregisterButton />
    <SignUpForm />

</template>

<style scoped>

</style>
