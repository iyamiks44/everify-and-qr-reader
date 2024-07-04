<template>
    <div class="outer">
        <div class="inner">
            <slot>
                Success!
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'SuccessPopup',
    data() {
    return {

    }
}
}




</script>

<style>
.outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.inner {
    background: #fff;
    padding: 20px
}
</style>