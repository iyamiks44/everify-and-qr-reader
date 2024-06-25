<script>
import SignUpForm from './components/SignUpForm.vue';
import QrReader from './components/QrReader.vue';
import './assets/main.css';


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
            details: "",

        }
    },
}

</script>

<template>
    <header><img src="./assets/bpi-logo.svg"></header><br>
    <h1> Create an Account </h1>
    <button @click="showQrReader()" class="qrButton">
        Register with PhilSys ID
    </button><br>
    <div><QrReader ref="QrReader" :scanning="scanning" /></div><br>
    <div v-on:scanned="fillData($emit)"></div>
    <div><SignUpForm :information="details"/></div>
    
</template>

<style scoped>

img{
    width: auto;
    height: 100%;
    max-height: 10vh;
}

header{
    background-color: plum;
}

.qrButton{
    width: fit-content;
    float: right;
    margin: 15px;
}
</style>
