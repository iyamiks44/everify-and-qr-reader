<template>
    <div class="flex-container">
      <div class="step1" v-bind:style="{ backgroundColor: s1BgColor }">
        <img src="../assets/gg_check-o.png" v-show="this.$store.state.data">
        <span v-if="shouldFillBgColorS1"</span>
        <span>Step 1: Register with PhilSys ID</span>
      </div>
      <div class="step2" v-bind:style="{ backgroundColor: s2BgColor }">
        <img src="../assets/gg_check-o.png" v-show="this.$store.state.livenessData">
        <span v-if="shouldFillBgColorS2"</span>
        <span>Step 2: Complete the faceliveness check</span>
      </div>
      <div class="step3" v-bind:style="{ backgroundColor: s3BgColor }">
        <img src="../assets/gg_check-o.png" v-show="this.$store.state.livenessData && this.$store.state.data">
        <span v-if="shouldFillBgColorS3"</span>
        <span>Step 3: Check details and Register</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressTracker',
    data() {
        return {
            s1BgColor: '',
            s2BgColor: '',
            s3BgColor: '',
        }
        
    },
    computed: {
        shouldFillBgColorS1() {
            if (this.$store.state.data) {
                this.fillBgColorS1();
            }
        },
        shouldFillBgColorS2() {
            if (this.$store.state.livenessData) {
                this.fillBgColorS2();
            }
        },
        shouldFillBgColorS3() {
            if (this.$store.state.livenessData) {
                this.fillBgColorS3();
            }
        }
    },
    methods: {
        fillBgColorS1() {
            this.s1BgColor = 'lightgreen'
        },
        fillBgColorS2() {
            this.s2BgColor = 'lightgreen'
        },
        fillBgColorS3() {
            this.s3BgColor = 'lightgreen'
        }
    }
    
  }
  </script>
  
  <style scoped>
  img {
    max-width: 20px;
  }
  
  .flex-container {
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px
  }
  
  .step1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: none;
    padding: 10px;
    border-radius: 10px;
    /* background: linear-gradient(to right, lightgreen 50%, transparent 50%); */
  }
  .step2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: none;
    padding: 10px;
    border-radius: 10px;
    /* background: linear-gradient(to right, lightgreen 50%, transparent 50%); */
  }
  .step3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: none;
    padding: 10px;
    border-radius: 10px;
    /* background: linear-gradient(to right, lightgreen 50%, transparent 50%); */
  }
  </style>
  