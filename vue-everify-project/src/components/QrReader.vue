<template>
    <div v-show="scanning">
      <button @click="stopVideo">Stop Scanning</button><br>
      <video ref="video" style="display: none"></video>
      <canvas ref="canvas" width="500" height="500"></canvas><br>
      Please Scan the QR code on your PhilSys ID
    </div>
  </template>
  
  <script>
  export default {
    name: 'QrReader',
    data() {
      return {
        stream: null,
        scanning: false,
        qrData: '',
      };
    },
    watch: {
      scanning(newVal) {
        if (newVal) {
          this.startVideo();
        } else {
          this.stopVideo();
        }
      }
    },
    
    methods: {
      startVideo() {
        const video = this.$refs.video;
        const canvas = this.$refs.canvas;
        const context = canvas.getContext('2d', { willReadFrequently: true });
  
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
          .then(stream => {
            this.stream = stream;
            video.srcObject = stream;
            video.setAttribute('playsinline', true);
            video.play();
            requestAnimationFrame(this.tick);
          });
      },
      stopVideo() {
        if (this.stream) {
          this.stream.getTracks().forEach(track => track.stop());
          this.stream = null;
          this.scanning = false;
          this.$store.commit('changeScanning', false)
          
        }
      },
      tick() {
        if (!this.scanning) return;
  
        const video = this.$refs.video;
        const canvas = this.$refs.canvas;
        const context = canvas.getContext('2d', { willReadFrequently: true });
  
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: 'dontInvert',
            narrowScanRegion: true,
          });
  
          if (code) {
            this.qrData = code.data;
            this.$store.commit('load',this.qrData);
            this.$store.commit('changeFaceLivenessReady', true)
            this.stopVideo();
          }
        }
        requestAnimationFrame(this.tick);
      },
    },
    beforeDestroy() {
      this.stopVideo();
    },
    mounted() {
            const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js';
        script.onload = () => {
        console.log('External script loaded.');
    };
    script.onerror = () => {
    console.error('Failed to load the external script.');
    };
    document.head.appendChild(script);
  },
    
  };
  </script>
  
  <style scoped>
  button {
    border-style:solid;
    border-radius: 10px;
    border: none;
    padding: 10px;
    margin: 5px 0;
    width: 100%;
    box-sizing: border-box;
}
button:hover {
  background-color: #e9e9e9;
}
button:active {
  background-color: #c2c2c2
}
  </style>
  