<script setup>
import { ref } from 'vue';

const irregularVerbsList = [
    { verb: 'cut', simple: 'cut', perfect: 'cut' },
    { verb: 'beat', simple: 'beat', perfect: 'beaten' },
];

const index = ref('');
const verb = ref('');
const simple = ref('');
const perfect = ref('');

let positionChecked = [];
let verbCorrection = [];

function listLenght() {
    return irregularVerbsList.length;
}

function sortNumber() {
    let maxNumber = listLenght()
    let number = Math.floor(Math.random() * maxNumber);
    if (maxNumber == positionChecked.length) {
        positionChecked = [];
    }
    while (positionChecked.indexOf(number) != -1) {
        number = Math.floor(Math.random() * maxNumber);
    }
    positionChecked.push(number);
    return number;
}

function verbFromList() {
    let listIndex = sortNumber();
    let verbFromList = irregularVerbsList[listIndex];
    verb.value = verbFromList.verb;
    index.value = irregularVerbsList.indexOf(verbFromList);
    return verbFromList; // {verb: 'beat', simple: 'beat', perfect: 'beaten'}
}

verbFromList();

function correct(simple, perfect) {
    let item = irregularVerbsList[index.value]; // {verb: 'beat', simple: 'beat', perfect: 'beaten'}
    verbCorrection = [];
    verbCorrection.push(item);
    if(item.simple == simple && item.perfect == perfect) {
        console.log("Correto");
    } else {
        console.log("Incorreto");
    }
    verbFromList();
    this.simple = '';
    this.perfect = '';
}

</script>

<template>
    <div class="input-user">
        <input type="text" v-model="verb" readonly >
        <input type="text" v-model="simple">
        <input type="text" v-model="perfect">
        <input type="button" @click="correct(simple, perfect)">
    </div>
    <div class="input-user" v-for="item in verbCorrection">
        <input type="text" :value=item.verb>
        <input type="text" :value=item.simple>
        <input type="text" :value=item.perfect>
    </div>

</template>



<style scoped>
.input-user {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.input-user input {
    height: 50px;
    width: 300px;
    border: 1px solid gray;
    border-radius: 20px;
    margin: 40px 15px;
    padding-left: 10px;
    font-size: 20px;
}

.green {
    background-color: rgb(223, 255, 223);
}

.red {
    background-color: red;
}

@media only screen and (max-width: 600px) {
    .input-user {
        flex-direction: column;
        align-items: center;
    }

    .input-user input {
        margin: 10px 15px;
    }
}
</style>
