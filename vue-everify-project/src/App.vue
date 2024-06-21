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
        fillData(data) {
            this.details = data
        },
    },
    data() {
        return {
            scanning: false,
            details: '',

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
    <div v-on:scanned="fillData($emit)"></div>
    <SignUpForm :information="details"/>
    
</template>

<style scoped>

</style>
