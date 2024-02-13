<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';
import Info from './global_component/Info.vue';

let alert = ref(true);

const sentences = [
    { id: 0, sentence_1: "He (work)", sentence_2: "at Burguer King.", answer: "worked", result: null },
    { id: 1, sentence_1: "Yesterday I (go)", sentence_2: "to the mall.", answer: "went", result: null },
    { id: 2, sentence_1: "We (watch)", sentence_2: "a movie last Sunday morning.", answer: "watched", result: null },
    { id: 3, sentence_1: "Last night I (play)", sentence_2: "my guitar loudly.", answer: "played", result: null },
    { id: 4, sentence_1: "You (be)", sentence_2: "tired.", answer: "played", result: null },
]

let userAnswer = ref([]);

function check(value, index) {
    value === userAnswer.value[index] ? sentences[index].result = true : sentences[index].result = false;
    userAnswer.value[index + 1] = '';
    focusNextInput(index);
}

function focusNextInput(index) {
    let getInput = String('input_' + (index + 1));
    document.getElementById(getInput).focus();
}

</script>

<template>
    <Title title="Past Tenses"></Title>
    <Info text="Fill the empty box with the verb in the past form. <br> 
                If ou have some doubt, click on the <strong>'?'</strong> sign in the left side of the answer to see the answer." />

    <div class="flex justify-center items-center px-2">
        <div class="flex flex-col">
            <ul v-for="item, index in sentences" :key="index" class="flex items-center px-20">
                <span class="bg-yellow-50 rounded m-4 p-1" :title="item.answer">
                    <img src="../../public/image/question.svg" alt="wrong answer" style="height: 16px;">
                    <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close">
                        <v-card class="pa-2">{{ item.answer }}</v-card>
                    </v-overlay> 
                </span>

                <li class="py-4 text-xl">
                    <span><strong>{{ item.id + 1 }}</strong></span>
                    <span> - </span>
                    {{ item.sentence_1 }}
                    <input :id="'input_' + item.id" type="text" v-model.trim="userAnswer[index]"
                        @change="check(item.answer, index)">
                    {{ item.sentence_2 }}
                </li>
                <span v-if="item.result === null"></span>
                <span v-else-if="item.result === true" class="mr-2"><img src="../../public/image/done.svg"
                        alt="right answer" class="bg-green-100 rounded"></span>
                <span v-else class="mr-2"><img src="../../public/image/wrong.svg" alt="wrong answer"
                        class="bg-red-100 rounded"></span>

            </ul>
        </div>
    </div>
</template>

<style>
input {
    border: 1px solid rgb(202, 202, 202);
    border-radius: 4px;
    width: 100px;
    padding-left: 4px;
}
</style>

