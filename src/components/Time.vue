<script setup>
import { onMounted, ref, watch } from 'vue';




</script>

<template>
    <div class="div_central">
        <div>
            <span>Could you tell me the time?</span>
        </div>
        <div class="relogio">
            <div class="horario">
                <span class="hora">12:30</span>
            </div>
        </div>
        <input type="text" name="time">
    </div>
</template>

<style scoped>

.div_central {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.relogio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    background-image: linear-gradient(180deg, #dadada, rgb(173, 173, 173));
    border: none;
    border-radius: 50px;
}

.horario {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 100px;
    background-color: rgb(235, 235, 235);
    border: none;
    border-radius: 10px;
}

.hora {
    font-family: 'Digital-7 Mono', monospace;
    font-size: 60px;
    color: black;
}
input {
    display: flex;
    text-align: center;
    font-size: 28px;
    height: 40px;
    width: 400px;
    padding: 30px;
    margin: 30px 0px;
    border: 1px solid gray;
}
</style>