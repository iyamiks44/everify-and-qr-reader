<script>
export default {
    name: 'SignUpForm',
    props: {
        information: {
            type: String,
        }
    },
    data() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
            suffix: '',
            cellNo: '',
            email: '',
        }
    },
    created() {
    this.initializeData();
  },
  watch: {
    information: {
      handler: 'initializeData',
      immediate: true,
    },
  },
  methods: {
    initializeData() {
      try {
        const info = JSON.parse(this.information);
        this.firstName = info.firstName || '';
        this.middleName = info.middleName || '';
        this.lastName = info.lastName || '';
        this.suffix = info.suffix || '';
        this.cellNo = info.cellNo || '';
        this.email = info.email || '';
      } catch (error) {
        console.error('Invalid JSON string in information prop:', error);
      }
    },
  },
}
</script>
<template>
    <p>{{ information }}</p>
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