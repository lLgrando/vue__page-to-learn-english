<script setup>
import { onMounted, ref } from 'vue';
import timeList from '../../public/timesList';


let time_input = ref(''); // guarda o input do usuário
let time_in_use = ref([]); // guarda qual obj. de time está sendo utilizado nesse momento

let times_record = []; // um array para guardar os obj. de times já utilizados, contendo a resposta do user junto


onMounted(() => {
    getItemFromTimeList();
})

function cleanArray(){
    if(times_record.length >= timeList.length){
        times_record = [];
    }
}

function sortNumber() {
    let maxNumber = timeList.length;
    return Math.floor(Math.random() * (maxNumber - 0) + 0); // algum número de 0 a array.length
}

function checkNumber() {
    cleanArray();
    let indexNumber = sortNumber();
    while(times_record.some(obj => obj.number == timeList[indexNumber].number)){
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
    times_record.push({
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
    <div class="div_central">
        <div>
            <span>Could you tell me the time?</span>
        </div>
        <div class="relogio">
            <div class="horario">
                <span class="hora">{{ time_in_use.number }}</span>
            </div>
        </div>
        <div @keyup.enter="correction">
            <input type="text" name="time" v-model="time_input">
        </div>
        <div>
            
            <table>
                <caption>Record</caption>
                <tr>
                    <th colspan="2">Answer</th>
                    <th>Your Answer</th>
                </tr>
                <tr v-for="item in times_record">
                    <td>{{ item.number }} </td>
                    <td>{{ item.write }} </td>
                    <td :class="[item.answer ? 'green' : 'red']">{{ item.user_write }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>

.green {
    color: green;
}

.red {
    color: red;
}
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

table {
    border-collapse: collapse;
}

table tr td {
    min-width: 400px;
    padding: 10px 20px 10px 20px;
    border: 1px solid rgb(204, 204, 204);
}

table tr td:first-child {
    min-width: 100px;
}


</style>