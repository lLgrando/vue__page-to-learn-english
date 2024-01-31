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

        <div class="flex flex-col w-full justify-center items-center py-6 px-4">

            <div>
                <button @click="clear"
                class="bg-indigo-100 py-2 px-6 text-2xl border rounded-lg hover:bg-indigo-200">Clear</button>
            </div>
        
            <ul v-for="(item, key) in sentences" :key="key"
                class="w-full columns-2 flex justify-center items-center lg:px-28">

                <div class="w-full py-4 lg:text-xl">
                    <li :class="item.isCorrect.value">{{ item.sentence }}</li>
                </div>

                <div class="flex pl-2 py-4">
                    <div class="flex flex-col px-2 lg:text-xl">
                        <label for="at">At</label>
                        <input type="radio" id="at" name="preposition" value="at" v-model="answers[key]"
                            @change="correct(key)">
                    </div>
                    <div class="flex flex-col px-2 lg:text-xl">
                        <label for="in">In</label>
                        <input type="radio" id="in" name="preposition" value="in" v-model="answers[key]"
                            @change="correct(key)">
                    </div>
                    <div class="flex flex-col px-2 lg:text-xl">
                        <label for="on">On</label>
                        <input type="radio" id="on" name="preposition" value="on" v-model="answers[key]"
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