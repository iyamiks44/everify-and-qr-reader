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
    '$store.state.livenessdata': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fillIn();
        }
      }
    }
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
        this.birthDate = obj.subject.DOB
        // this.cellNo = obj.mobile_number
        // this.email = obj.email
        // this.faceLiveness = obj.faceLiveness
        // console.log(this.information)
        // const obj = JSON.parse(this.information);
        // this.firstName = obj.firstName

    },
    handleSubmit() {
        console.log('submitted')
    }
  },
}
</script>
<template>
    <!-- <div v-if="this.$store.state.data ? fillIn():{}"></div>  -->
    <form @submit.prevent="handleSubmit()">
        <input type="text" required placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="Middle Name (optional)" v-model="middleName">
        <input type="text" required placeholder="Last Name" v-model="lastName">
        <input type="text" placeholder="Suffix (optional)" v-model="suffix">
        <input type="date" v-model="birthDate">
        <input type="number" required placeholder="Mobile Number" v-model="cellNo">
        <input type="email" required placeholder="Email Address" v-model="email">
        <button v-show="true">Register</button>
    </form>
    <div v-show="this.$store.state.faceLivenessReady"><FaceLiveness /></div>

</template>
<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
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
}

button:hover {
  background-color: grey;
}

</style>