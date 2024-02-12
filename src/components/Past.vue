<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';

const sentences = [
    { id: 0, sentence_1: "Meu nome", sentence_2: "Leonardo.", answer: "é", result: null },
    { id: 1, sentence_1: "Gostaria de saber", sentence_2: "você sabe meu nome?", answer: "sabe", result: null },
]

let userAnswer = ref([]);

function check(value, index) {
    value === userAnswer.value[index] ? sentences[index].result = true : sentences[index].result = false;
    userAnswer.value[index + 1] =  '';
    focusNextInput(index);
}

function focusNextInput(index) {
    let getInput = String('input_' + (index + 1));
    document.getElementById(getInput).focus();
}

</script>

<template>
    <Title title="Past Tenses"></Title>

    <div class="flex justify-center items-center px-2">
        <div class="flex flex-col">

            <span>{{ userAnswer }}</span>

            <ul v-for="item, index in sentences" :key="index" class="flex items-center">
                <span v-if="item.result === null"></span>
                <span v-else-if="item.result === true" class="mr-2"><img src="../../public/image/done.svg" alt="" class="bg-green-100 rounded"></span>
                <span v-else>X</span>

                <li class="py-4">
                    <span><strong>{{ item.id + 1 }}</strong></span>
                    <span> - </span>
                    {{ item.sentence_1 }} 
                    <input :id="'input_' + item.id" type="text" v-model.trim="userAnswer[index]" @keyup.enter="check(item.answer, index)"> 
                    {{ item.sentence_2 }}
                </li>
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

