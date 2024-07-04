<script>
import SignUpForm from './components/SignUpForm.vue';
import QrReader from './components/QrReader.vue';
import ProgressTracker from './components/progressTracker.vue'
import './assets/main.css';


export default {
    name: 'App',
    components: {
        SignUpForm,
        QrReader,
        ProgressTracker,
    },
    methods: {
        changeScanning() {
            this.$store.commit('changeScanning',true);
            this.$refs.QrReader.scanning = !this.$refs.QrReader.scanning;
            // console.log('changed')
            if(this.$store.state.data != '') {
                this.$store.commit('clearData', true)
            }
            if(this.$store.state.livenessData != '') {
                this.$store.commit('clearLivenessData', true)
            }
        }
    },
    data() {
        return {
            // scanning: false,
            details: "",
            scanning: this.$store.state.scanning ,
            livenessID: this.$store.state.livenessData,

        }
    }
}

</script>

<template>
    <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
    <img src="./assets/bpi-logo.svg"><br>
    
    <button class="regButton bold" v-show="!this.$store.state.scanning" @click="changeScanning()">
        Register with PhilSys ID
    </button>
    <ProgressTracker />
    <div style="max-height: 60%;max-width: 60%; text-align: center; margin: auto">
        <QrReader ref="QrReader" :scanning="scanning" />
    </div><br>
    <div v-show="!this.$store.state.scanning"><SignUpForm :information="details"/></div>  
    <div>{{ livenessID }}</div>  
</template>

<style scoped>

img{
    width: auto;
    height: 100%;
    max-height: 10vh;
    padding-left: 8px;
    padding-top: 8px;
    margin-bottom: 16px;
    align-self: start;
}

.regButton{
    border-style:solid;
    border-radius: 10px;
    border: none;
    padding: 12px;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    width: 70%;
    box-sizing: border-box;
    display: block;
    background-color: #B11116;
    color: #F8f8f8;
    font-family: 'Open Sans';
    font-size: 14px;
    letter-spacing: .1rem;
}

header{
    background-color: plum;
}

.qrButton{
    width: fit-content;
    float: right;
    margin: 15px;
}

button:hover {
  background-color:#a11116;
}

button:active {
  background-color: #E4BEBC
}
</style>
