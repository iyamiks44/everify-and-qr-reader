<script>
export default {
    data() {
        return {
            name: ''
        }
    }
}
</script>
<template>
    <form>
        <input type="text" required placeholder="First Name">
        <input type="text" placeholder="Middle Name (optional)">
        <input type="text" required placeholder="Last Name">
        <input type="text" placeholder="Suffix (optional)">
        <input type="date">
        <input type="number" required placeholder="Mobile Number">
        <input type="email" required placeholder="Email Address">
        <button>Register</button>
    </form>

</template>
<style>


</style>