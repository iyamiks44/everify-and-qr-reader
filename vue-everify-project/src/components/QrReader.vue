<template>
    <div v-show="scanning">
      <video ref="video" width="300" height="300" style="display: none;"></video>
      <canvas ref="canvas" width="300" height="300"></canvas>
      <div ref="result"></div>
    </div>
    <p>{{ qrData }}</p>
  </template>
  
  <script>
  import { store } from './store.js'
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
        const context = canvas.getContext('2d');
        const result = this.$refs.result;
  
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
        }
      },
      tick() {
        if (!this.scanning) return;
  
        const video = this.$refs.video;
        const canvas = this.$refs.canvas;
        const context = canvas.getContext('2d');
  
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
            this.$refs.result.textContent = code.data;
            this.qrData = code.data;
            this.$emit('scanned', this.qrData);
            video.pause();
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
  /* Add your styles here */
  </style>
  