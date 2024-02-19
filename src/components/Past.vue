<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';
import Info from './global_component/Info.vue';

const sentences = [
    { sentence_1: "He (work)", sentence_2: "at Burguer King.", answer: "worked", result: null },
    { sentence_1: "Yesterday I (go)", sentence_2: "to the mall.", answer: "went", result: null },
    { sentence_1: "We (watch)", sentence_2: "a movie last Sunday morning.", answer: "watched", result: null },
    { sentence_1: "Last night I (play)", sentence_2: "my guitar loudly.", answer: "played", result: null },
    { sentence_1: "You (be)", sentence_2: "tired.", answer: "played", result: null },
    { sentence_1: "I (swim)", sentence_2: "in the lake when I saw a turtle.", answer: "was swimming", result: null },
    { sentence_1: "Jhon (sit)", sentence_2: "at home when the phone rang.", answer: "was sitting", result: null },
    { sentence_1: "She (play)", sentence_2: "soccer when it began to rain.", answer: "was playing ", result: null },
    { sentence_1: "I (talk)", sentence_2: "to Gabi while she was cooking.", answer: "was talking", result: null },
    { sentence_1: "At 6 o’clock I (eat)", sentence_2: "dinner.", answer: "was eating", result: null },
    { sentence_1: "The film (start)", sentence_2: "when we arrived.", answer: "had started", result: null },
    { sentence_1: "She (live)", sentence_2: "in Germany for two years when she lost her job.", answer: "had been living", result: null },
    { sentence_1: "I (wait)", sentence_2: "for twenty minutes before the train came.", answer: "had been waiting", result: null },
    { sentence_1: "My father (die)", sentence_2: "last year.", answer: "died", result: null },
    { sentence_1: "I (climb)", sentence_2: "up the huge mountain.", answer: "climbed", result: null },
]

let userAnswer = ref([]);

function check(value, index) {
    let valueToLowerCase = userAnswer.value[index].toLowerCase()
    value === valueToLowerCase ? sentences[index].result = true : sentences[index].result = false;
    userAnswer.value[index + 1] = '';
    userAnswer.value.pop();
    if (value === valueToLowerCase || valueToLowerCase === sentences[index].answer) {
        focusNextInput(index);
    }
}

function focusNextInput(index) {
    let getInput = String('input_' + (index + 1));
    document.getElementById(getInput).focus();
}

</script>

<template>
    <Title title="Past Tenses"></Title>
    <Info
        info="Fill the empty box with the verb in the past form. IT can be past simple, past continuous, past perfect and past perfect continuous.
                <br> For example: Leo <strong>was playing</strong> the guitar when his mother called him.
                <br> If ou have some doubt, click on the <strong>'?'</strong> sign in the left side of the answer to see the answer.
                " />

    <div class="flex justify-center items-center px-2 text-justify mx-1 pb-40">
        <div class="flex flex-col">
            <ul v-for="item, index in sentences" class="flex items-center lg:px-20">
                <span class="bg-yellow-50 rounded m-4 p-1 min-w-7" :title="item.answer">
                    <img src="../../public/image/question.svg" alt="wrong answer" style="height: 16px;">
                    <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close">
                        <v-card class="pa-2">{{ item.answer }}</v-card>
                    </v-overlay>
                </span>

                <li class="py-4 text-xl">
                    <span><strong>{{ index + 1 }}</strong></span>
                    <span> - </span>
                    {{ item.sentence_1 }}
                    <input :id="'input_' + index" type="text" v-model.trim="userAnswer[index]"
                        @keyup.enter="check(item.answer, index)" class="w-44 text-center text-gray-600">
                    {{ item.sentence_2 }}
                </li>
                <div class="flex justify-center items-center mx-2 min-w-7">
                    <span v-if="item.result === null"></span>
                    <span v-else-if="item.result === true" class="mr-2"><img src="../../public/image/done.svg"
                            alt="right answer" class="bg-green-100 rounded"></span>
                    <span v-else class="mr-2"><img src="../../public/image/wrong.svg" alt="wrong answer"
                            class="bg-red-100 rounded"></span>
                </div>
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

