<script setup>
import { onMounted, ref, watch } from 'vue';
import numbersList from '../../public/numbersList';

const number = ref();
const numberWrited = ref('');
const selectedNumberIndex = ref();
let itemsCompleted = ref();

let numberUsed = [];

onMounted(() => {
    let getNumber = getSomeNumber();
    number.value = getNumber;
})

watch(number, () => {
    itemsCompleted = numberUsed.length;
});

function numbersLength() {
    let arrayLenght = numbersList.length;
    return arrayLenght;
}

function getSomeIndex() {
    let arrayLength = numbersLength();
    let numberIndex = Math.floor(Math.random() * arrayLength);
    selectedNumberIndex.value = numberIndex;
    return numberIndex;
}

function checkIfnumberUsedIsFull() {
    let numberUsedLenght = numberUsed.length;
    let numbersListLength = numbersLength();
    numberUsedLenght >= numbersListLength ? numberUsed = [] : null;
}

function checkIndexIsValid() {
    checkIfnumberUsedIsFull();
    let numberIndex = getSomeIndex();
    while (numberUsed.some(obj => obj.number === numberIndex)) {
        numberIndex = getSomeIndex();
    }
    return numberIndex;
}

function getSomeNumber() {
    let getNumber = checkIndexIsValid();
    number.value = getNumber;
    return getNumber;
}

function setRecordArray(number, numberWrited, correct) {
    let getNumber = number;
    let getNumberWrited = numberWrited;
    numberUsed.push({
        number: numbersList[getNumber].number, 
        extenso_number: numbersList[getNumber].extenso_number, 
        number_writed: getNumberWrited,
        corrected: correct
    });
}

function correction() {
    let getNumberExtenso = numbersList[selectedNumberIndex.value];
    let correct = getNumberExtenso.extenso_number == numberWrited.value;
    setRecordArray(selectedNumberIndex.value, numberWrited.value, correct);
    getSomeNumber();
    numberWrited.value = '';
}
</script>

<template>
    <div class="main_div">
        <div class="div_number">
            <span class="span_number">{{ number }}</span>
        </div>
        <div class="div_inputs" @keyup.enter="correction(numberWrited)">
            <input type="text" v-model="numberWrited" autofocus>
            <input type="submit" hidden>
            <div>
                <span>{{ itemsCompleted }} / {{ numbersList.length }}</span>
            </div>
            <v-progress-linear v-model="itemsCompleted" :max="numbersList.length"></v-progress-linear>
            <div v-if="numberUsed.length == 0">
                <span>Write the number and press enter!</span>
                <span>For example: one hundred seventy two...</span>
            </div>
        </div>
        <div>
            <table class="numberWrited" v-if="numberUsed.length">
                <caption>Record</caption>
                <tr>
                    <th>Number</th>
                    <th>Number Writed</th>
                    <th>Answer</th>
                </tr>
                <tr v-for="item in numberUsed">
                    <td>{{ item.number }}</td>
                    <td>{{ item.extenso_number }}</td>
                    <td :class="[item.corrected ? 'green' : 'red']">{{ item.number_writed }} </td>
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

.main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.div_number {
    padding: 40px;
    font-size: 54px;
}

.div_inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.div_inputs input[type='text'] {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 50px;
    width: 500px;
    font-size: 28px;
    border: 2px solid gray;
    border-radius: 18px;
}

.div_inputs input[type='text']::placeholder {
    font-size: 20px;
}

.div_inputs div span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 26px;
    color: gray;
    font-size: 16px;
}

.numberWrited {
    text-align: center;
    margin-top: 40px;
    padding: 40px;
    min-width: 300px;
    font-size: 22px;
    border: 1px solid gray;
    border-collapse: collapse;
}

.numberWrited th, .numberWrited td {
    border: 1px solid rgb(207, 207, 207);
    padding: 4px;
    min-width: 180px;
}


</style>