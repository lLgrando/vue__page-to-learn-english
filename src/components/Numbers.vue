<script setup>
import { onMounted, ref } from 'vue';

const numbersList = [
    {number: 0, extenso_number: "zero"},
    {number: 1, extenso_number: "one"},
    {number: 2, extenso_number: "two"},
    {number: 3, extenso_number: "three"},
    {number: 4, extenso_number: "four"},
    {number: 5, extenso_number: "five"},
]

const number = ref();
const numberWrited = ref('');
const selectedNumberIndex = ref();

let numberUsed = [];

onMounted(() => {
    let getNumber = getSomeNumber();
    number.value = getNumber;
})

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
    if(numberUsedLenght >= numbersListLength){
        numberUsed = [];
    }
}

function checkIndexIsValid() {
    checkIfnumberUsedIsFull();
    let numberIndex = getSomeIndex();
    while(numberUsed.indexOf(numberIndex) !== -1){
        numberIndex = getSomeIndex();
    }
    return numberIndex;
}

function getSomeNumber() {
    let getNumber = checkIndexIsValid();
    numberUsed.push(getNumber);
    number.value = getNumber;
    return getNumber;
}

function correction() {
    let getNumberExtenso = numbersList[selectedNumberIndex.value];
    if(getNumberExtenso.extenso_number == numberWrited.value) {
        console.log("correto");
    } else {
        console.log("errado")
    }
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
            <input type="text" v-model="numberWrited" autofocus placeholder="Write the number and press enter!">
            <input type="submit" hidden>
            <span>For example: one hundred seventy two...</span>
        </div>
    </div>
</template>

<style scoped>

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
}

.div_inputs input[type='text']::placeholder {
    font-size: 20px;
}

.div_inputs span {
    margin: 26px 0px;
    color: gray;
    font-size: 16px;
}


</style>