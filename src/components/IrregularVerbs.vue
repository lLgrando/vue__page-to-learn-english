<script setup>
import { onMounted, ref } from 'vue';

const irregularVerbsList = [
    { verb: 'cut', simple: 'cut', perfect: 'cut' },
    { verb: 'beat', simple: 'beat', perfect: 'beaten' },
];

const index = ref('');
const verb = ref('');
const simple = ref('');
const perfect = ref('');
const algoA = ref('');
const algoB = ref('');

let positionChecked = [];
let verbCorrection = [];
let answer = [];

onMounted(() => {
    verbFromList();
})

function cleanArrays() {
    verbCorrection = [];
    answer = [];
}

function getListLength() {
    let listLength = irregularVerbsList.length;
    return listLength;
}

function sortNumber() {
    let maxNumber = getListLength();
    let number = Math.floor(Math.random() * maxNumber);
    if (maxNumber == positionChecked.length) 
        positionChecked = [];
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

function correct(verb, simple, perfect) {
    cleanArrays();
    let item = irregularVerbsList[index.value]; // {verb: 'beat', simple: 'beat', perfect: 'beaten'}
    verbCorrection.push(item);
    answer.push({verb, simple, perfect});

    item.simple === simple ? this.algoA = 'green' : this.algoA = 'red';
    item.perfect === perfect ? this.algoB = 'green' : this.algoB = 'red';

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
        <input type="button" @click="correct(verb, simple, perfect)" value="Check">
    </div>
    <div class="correct-answer" v-for="item in verbCorrection">
        <span>Answer:</span>
        <span type="text">{{ item.verb }}</span>
        <span type="text">{{ item.simple }}</span>
        <span type="text">{{ item.perfect }}</span>
    </div>
    <div class="client-answer" v-for="item in answer">
        <span>Your answer:</span>
        <span>{{ item.verb }}</span>
        <span v-if="item.simple != ''" :class="algoA">{{ item.simple }}</span>
        <span v-else> - </span>
        <span v-if="item.perfect != ''" :class="algoB">{{ item.perfect }}</span>
        <span v-else> - </span>
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
    color: rgb(110, 187, 110);
}

.red {
    color: red;
}

.correct-answer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(234, 234, 255);
}

.correct-answer span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 10px 15px;
    font-size: 20px;
}
.client-answer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(255, 231, 231);
}

.client-answer span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 10px 15px;
    font-size: 20px;
}

@media only screen and (max-width: 600px) {
    .input-user {
        flex-direction: column;
        align-items: center;
    }

    .input-user input {
        height: 40px;
        width: 260px;
        margin: 10px 15px;
    }

    .input-user input[type='button'] {
        height: 40px;
        width: 100px;
        padding: 0;
        border: 1px solid gray;
        border-radius: 20px;
        font-size: 16px;
    }

    .correct-answer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(234, 234, 255);
    }

    .correct-answer span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: 4px 15px;
        font-size: 18px;
    }
    .client-answer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 231, 231);
    }

    .client-answer span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: 4px 15px;
        font-size: 18px;
    }
}
</style>
