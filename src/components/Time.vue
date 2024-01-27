<script setup>
import { onMounted, ref, computed } from 'vue';
import timeList from '../../public/timesList';

let time_input = ref('');   // guarda o input do usuário
let time_in_use = ref([]);   // guarda qual obj. de time está sendo utilizado nesse momento
let times_record = ref([]);   // um array para guardar os obj. de times já utilizados, contendo a resposta do user junto

onMounted(() => {
    getItemFromTimeList();
})

let reverseArray = computed(() => {
    return times_record.value.slice().reverse();
})

function cleanArray(){
    if(times_record.length >= timeList.length){
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
    while(times_record.value.some(obj => obj.number == timeList[indexNumber].number)){
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
    <div class="h-full flex flex-column jusitify-center align-center">
        <div>
            <span class="text-2xl font-bold text-center">Could you tell me the time?</span>
        </div>
        <div class="bg-sky-50 w-80 p-4 m-8 border-slate-100 rounded">
            <div class="flex flex-row justify-center align-center text-6xl tracking-wider">
                <span>{{ time_in_use.number }}</span>
            </div>
        </div>
        <div class="w-80" @keyup.enter="correction">
            <input class="w-full border border-slate-200 p-4 text-center text-2xl rounded" type="text" name="time" v-model="time_input">
        </div>
        <div class="flex justify-center w-full" v-if="times_record.length">
            <table>
                <caption class="text-2xl p-1">Records</caption>
                <tr>
                    <th colspan="2"  class="border border-slate-200 p-1">Answer</th>
                    <th  class="border border-slate-200  p-1">Your Answer</th>
                </tr>
                <tr v-for="item in reverseArray">
                    <td  class="border border-slate-200 p-2 m-1"> {{ item.number }} </td>
                    <td  class="border border-slate-200 p-2 m-1"> {{ item.write }} </td>
                    <td  class="border border-slate-200 p-2 m-1"> {{ item.user_write }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
</style>