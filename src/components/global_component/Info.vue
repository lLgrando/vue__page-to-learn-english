<script setup>
defineProps(['text']);

function hiddenInfo() {
    let msg = document.getElementById('info_message');
    msg.style.display = "none";
}
</script>

<template>
    <div id="info_message" class="bg-indigo-100 flex justify-between h-content p-4 m-4 text-blue border-2 border-indigo-500 rounded">
        <div class="flex flex-col">
            <span v-html="text"></span>
        </div>
        <button class="flex justify-center items-center px-2 rounded" @click="hiddenInfo()">
            <img src="../../../public/image/wrong.svg" alt="close the info message." class="bg-indigo-200 p-2 rounded-xl hover:bg-indigo-300">
        </button>
    </div>
</template>

