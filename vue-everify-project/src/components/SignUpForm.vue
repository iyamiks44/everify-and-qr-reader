<script>
export default {
    data() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
            suffix: '',
            cellNo: '',
            email: '',
        }
    }
}
</script>
<template>
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