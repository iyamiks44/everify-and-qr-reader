<script>
import SignUpForm from './components/SignUpForm.vue';
import QrReader from './components/QrReader.vue';
import { RouterView } from 'vue-router';
import { storeKey } from 'vuex';


export default {
    name: 'App',
    components: {
        SignUpForm,
        QrReader,
    },
    methods: {
        changeScanning() {
            this.$store.commit('changeScanning',true);
            this.$refs.QrReader.scanning = true;
            console.log('changed')
        }
        // showQrReader() {
        //     this.scanning = true;
        //     this.$refs.QrReader.scanning = true;
        // },
        // fillData(data) {
        //     this.details = data
        // },
        // goToQrReader() {
        //     console.log('goto')
        //     this.$router.push('/qrreader')
        // }
    },
    data() {
        return {
            // scanning: false,
            details: "",
            scanning: this.$store.state.scanning 

        }
    },
}

</script>

<template>
    <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
    <img src="./assets/bpi-logo.svg"><br>
    <div v-show="!this.$store.state.scanning"><button @click="changeScanning()">
        Register with PhilSys ID
    </button></div>
    <!-- <div v-show="!this.$store.state.scanning"><button @click="goToQrReader()">Qr Reader</button></div> -->
    
    <div><QrReader ref="QrReader" :scanning="scanning" /></div><br>
    <!-- <div v-on:scanned="fillData($emit)"></div> -->
    <div v-show="!this.$store.state.scanning"><SignUpForm :information="details"/></div>
    <!-- <RouterView></RouterView> -->
    
</template>

<style scoped>

</style>
