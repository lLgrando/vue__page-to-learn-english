<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';
import Info from './global_component/Info.vue';

document.title = 'Repeat English - Weekday';

const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let questions = ref([
    { question: "What day of week is today?", numberTime: 0, userAnswer: null },
    { question: "What day of week will it be tomorrow?", numberTime: 1, userAnswer: null },
    { question: "What day of the week will it be in two days?", numberTime: 2, userAnswer: null },
    { question: "What day of the week will it be in three days?", numberTime: 3, userAnswer: null },
    { question: "What day of the week will it be in four days?", numberTime: 4, userAnswer: null },
    { question: "What day of the week will it be in five days?", numberTime: 5, userAnswer: null },
    { question: "What weekday was yesterday?", numberTime: -1, userAnswer: null },
])

let answer = ref([]);

function getWeekDayFromNumber(userAnswer, itemNumber) {
    const date = new Date();
    let answerToLower = userAnswer.toLowerCase();
    let expectedDay = weekday[(date.getDay() + questions.value[itemNumber].numberTime + 7) % 7];
    answerToLower === expectedDay ? questions.value[itemNumber].userAnswer = true : questions.value[itemNumber].userAnswer = false;

}

function clear() {
    questions.value.forEach(element => {
        element.userAnswer = null;
    });
    selected.value = [];
}

function focusNextInput(index) {
    let getInput = String('input_' + (index + 1));
    document.getElementById(getInput).focus();
}

</script>

<template>
    <Title title="What is the day?"></Title>
    <Info info="
        <ul>
            <li>• Complete the empty box with the day of the week. For example: monday.</li>
        </ul>
    " />

    <div class="w-full flex flex-col justify-center items-center pb-40">
        <div class="flex justify-center items-center py-6">
            <button @click="clear()"
                class="px-4 py-1 border border-slate-100 rounded bg-indigo-100 hover:bg-indigo-200">Clear</button>
        </div>

        <ul v-for="item, index in questions"
            class="flex flex-col justify-center items-center border-b border-slate-500 w-full p-6">
            <li class="sm:text-2xl text-xl w-46">{{ item.question }}</li>

            <li v-if="item.userAnswer === null"></li>
            <li v-else-if="item.userAnswer === true">
                <span>
                    <img src="../../public/image/done.svg" alt="correct answer" class="bg-green-100 rounded">
                </span>
            </li>
            <li v-else="item.userAnswer === false">
                <span>
                    <img src="../../public/image/wrong.svg" alt="wrong answer" class="bg-red-100 rounded">
                </span>
            </li>

            <input type="text" v-model="answer[index]" :name="index" autocomplete="off" spellcheck="false"
                @keyup.enter="getWeekDayFromNumber(answer[index], index)"
                class="border border-slate-300 rounded mt-2 w-56 p-2 text-center text-xl">
        </ul>
    </div>
</template>

