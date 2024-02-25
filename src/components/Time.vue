<script setup>
import { onMounted, ref, computed } from 'vue';
import timeList from '../../public/timesList';
import Title from './global_component/Title.vue'
import Info from './global_component/Info.vue'

document.title = 'Repeat English - Time';

let time_input = ref('');   // guarda o input do usuário
let time_in_use = ref([]);   // guarda qual obj. de time está sendo utilizado nesse momento
let times_record = ref([]);   // um array para guardar os obj. de times já utilizados, contendo a resposta do user junto

onMounted(() => {
    getItemFromTimeList();
})

let reverseArray = computed(() => {
    return times_record.value.slice().reverse();
})

function cleanArray() {
    if (times_record.length >= timeList.length) {
        times_record.value = [];
    }
}

function sortNumber() {
    let maxNumber = timeList.length;
    return Math.floor(Math.random() * (maxNumber - 0) + 0); // algum número de 0 a array.length
}

function checkNumber() {
    cleanArray();
    let indexNumber = sortNumber();
    while (times_record.value.some(obj => obj.number == timeList[indexNumber].number)) {
        indexNumber = sortNumber();
    }
    return indexNumber;
}

function getItemFromTimeList() {
    let index = checkNumber();   // 2
    let getItemInList = timeList[index];   // {number: '1:30', write: 'a half to two'}
    time_in_use.value = getItemInList;
    return getItemInList;
}

function correction() {
    let userInput = time_input.value;   // pega um input do usuário
    times_record.value.push({
        number: time_in_use.value.number,
        write: time_in_use.value.write,
        user_write: userInput,
        answer: time_in_use.value.write === userInput ? true : false
    });
    time_input.value = '';
    getItemFromTimeList();
}

</script>

<template>
    <Title title="Could you tell me the time?"></Title>
    <Info info="
        <ul>
            <li>• Write what time appears on the screen and press enter. For example, twenty past two (2:20);</li>
            <li>• Use: number past to ... | a quarter to ... | a half to ... | a quarter past ... | number to ...</li>
        </ul>
    "/>

    <div class="min-h-screen flex flex-column jusitify-center align-center pb-40">
    <div class="p-4 m-8 lg:p-7 w-96">
        <div class="flex flex-row justify-center align-center text-6xl tracking-wider lg:text-7xl">
            <span>{{ time_in_use.number }}</span>
        </div>
    </div>
    <div class="w-96 lg:w-96" @keyup.enter="correction">
        <input class="w-full border border-slate-200 p-4 text-center text-2xl rounded" type="text" name="time"
            v-model="time_input">
    </div>
    <div class="max-w-full pt-10" v-if="times_record.length">
        <table class="justify-center items-center border-collapse text-center">
            <caption class="text-2xl p-2">Records</caption>
            <tr>
                <th class="p-2 border border-slate-200" colspan="2">Answer</th>
                <th class="p-2 border border-slate-200">Your Answer</th>
            </tr>
            <tr v-for="item in reverseArray">
                <td class="min-w-20 lg:min-w-20 border border-slate-200 p-2"> {{ item.number }} </td>
                <td class="min-w-36 lg:min-w-64 border border-slate-200 p-2"> {{ item.write }} </td>
                <td class="min-w-36 lg:min-w-64 border max-w-20 border-slate-200 p-2"> {{ item.user_write }}</td>
            </tr>
        </table>
    </div>
</div></template>
