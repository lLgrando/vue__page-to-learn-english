<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';

const sentences = [
    { sentence: "I have a meeting _____ 9am.", answer: "at", isCorrect: ref(null) },
    { sentence: "Do you think we will go to Jupiter _____ the future?", answer: "in", isCorrect: ref(null) },
    { sentence: "Her birthday is _____ the 20th of November.", answer: "on", isCorrect: ref(null) },
    { sentence: "Where will you be _____ New Year's Day.", answer: "on", isCorrect: ref(null) },
    { sentence: "The shop closes _____ midnight.", answer: "at", isCorrect: ref(null) },
    { sentence: "There should be a lot of progress _____ the next century.", answer: "in", isCorrect: ref(null) },
    { sentence: "Do you work _____ Mondays?", answer: "on", isCorrect: ref(null) },
    { sentence: "Jane went home _____ lunchtime.", answer: "at", isCorrect: ref(null) },
    { sentence: "In England, it often snows ____ December.", answer: "in", isCorrect: ref(null) },
]

let answers = ref([]);

function correct(index) {
    const userAnswer = answers.value[index];
    const correctAnswer = sentences[index].answer;
    sentences[index].isCorrect.value = userAnswer === correctAnswer ? 'green' : 'red';
}

function clear() {
    sentences.forEach(element => {
        element.isCorrect.value = null;
    });
}

</script>

<template>
    <div>
        <Title title="Complete with AT, IN or ON" />

        <div>
            <ul v-for="(item, key) in sentences" :key="key">
                <div>
                    <li>{{ item.sentence }}</li>
                </div>
                <div>
                    <div>
                        <label :for="'at_' + key">At</label>
                        <input type="radio" :id="'at_' + key" :name="'preposition_' + key" value="at" v-model="answers[key]"
                            @change="correct(key)">
                    </div>
                    <div>
                        <label :for="'in_' + key">In</label>
                        <input type="radio" :id="'in_' + key" :name="'preposition_' + key" value="in" v-model="answers[key]"
                            @change="correct(key)">
                    </div>
                    <div>
                        <label :for="'on_' + key">On</label>
                        <input type="radio" :id="'on_' + key" :name="'preposition_' + key" value="on" v-model="answers[key]"
                            @change="correct(key)">
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<style>
.green {
    color: green;
}

.red {
    color: red;
}
</style>