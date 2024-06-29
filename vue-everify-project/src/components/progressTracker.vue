<template>
    <div class="flex-container">
        <img src="../assets/gg_check-o.png">
        <span> Step 1</span>
        <img src="../assets/gg_check-o.png">
        <span> Step 2</span>
        <img src="../assets/gg_check-o.png">
        <span> Step 3</span>
    </div>
    

</template>

<script>

export default {
    name: 'ProgressTracker',


}
</script>

<style scoped>
img {
    max-width: 20px;
}
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.flex-container img,
.flex-container span {
    margin: 0;
}
</style>