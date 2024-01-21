<script setup>
import { onMounted, ref, watch } from 'vue';
import numbersList from '../../public/numbersList';

const number = ref();
const numberWrited = ref('');
const selectedNumberIndex = ref();
const range_value = ref([0, (numbersList.length - 1)]);
let itemsCompleted = ref();

let numberUsed = [];

onMounted(() => {
    let getNumber = getSomeNumber();
    number.value = getNumber;
})

watch(number, () => {
    itemsCompleted = numberUsed.length;
});

watch(range_value, () => {
    setTimeout(() => {
        getSomeNumber();
    }, 1000)
})

function getSomeIndex() {
    let numberIndex = Math.floor(Math.random() * (range_value.value[1] - range_value.value[0] + 1)) + range_value.value[0];
    selectedNumberIndex.value = numberIndex;
    return numberIndex;
}

function checkIfnumberUsedIsFull() {
    let numberUsedLenght = numberUsed.length;
    numberUsedLenght == ((range_value.value[1] - range_value.value[0]) + 1) ? numberUsed = [] : null;
}

function checkIndexIsValid() {
    let numberIndex = getSomeIndex();
    checkIfnumberUsedIsFull();
    while (numberUsed.some(obj => obj.number == numberIndex)) {
        numberIndex = getSomeIndex();
    }
    return numberIndex;
}

function getSomeNumber() {
    checkIfnumberUsedIsFull()
    let getNumber = checkIndexIsValid();
    number.value = getNumber;
    return getNumber;
}

function setRecordArray(number, numberWrited, correct) {
    checkIfnumberUsedIsFull()
    let getNumber = number;
    let getNumberWrited = numberWrited;
    let newItem = {
        number: numbersList[getNumber].number,
        extenso_number: numbersList[getNumber].extenso_number,
        number_writed: getNumberWrited,
        corrected: correct
    }
    numberUsed.push(newItem);
}

function correction() {
    checkIfnumberUsedIsFull()
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
            <span>Select the numbers range:</span>
            <v-range-slider v-model="range_value" step="1" thumb-label="always" :min="0" :max="numbersList.length - 1"
                color="indigo-lighten-4" style="width: 300px; margin-top: 40px;"></v-range-slider>
            <span class="span_number">{{ number }}</span>
        </div>
        <div class="div_inputs" @keyup.enter="correction(numberWrited)">
            <input type="text" v-model="numberWrited" autofocus spellcheck="false">
            <input type="submit" hidden>
            <div>
                <span>{{ itemsCompleted }} / {{ range_value[1] - range_value[0] + 1 }}</span>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    font-size: 20px;
}

.div_number .span_number {
    font-size: 74px;
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

.numberWrited th,
.numberWrited td {
    border: 1px solid rgb(207, 207, 207);
    padding: 4px;
    min-width: 180px;
}
</style>