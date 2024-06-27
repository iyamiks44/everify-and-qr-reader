<script>
export default {
    name: 'FaceLiveness',
    data(){
      return {
        status: '',
        sessionID: '',
        photoURL: ''
      }
    },
    methods: {
        startLiveness() {
            eKYC().start({
          pubKey: "eyJpdiI6IlVGbkt3OHdXdCsxWFRDOWs0eDZYaHc9PSIsInZhbHVlIjoiWmpHVDJNcU9GTE1aTjdsMmd4ZzRjQT09IiwibWFjIjoiOWFiOTNlOGZlNTlkYTI2N2EzZTUyMTdhMWIyMDdmODI3N2ZiMWZkYzRjYzFhMDU4MDc2NGRmZmQ3YmVmODc4MyIsInRhZyI6IiJ9"
        }).then((data) => {
          this.$store.commit('storeLiveness',data);
          this.status = data.status;
          this.sessionID = data.result.session_id;
          this.photoURL = data.result.photo_url;
        }).catch((err) => {
          console.log('error', err);
        });
      },
          
        },
        mounted() {
            const script = document.createElement('script');
        script.src = '/src/components/liveness-everify';
        script.onload = () => {
        console.log('External script loaded.');
    };
    script.onerror = () => {
    console.error('Failed to load the external script.');
    };
    document.head.appendChild(script);
  },
    }

</script>

<template>
  <h3><b> Please start Face Liveness to continue:</b></h3>
    <button @click="startLiveness()">
        Start Face Liveness
    </button>
    <div v-if="status" id="livenessDetails">
      <p id="copyID"> <h2>Session ID: </h2> {{ sessionID }}</p>
      <p id="copyURL"><h2> Photo URL: </h2><a :href="photoURL" target="_blank"> {{ photoURL }} </a></p>
    </div>

</template>

<style>
.livenessDetails{
  border-style: groove;
}

h2{
  display: block;
  margin-top: 10px;
}
</style>