<script>
import SignUpForm from './components/SignUpForm.vue'
import EregisterButton from './components/EregisterButton.vue'


export default {
    name: 'App',
    components: {
        SignUpForm,
        EregisterButton,
    }
}

</script>

<template>
    <img src="./assets/bpi-logo.svg"><br>
    <EregisterButton /><br>
    <SignUpForm />
    
</template>

<style scoped>

</style>
