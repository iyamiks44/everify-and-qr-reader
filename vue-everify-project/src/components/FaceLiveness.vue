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
          console.log(data.status);
          this.sessionID = data.result.session_id;
          console.log('Session ID:', data.result.session_id);
          this.photoURL = data.result.photo_url;
          console.log('Photo URL:', data.result.photo_url);
          
        }).catch((err) => {
          console.log('error', err);
        });
      },
          
        },
        mounted() {
            const script = document.createElement('script');
        script.src = '/src/components/liveness-everify.js';
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
  <div class="scanPrompt bold"  v-show="!this.$store.state.livenessData"><h3> Please start Face Liveness to continue:</h3>
    <button @click="startLiveness()" class="bold">
        Start Face Liveness
    </button>
  </div>
  <div v-if="status" id="livenessDetails">
      <p id="copyID"><span>Session ID:</span> {{ sessionID }}</p>
      <p id="copyURL"><span> Photo URL: </span><a :href="photoURL" target="_blank">Click to open Photo URL in a new tab</a></p>
  </div>

</template>

<style>
p {
  font-weight: bold;
  padding-left: 15%;
}
.livenessDetails{
  border-style: groove;
  font-family: "Open Sans";
  width: 70%;
  margin: auto;
}

h2{
  display: block;
  margin-top: 10px;
}

button {
  border-style: solid;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
  font-family: "Open Sans";
}

button:hover{
  background-color: #e9e9e9;
}

button:active{
  background-color: #c2c2c2;
}

.scanPrompt{
  width: 70%;
  margin: auto;
}

.bold{
  font-weight: bold;
}

</style>