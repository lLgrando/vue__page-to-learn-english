<script setup>
import { watch } from 'vue';
import { onMounted, ref, computed } from 'vue';

const sentences = [
    {sentence: "I have a meeting _____ 9am.", answer: "at", isCorrect: ref(null) },
    {sentence: "Do you think we will go to Jupiter _____ the future?", answer: "in", isCorrect: ref(null) },
    {sentence: "Her birthday is _____ the 20th of November.", answer: "on", isCorrect: ref(null) },
    {sentence: "Where will you be _____ New Year's Day.", answer: "on", isCorrect: ref(null) },
    {sentence: "The shop closes _____ midnight.", answer: "at", isCorrect: ref(null) },
    {sentence: "There should be a lot of progress _____ the next century.", answer: "in", isCorrect: ref(null) },
    {sentence: "Do you work _____ Mondays?", answer: "on", isCorrect: ref(null) },
    {sentence: "Jane went home _____ lunchtime.", answer: "at", isCorrect: ref(null) },
    {sentence: "In England, it often snows ____ December.", answer: "in", isCorrect: ref(null) },
]

let answers = ref([]);


function correct(index) {
    const userAnswer = answers.value[index];
    const correctAnswer = sentences[index].answer;
    sentences[index].isCorrect.value = userAnswer === correctAnswer ? 'green' : 'red';
}


</script>

<template>

    <div>
        <h1>Complete with At, In or On</h1>
        <ul v-for="(item, key) in sentences" :key="key">
            <li :class="item.isCorrect.value"> {{ item.sentence }} </li>
            <table>
                <tr>
                    <th><label for="at">At</label></th>
                    <th><label for="in">In</label></th>
                    <th><label for="on">On</label></th>
                </tr>
                <tr>
                    <th><input type="radio" id="at" value="at" v-model="answers[key]" @change="correct(key)"></th>
                    <th><input type="radio" id="in" value="in" v-model="answers[key]" @change="correct(key)"></th>
                    <th><input type="radio" id="on" value="on" v-model="answers[key]" @change="correct(key)"></th>
                </tr>
            </table>
        </ul>
    </div>

</template>

<style scoped>

.green {
    color: rgb(17, 187, 17);
}

.red {
    color: red;
}

div {
    display: grid;
    grid-template-columns: 80%;
    justify-content: space-around;
    gap: 8px;
    padding: 40px;
}

div ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
}

div ul li {
    font-size: 20px;
    margin-left: 10px;
}

div ul table {
    margin: 0px 10px;
}

div ul table tr td, div ul table tr th {
    padding: 0px 6px;
}

input[type='radio'] {
    border: 0px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}


</style>