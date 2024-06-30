<template>
    <div class="flex-container">
      <div class="step1">
        <img src="../assets/gg_check-o.png">
        <span>Step 1: Register with PhilSys ID</span>
      </div>
      <div class="step2">
        <img src="../assets/gg_check-o.png">
        <span>Step 2: Complete the faceliveness check</span>
      </div>
      <div class="step3">
        <img src="../assets/gg_check-o.png">
        <span>Step 3: Register</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressTracker',
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
  