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
    <button @click="startLiveness()">
        Start Face Liveness
    </button>
    <div v-if="status">
      <p id="copyID">Session ID: {{ sessionID }}</p>
      <p id="copyURL">Photo URL: <a :href="photoURL" target="_blank"> {{ photoURL }} </a></p>
      
  </div>

</template>

<style>
</style>