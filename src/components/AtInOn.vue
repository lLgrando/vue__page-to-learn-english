<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';
import Info from './global_component/Info.vue';

const sentences = [
    { sentence_1: "I have a meeting", sentence_2: "9am.", answer: "at", isCorrect: null },
    { sentence_1: "Do you think we will go to Jupiter", sentence_2: "the future?", answer: "in", isCorrect: null },
    { sentence_1: "Her birthday is", sentence_2: "the 20th of November.", answer: "on", isCorrect: null },
    { sentence_1: "Where will you be", sentence_2: "New Year's Day.", answer: "on", isCorrect: null },
    { sentence_1: "The shop closes", sentence_2: "midnight.", answer: "at", isCorrect: null },
    { sentence_1: "There should be a lot of progress", sentence_2: "the next century.", answer: "in", isCorrect: null },
    { sentence_1: "Do you work", sentence_2: "Mondays?", answer: "on", isCorrect: null },
    { sentence_1: "Jane went home", sentence_2: "lunchtime.", answer: "at", isCorrect: null },
]

let selected = ref([]);

function check(index) {
    const userAnswer = selected.value[index];
    const correctAnswer = sentences[index].answer;
    userAnswer === correctAnswer ? sentences[index].isCorrect = true : sentences[index].isCorrect = false;
    selected.value[index + 1] = '';
    selected.value.pop();
}

function clear() {
    sentences.forEach(element => {
        element.isCorrect = null;
    });
    selected.value = '';
}

</script>

<template>
    <div>
        <Title title="Complete with AT, IN or ON" />
        <Info info="You need to choose one of the three options in each sentence. Read the sentence and try to answer.">
        </Info>

        <div class="flex flex-col justify-center items-center">
            <div class="mx-4">
                <div class="flex justify-center items-center py-6">
                    <button @click="clear()"
                        class="px-4 py-1 border border-slate-100 rounded bg-indigo-100 hover:bg-indigo-200">Clear</button>
                </div>

                <ul v-for="item, index in sentences" class="flex py-5 text-lg">
                    <li class="text-justify">
                        <span> <strong>{{ index + 1 }}</strong> - {{ item.sentence_1 }}</span>
                        <select class="mx-3 w-16 border text-center border-slate-100 rounded" v-model="selected[index]"
                            @change="check(index)" :id="item.isCorrect">
                            <option>at</option>
                            <option>in</option>
                            <option>on</option>
                        </select>
                        <span>{{ item.sentence_2 }}</span>
                    </li>


                    <div class="flex justify-center items-center mx-2 min-w-7">
                        <span v-if="item.isCorrect === null"></span>
                        <span v-else-if="item.isCorrect === true" class="mr-2"><img src="../../public/image/done.svg"
                                alt="right answer" class="bg-green-100 rounded"></span>
                        <span v-else class="mr-2"><img src="../../public/image/wrong.svg" alt="wrong answer"
                                class="bg-red-100 rounded"></span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>