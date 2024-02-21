<script setup>
import { ref } from 'vue';
import Title from './global_component/Title.vue';
import Info from './global_component/Info.vue';

let alphabet = [
    { capitalLetter: 'a', smallLetter: 'A', name: 'ay', correction: null },
    { capitalLetter: 'b', smallLetter: 'B', name: 'bee', correction: null },
    { capitalLetter: 'c', smallLetter: 'C', name: 'cee', correction: null },
    { capitalLetter: 'd', smallLetter: 'D', name: 'dee', correction: null },
    { capitalLetter: 'e', smallLetter: 'E', name: 'ee', correction: null },
    { capitalLetter: 'f', smallLetter: 'F', name: 'eff', correction: null },
    { capitalLetter: 'g', smallLetter: 'G', name: 'gee', correction: null },
    { capitalLetter: 'h', smallLetter: 'H', name: 'haitch', correction: null },
    { capitalLetter: 'i', smallLetter: 'I', name: 'i', correction: null },
    { capitalLetter: 'j', smallLetter: 'J', name: 'jay', correction: null },
    { capitalLetter: 'k', smallLetter: 'K', name: 'kay', correction: null },
    { capitalLetter: 'l', smallLetter: 'L', name: 'el', correction: null },
    { capitalLetter: 'm', smallLetter: 'M', name: 'em', correction: null },
    { capitalLetter: 'n', smallLetter: 'N', name: 'en', correction: null },
    { capitalLetter: 'o', smallLetter: 'O', name: 'o', correction: null },
    { capitalLetter: 'p', smallLetter: 'P', name: 'pee', correction: null },
    { capitalLetter: 'q', smallLetter: 'Q', name: 'cue', correction: null },
    { capitalLetter: 'r', smallLetter: 'R', name: 'ar', correction: null },
    { capitalLetter: 's', smallLetter: 'S', name: 'ess', correction: null },
    { capitalLetter: 't', smallLetter: 'T', name: 'tee', correction: null },
    { capitalLetter: 'u', smallLetter: 'U', name: 'u', correction: null },
    { capitalLetter: 'v', smallLetter: 'V', name: 'vee', correction: null },
    { capitalLetter: 'w', smallLetter: 'W', name: 'double-u', correction: null },
    { capitalLetter: 'x', smallLetter: 'X', name: 'ex', correction: null },
    { capitalLetter: 'y', smallLetter: 'Y', name: 'wy', correction: null },
    { capitalLetter: 'z', smallLetter: 'Z', name: 'zee', correction: null }
];


let answer = ref([]);

console.log(answer);

function check(index) {
    let answerIndex = answer.value[index].toLowerCase();
    let alphabetName = alphabet[index].name;
    answerIndex === alphabetName ? alphabet[index].correction = true : alphabet[index].correction = false;
    answer.value.push('');
    answer.value.pop();

    if (answerIndex === alphabetName) {
        focusNextInput(index);
    }
}

function focusNextInput(index) {
    let getInput = String('input_' + (index + 1));
    document.getElementById(getInput).focus();
}

function clear() {
    alphabet.forEach(element => {
        element.correction = null;
    });
    answer.value = [];
}

</script>

<template>
    <div>
        <Title title="Alphabet"></Title>
        <Info info="
            Fill the empty box with the name of corresponding letter.
            <br> Example: the name of letter <strong>A</strong> is <strong>ei</strong>.
        ">
        </Info>

        <div class="flex justify-center items-center py-6">
            <button @click="clear()"
                class="flex px-7 py-2  rounded bg-indigo-100 hover:bg-indigo-200 font-semibold tracking-wide">Clear
            </button>

        </div>

        <div class="flex justify-center items-center pb-40">
            <table class="text-xl">
                <tr>
                    <th class="text-center px-4">Small Letter</th>
                    <th class="text-center px-4">Capital Letter</th>
                    <th class="text-center px-4">Name</th>
                </tr>
                <tr v-for="letter, index in alphabet" :key="index">
                    <td class="text-center py-1">{{ letter.smallLetter }}</td>
                    <td class="text-center py-1">{{ letter.capitalLetter }}</td>
                    <td class="flex text-center py-1">
                        <input type="text" @keyup.enter="check(index)" v-model="answer[index]" :id="'input_' + index"
                            class="border rounded max-w-24 text-center">
                    </td>
                    <td>
                        <div class="flex justify-center items-center mx-2 min-w-7">
                            <span v-if="letter.correction === null"></span>
                            <span v-else-if="letter.correction === true" class="mr-2"><img src="../../public/image/done.svg"
                                    alt="right answer" class="bg-green-100 rounded"></span>
                            <span v-else class="mr-2"><img src="../../public/image/wrong.svg" alt="wrong answer"
                                    class="bg-red-100 rounded"></span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>