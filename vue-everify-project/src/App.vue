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
        showQrReader() {
            this.scanning = true;
            this.$refs.QrReader.scanning = true;
        },
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
            scanning: false,
            details: "",
            showForm: this.$store.state.showForm, 

        }
    },
}

</script>

<template>
    <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
    <img src="./assets/bpi-logo.svg"><br>
    <div v-show="!scanning"><button @click="showQrReader()">
        Register with PhilSys ID
    </button></div>
    <div v-show="!scanning"><button @click="goToQrReader()">Qr Reader</button></div>
    
    <div><QrReader ref="QrReader" :scanning="scanning" /></div><br>
    <!-- <div v-on:scanned="fillData($emit)"></div> -->
    <div v-show="!scanning"><SignUpForm :information="details"/></div>
    <!-- <RouterView></RouterView> -->
    
</template>

<style scoped>

</style>
