<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';

const sentences = [
    { sentence_1: "Meu nome", sentence_2: "Leonardo", answer: "é", result: null },
    { sentence_1: "Gostaria de saber", sentence_2: "você sabe meu nome?", answer: "sabe", result: null },
]

let userAnswer = ref([]);

function check(value, index) {
    console.log(value + ' ' + index);
    value === userAnswer.value[index] ? sentences[index].result = true : sentences[index].result = false;
    //userAnswer.value[index + 1] =  '';
    focusNextInput(index);
}

function focusNextInput(index) {
    let nextIndex  = index + 1;
    console.log(nextIndex);
    document.getElementById(nextIndex).focus();  
}

</script>

<template>
    <Title title="Past Tenses"></Title>

    <div class="flex justify-center items-center">
        <div class="flex flex-col">

            <span>{{ userAnswer }}</span>

            <ul v-for="item, index in sentences" :key="index" class="flex items-center">
                <span v-if="item.result === null"></span>
                <span v-else-if="item.result === true">V</span>
                <span v-else>X</span>

                <li :key="index" class="py-4">
                    {{ item.sentence_1 }} 
                    <input :key="index" type="text" v-model.trim="userAnswer[index]" @keyup.enter="check(item.answer, index)" trim> 
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

