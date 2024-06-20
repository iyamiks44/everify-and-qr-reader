<script>
export default {
    name: 'EregisterButton',
    methods: {
        startLiveness() {
            eKYC().start({
          pubKey: "eyJpdiI6IlVGbkt3OHdXdCsxWFRDOWs0eDZYaHc9PSIsInZhbHVlIjoiWmpHVDJNcU9GTE1aTjdsMmd4ZzRjQT09IiwibWFjIjoiOWFiOTNlOGZlNTlkYTI2N2EzZTUyMTdhMWIyMDdmODI3N2ZiMWZkYzRjYzFhMDU4MDc2NGRmZmQ3YmVmODc4MyIsInRhZyI6IiJ9"
        }).then((data) => {
          const el = document.getElementById('response');
          el.textContent = JSON.stringify(data, undefined, 2);
        }).catch((err) => {
          console.log('error', err);
        });
      },
          
        },
        mounted() {
            const script = document.createElement('script');
        script.src = 'https://liveness.everify.gov.ph/js/everify-liveness-sdk.min.js';
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
        Register with PhilSys ID
    </button>
    <pre id="response"></pre>

</template>

<style>
</style>