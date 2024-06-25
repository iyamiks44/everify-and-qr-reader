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
            scanning: this.$store.state.scanning 

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
</template>

<style scoped>

</style>
