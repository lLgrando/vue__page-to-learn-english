<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let answer = ref([]);

function getWeekDayToday() {
    const date = new Date();
    let day = weekday[date.getDay()];
    return day;
}

function getWeekDayFromNumber(providedDay, index) {
    const date = new Date();
    let expectedDay = weekday[(date.getDay() + index + 7) % 7];
    
    if (providedDay === expectedDay) {
        console.log('Correct!' + " " + providedDay);
    } else {
        console.log('Incorrect!'  + " " + providedDay);
    }
}

</script>

<template>
    <Title title="What is the day?"></Title>

    <h1>{{ getWeekDayToday() }}</h1>


    <div class="w-full flex justify-center items-center">
        <span class="text-2xl">Whats weekday is today?</span>
        <input type="text" v-model="answer[0]" @keyup.enter="getWeekDayFromNumber(answer[0], 0)"
            class="border border-slate-300 rounded">
    </div>

    <div class="w-full flex justify-center items-center">
        <span class="text-2xl">Whats weekday was yesterday?</span>
        <input type="text" v-model="answer[1]" @keyup.enter="getWeekDayFromNumber(answer[1], -1)"
            class="border border-slate-300 rounded">
    </div>





</template>

<style>
</style>