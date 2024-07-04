<template>
    <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
    <div class="flex-container">
      <div class="step step1" :class="{ 'valid': isValidS1 }">
        <img src="../assets/green_check.svg" v-if="isValidS1">
        <img src="../assets/black_check.svg" v-else>
        <p class="bold">Step 1: QR Verification</p>
      </div>
      <div class="step step2" :class="{ 'valid': isValidS2 }">
        <img src="../assets/green_check.svg" v-if="isValidS2">
        <img src="../assets/black_check.svg" v-else>
        <p class="bold">Step 2: Face Liveness Check</p>
      </div>
      <div class="step step3" :class="{ 'valid': isValidS3 }">
        <img src="../assets/green_check.svg" v-if="isValidS3">
        <img src="../assets/black_check.svg" v-else>
        <p class="bold">Step 3: Review Details</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressTracker',
    data() {
        return {
            isValidS1: false,
            isValidS2: false,
            isValidS3: false
        }
        
    },
    watch: {
      '$store.state.data': function() {
        this.isValidS1 = (this.$store.state.data != '')
      },
      '$store.state.livenessData': function() {
        this.isValidS2 = (this.$store.state.livenessData != '')
        this.isValidS3 = (this.$store.state.livenessData != '')
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
  }
  .step.valid p {
    color: #4BCA80;
  }
  </style>
  