<script setup>
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
    <div>
        <button 
        class="fixed rounded-full bg-indigo-200 hover:bg-indigo-300 opacity-80 p-3 m-1 bottom-0 right-0 z-50"
        @click = "toTop()">
        <img src="../../../public/image/toTopArrow.svg" alt="To top arrow" style="color: red;">
        </button>
    </div>
</template>
