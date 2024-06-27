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
        changeScanning() {
            this.$store.commit('changeScanning',true);
            this.$refs.QrReader.scanning = !this.$refs.QrReader.scanning;
            // console.log('changed')
        }
    },
    data() {
        return {
            // scanning: false,
            details: "",
            scanning: this.$store.state.scanning ,
            livenessID: this.$store.state.livenessData,

        }
    },
}

</script>

<template>
    <img src="./assets/bpi-logo.svg"><br>
    <div v-show="!this.$store.state.scanning"><button @click="changeScanning()">
        Register with PhilSys ID
    </button></div>
    <div><QrReader ref="QrReader" :scanning="scanning" /></div><br>
    <div v-show="!this.$store.state.scanning"><SignUpForm :information="details"/></div>  
    <div>{{ livenessID }}</div>  
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
