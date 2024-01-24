<script setup>
import { watch } from 'vue';
import { onMounted, ref, computed } from 'vue';

const sentences = [
    {sentence: "I have a meeting _____ 9am.", answer: "at", isCorrect: ref(null) },
    {sentence: "Do you think we will go to Jupiter _____ the future?", answer: "in", isCorrect: ref(null) },
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
        <ul v-for="(item, key) in sentences" :key="key">
            <li :class="item.isCorrect.value">{{ item.sentence }} </li>
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
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    justify-content: space-around;
    padding: 40px;
}

div ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(230, 230, 230);
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