<script setup>

defineProps(['title']);

</script>

<template>

    <div class="flex justify-center w-full items-center bg-indigo-50 p-10 shadow-sm">
        <h4 class="text-3xl lg:text-5xl font-sans font-semibold">{{title}}</h4>
    </div>

</template>
