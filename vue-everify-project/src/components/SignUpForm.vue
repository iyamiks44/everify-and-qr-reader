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
        <input type="text" required placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="Middle Name (optional)" v-model="middleName">
        <input type="text" required placeholder="Last Name" v-model="lastName">
        <input type="text" placeholder="Suffix (optional)" v-model="suffix">
        <input type="date">
        <input type="number" required placeholder="Mobile Number" v-model="cellNo">
        <input type="email" required placeholder="Email Address" v-model="email">
        <button>Register</button>
    </form>

</template>
<style>


</style>