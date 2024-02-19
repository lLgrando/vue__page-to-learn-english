<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';
import Info from './global_component/Info.vue';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const questions = [
    { question: "What day of week is today?", numberTime: 0, userAnswer: null },
    { question: "What day of week will it be tomorrow?", numberTime: 1, userAnswer: null },
    { question: "What day of the week will it be in two days?", numberTime: 2, userAnswer: null },
    { question: "What day of the week will it be in three days?", numberTime: 3, userAnswer: null },
    { question: "What day of the week will it be in four days?", numberTime: 4, userAnswer: null },
    { question: "What day of the week will it be in five days?", numberTime: 5, userAnswer: null },
    { question: "What weekday was yesterday?", numberTime: -1, userAnswer: null },
]

let answer = ref([]);

function getWeekDayFromNumber(userAnswer, itemNumber) {
    const date = new Date();
    let expectedDay = weekday[(date.getDay() + questions[itemNumber].numberTime + 7) % 7];
    userAnswer === expectedDay ? questions[itemNumber].userAnswer = true : questions[itemNumber].userAnswer = false;
    answer.value = [];
}
</script>

<template>
    <Title title="What is the day?"></Title>
    <Info info="Complete the empty box with the day of the week. For example: monday"></Info>

    <div class="w-full flex flex-col justify-center items-center pb-40">
        <ul v-for="item, index in questions"
            class="flex flex-col justify-center items-center border-b border-slate-500 w-full p-6">
            <li class="sm:text-2xl text-xl w-46">{{ item.question }}</li>

            <li v-if="item.userAnswer === null"></li>
            <li v-else-if="item.userAnswer === true">
                <span class="material-symbols-outlined" style="color: green; font-size:38px;">check</span>
            </li>
            <li v-else="item.userAnswer === false">
                <span class="material-symbols-outlined" style="color: red; font-size:38px;">close</span>
            </li>


            <input type="text" v-model="answer[index]" :name="index"
                @keyup.enter="getWeekDayFromNumber(answer[index], index)"
                class="border border-slate-300 rounded mt-2 w-56 p-2 text-center text-xl">
        </ul>
    </div>
</template>

