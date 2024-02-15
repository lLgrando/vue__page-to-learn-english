<script setup>
defineProps(['info']);

function hiddenInfo() {
    let msg = document.getElementById('info_message');
    msg.style.display = "none";
}
</script>

<template>
    <div id="info_message"
        class="bg-indigo-100 flex justify-between items-center h-content p-4 m-4 text-blue border-2 border-indigo-500 rounded">
        <div class="flex flex-col">
            <span v-html="info"></span>
        </div>
        <button @click="hiddenInfo()" class="flex justify-center items-center p-1">
            X
        </button>
    </div>
</template>

