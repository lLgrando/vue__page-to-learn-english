<script setup>
import { onMounted, ref, computed } from 'vue';

const sentences = [
    {sentence: "I have a meeting _____ 9am", answer: "at"},
    {sentence: "Do you think we will go to Jupiter _____ the future?", answer: "in"},
]

let answers = ref([]);

function correct(index) {
    const userAnswer = answers.value[index];
    const correctAnswer = sentences[index].answer;
    if (userAnswer === correctAnswer) {
      console.log(`Resposta correta para a pergunta ${index + 1}`);
    } else {
      console.log(`Resposta incorreta para a pergunta ${index + 1}. Tente novamente.`);
    }
}

</script>

<template>

    <div>
        <ul v-for="(item, key) in sentences">
            <li>{{ item.sentence }} {{ key }}</li>
            <li><input type="text" v-model="answers[key]" @keyup.enter="correct(key)"></li>
        </ul>
    </div>

</template>

<style scoped>

div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    justify-content: space-around;
    padding: 40px;
}

div ul {
    border: 1px solid rgb(230, 230, 230);
}

div ul li {
    padding: 20px;
    min-width: 200px;
}

div ul li input {
    border: 1px solid gray;
    width: 100%;
}

</style>