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
    
    <Transition><button class="regButton" v-show="!this.$store.state.scanning" @click="changeScanning()">
        Register with PhilSys ID
    </button></Transition>
    <ProgressTracker />
    <div style="max-height: 60%;max-width: 60%; text-align: center; margin: auto"><QrReader ref="QrReader" :scanning="scanning" /></div><br>
    <Transition><div v-show="!this.$store.state.scanning"><SignUpForm :information="details"/></div> </Transition>
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
}

.regButton{
    border-style:solid;
    border-radius: 10px;
    border: none;
    padding: 13px;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    width: 80%;
    box-sizing: border-box;
    display: block;
    background-color: #B11116;
    color: #F8f8f8
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
