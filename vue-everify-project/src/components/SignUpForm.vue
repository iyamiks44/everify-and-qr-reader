<script>
import FaceLiveness from './FaceLiveness.vue';


export default {
  name: 'SignUpForm',
  components: {
    FaceLiveness

  },
  props: {
    information: String,
  },
  data() {
    return {
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        cellNo: '',
        email: '',
        birthDate: '',
        faceLiveness: '',
    }
  },
  watch: {
    '$store.state.data': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fillIn();
        }
      }
    },
  },
  methods: {
    fillIn() {
        console.log(this.$store.state.data)
        const obj = JSON.parse(this.$store.state.data)
        console.log(obj)
        this.firstName = obj.subject.fName
        this.middleName = obj.subject.mName
        this.lastName = obj.subject.lName
        this.suffix = obj.subject.Suffix
        const dateString = obj.subject.DOB;
      const date = new Date(dateString);
      const formattedDate = date.getFullYear() + '-' +
                            ("0" + (date.getMonth() + 1)).slice(-2) + '-' +
                            ("0" + date.getDate()).slice(-2);
      this.birthDate = formattedDate;
    },
    handleSubmit() {
        console.log('submitted')
    },
    callStartLiveness() {
      this.$refs.faceliveness.startLiveness();
    }
  },
}
</script>
<template>
  <div class="container" v-show="this.$store.state.data && this.$store.state.livenessData">
    <form @submit.prevent="handleSubmit()">
        <input type="text" required placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="Middle Name (optional)" v-model="middleName">
        <input type="text" required placeholder="Last Name" v-model="lastName">
        <input type="text" placeholder="Suffix (optional)" v-model="suffix">
        <input type="date" v-model="birthDate">
        <input type="text" required placeholder="Mobile Number" v-model="cellNo">
        <input type="email" required placeholder="Email Address" v-model="email">
        <button v-show="this.$store.state.data && this.$store.state.livenessData">Register</button>
    </form>
  </div>
  <Transition>
    <div v-show="this.$store.state.data">
    <FaceLiveness />
    <div class="info">
      <span>First Name:</span> {{firstName}}<br>
      <span>Middle Name:</span> {{middleName}}<br>
      <span>Last Name:</span> {{lastName}}<br>
      <span>Suffix:</span> {{suffix}}<br>
      <span>Date of Birth:</span> {{birthDate}}
    </div>
    </div></Transition>
</template>
<style scoped>

.container {
  border: 2px solid #B11116;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
}

input, button {
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border-style: solid;
}

button {
  grid-column: span 2;
  justify-self: center;
  width: fit-content;
  border: none;
  background-color: #B11116;
  color: #E9E9E9;
  padding: 11px;
}
.info {
  margin-top: 16px;
  padding-left:15%;
  font-weight: bold;
}

button:hover {
  background-color: #A11116
}
button:active {
  background-color: #e4bebc
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>