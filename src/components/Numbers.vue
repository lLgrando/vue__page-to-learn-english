<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import numbersList from '../../public/numbersList';
import Title from '../components/global_component/Title.vue'
import Info from '../components/global_component/Info.vue'

document.title = 'Repeat English - Numbers';

const number = ref();
const numberWrited = ref('');
const selectedNumberIndex = ref();
const range_value = ref([0, (numbersList.length - 1)]);
let itemsCompleted = ref();
let numberUsed = ref([]);

onMounted(() => {
    let getNumber = getSomeNumber();
    number.value = getNumber;
})

watch(number, () => {
    itemsCompleted = numberUsed.value.length;
});

watch(range_value, () => {
    setTimeout(() => {
        getSomeNumber();
        numberUsed.value = [];
    }, 1000)
})

const reverseArrayNumberUsed = computed(() => {
    return numberUsed.value.slice().reverse();
})

function getSomeIndex() {
    let numberIndex = Math.floor(Math.random() * (range_value.value[1] - range_value.value[0] + 1)) + range_value.value[0];
    selectedNumberIndex.value = numberIndex;
    return numberIndex;
}

function checkIfnumberUsedIsFull() {
    let numberUsedLenght = numberUsed.value.length;
    numberUsedLenght == ((range_value.value[1] - range_value.value[0]) + 1) ? numberUsed.value = [] : null;
}

function checkIndexIsValid() {
    let numberIndex = getSomeIndex();
    checkIfnumberUsedIsFull();
    while (numberUsed.value.some(obj => obj.number == numberIndex)) {
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
    numberUsed.value.push(newItem);
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
    <Title title="Write the numbers"></Title>
    <Info info="
    <ul>
        <li>• Some number will be drawn and you need to write the name of that number. For example: twenty-four;</li>
        <li>• You can choose a range of numbers to train. For example, numbers between 100 until to 300.</li>
    </ul>
    "/>

    <div class="main_div">
        <div class="div_number">
            <span>Select the numbers range:</span>
            <v-range-slider v-model="range_value" step="1" thumb-label="always" :min="0" :max="numbersList.length - 1"
                color="indigo-lighten-4" style="width: 300px; margin-top: 40px;"></v-range-slider>
            <span class="span_number">{{ number }}</span>
        </div>

        <div class="w-96 lg:w-96" @keyup.enter="correction">
            <input class="w-full border border-slate-200 p-4 text-center text-2xl rounded" type="text" name="time" v-model="numberWrited" autofocus spellcheck="false">
            <input type="submit" hidden>
        </div>

        <div class="div_inputs">
            <div>
                <span>{{ itemsCompleted }} / {{ range_value[1] - range_value[0] + 1 }}</span>
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
                <tr v-for="item in reverseArrayNumberUsed">
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