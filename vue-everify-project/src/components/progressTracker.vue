<template>
    <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
    <div class="flex-container">{{ shouldFillBgColorS1 }}
      <div class="step1">
        <img src="../assets/green_check.svg" v-if="isValidS1">
        <img src="../assets/black_check.svg" v-else>
        <span v-if="shouldFillBgColorS1"></span>
        <p class="bold" :style="{ color: s1BgColor }">Step 1: QR Verification</p>
      </div>
      <div class="step2">
        <img src="../assets/green_check.svg" v-if="isValidS2">
        <img src="../assets/black_check.svg" v-else>
        <span v-if="shouldFillBgColorS2"></span>
        <p class="bold" :style="{ color: s2BgColor }">Step 2: Face Liveness Check</p>
      </div>
      <div class="step3">
        <img src="../assets/green_check.svg" v-if="isValidS3">
        <img src="../assets/black_check.svg" v-else>
        <span v-if="shouldFillBgColorS3"></span>
        <p class="bold" :style="{ color: s3BgColor }">Step 3: Review Details</p>
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
            isValidS1: false,
            isValidS2: false,
            isValidS3: false
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
            this.s1BgColor = '#4BCA80'
            this.isValidS1 = true
        },
        fillBgColorS2() {
            this.s2BgColor = '#4BCA80'
            this.isValidS2 = true
        },
        fillBgColorS3() {
            this.s3BgColor = '#4BCA80'
            this.isValidS3 = true
        }
    }
    
  }
  </script>
  
  <style scoped>
  img {
    max-width: 20px;
    margin: 8px;
  }
  
  .flex-container {
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 16px;
    width: 70%;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;

  }
  
  .step1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: none;
    padding: 10px;
    border-radius: 10px;
    font-family: 'Open Sans';
    font-size: 16px;
    box-sizing: border-box;
    max-width: 33.33%;
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
    font-family: 'Open Sans';
    font-size: 16px;
    box-sizing: border-box;
    max-width: 33.33%;
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
    font-family: 'Open Sans';
    font-size: 16px;
    box-sizing: border-box;
    max-width: 33.33%;
    /* background: linear-gradient(to right, lightgreen 50%, transparent 50%); */
  }
  </style>
  