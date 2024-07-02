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
    '$store.state.livenessData': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fillIn();
        }
      }
    },
    // '$store.state.data': {
    //   immediate: true,
    //   handler(newVal) {
    //     if (newVal) {
    //       console.log('it works')
    //       this.callStartLiveness();
    //     }
    //   }
    // }
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
        // this.birthDate = obj.subject.DOB
        // this.cellNo = obj.mobile_number
        // this.email = obj.email
        // this.faceLiveness = obj.faceLiveness
        // console.log(this.information)
        // const obj = JSON.parse(this.information);
        // this.firstName = obj.firstName

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
    <!-- <div v-if="this.$store.state.data ? fillIn():{}"></div>  -->
    <form @submit.prevent="handleSubmit()" v-show="this.$store.state.data && this.$store.state.livenessData">
        <input type="text" required placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="Middle Name (optional)" v-model="middleName">
        <input type="text" required placeholder="Last Name" v-model="lastName">
        <input type="text" placeholder="Suffix (optional)" v-model="suffix">
        <input type="date" v-model="birthDate">
        <input type="text" required placeholder="Mobile Number" v-model="cellNo">
        <input type="email" required placeholder="Email Address" v-model="email">
        <button v-show="this.$store.state.data && this.$store.state.livenessData">Register</button>
    </form>
    <div v-show="this.$store.state.data"><FaceLiveness /></div>
     <!-- <FaceLiveness ref="faceliveness"/> -->
</template>
<style scoped>
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

button:hover {
  background-color: #A11116
}
button:active {
  background-color: #e4bebc
}

</style>