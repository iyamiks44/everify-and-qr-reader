<script>
import FaceLiveness from './FaceLiveness.vue';


export default {
  name: 'SignUpForm',
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
  methods: {
    fillIn() {
        console.log('working')
        console.log(this.$store.state.data)
        const obj = JSON.parse(this.$store.state.data)
        console.log(obj)
        this.firstName = obj.first_name
        this.middleName = obj.middle_name
        this.lastName = obj.last_name
        this.suffix = obj.suffix
        this.birthDate = obj.birth_date
        this.cellNo = obj.mobile_number
        this.email = obj.email
        this.faceLiveness = obj.faceLiveness
        // console.log(this.information)
        // const obj = JSON.parse(this.information);
        // this.firstName = obj.firstName

    }
  },
}
</script>
<template>
    <p>{{ information }}</p>
    <div><button @click="fillIn()">Fill In</button></div>
    <form>
        <div class="input">
          <input class="fName" type="text" required placeholder="First Name" v-model="firstName">
          <input class="mName" type="text" placeholder="Middle Name (optional)" v-model="middleName">
          <input class="lName" type="text" required placeholder="Last Name" v-model="lastName">
          <input class="suffix" type="text" placeholder="Suffix (optional)" v-model="suffix">
          <input class="birthday" type="date">
          <input class="mNumber" type="number" required placeholder="Mobile Number" v-model="cellNo">
          <input class="email" type="email" required placeholder="Email Address" v-model="email">
        </div>
        <button type="submit">Register</button>
    </form>

</template>
<style scoped>
form {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 2fr 2fr 2fr 2fr;
  grid-template-areas: 
    ". field field field .";

}

.input {
  grid-area: field;
}

input{
  padding: 7px;
  margin: 7px;
}

button {
  width: fit-content;
}

</style>