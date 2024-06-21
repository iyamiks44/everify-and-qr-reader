<script>
import SignUpForm from './components/SignUpForm.vue';
import QrReader from './components/QrReader.vue';


export default {
    name: 'App',
    components: {
        SignUpForm,
        QrReader,
    },
    methods: {
        showQrReader() {
            this.scanning = true;
            this.$refs.QrReader.scanning = true;
        },
    },
    data() {
        return {
            scanning: false,
            details: [],

        }
    },
}

</script>

<template>
    <img src="./assets/bpi-logo.svg"><br>
    <button @click="showQrReader()">
        Register with PhilSys ID
    </button><br>
    <div><QrReader ref="QrReader" :scanning="scanning" /></div><br>
    <SignUpForm />
    
</template>

<style scoped>

</style>
