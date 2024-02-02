<script setup>
import { computed, onMounted, ref } from 'vue';
import irregularVerbsList from '../../public/irregularVerbsList';
import Title from './global_component/Title.vue';

const index = ref('');
const verb = ref('');
const simple_past = ref('');
const past_perfect = ref('');
const item_simple_class = ref('');
const item_perfect_class = ref('');
const verbs_selected = ref([]);
const verbs_responded = ref([]);
const verb_simple_input = ref(null);

let positionChecked = [];
let verbCorrection = [];
let answer = [];

onMounted(() => {
    verbFromList();
})

const porcentagem = computed(() => {
    const totalIrregularVerbs = irregularVerbsList.length;
    const listUntilNow = verbs_selected.value.length;
    const percent = listUntilNow === 0 ? 0 : (listUntilNow / totalIrregularVerbs) * 100;
    if (percent === 100 || percent > 100) {
        verbs_selected.value = [];
        verbs_responded.value = [];
    }
    if (verbs_selected.value.length === 0) {
        porcentagem.value = '0.00';
    }
    return percent.toFixed(2); // Retornar a porcentagem com duas casas decimais
})

const pontuacao = computed(() => {
    return verbs_selected.value.length;
})

function cleanArrays() {
    verbCorrection = [];
    answer = [];
    simple_past.value = '';
    past_perfect.value = '';
}

function getListLength() {
    let listLength = irregularVerbsList.length;
    return listLength;
}

function sortNumber() {
    let maxNumber = getListLength();
    let number = Math.floor(Math.random() * maxNumber);
    if (maxNumber == positionChecked.length)
        positionChecked = [];
    while (positionChecked.indexOf(number) != -1) {
        number = Math.floor(Math.random() * maxNumber);
    }
    positionChecked.push(number);
    return number;
}

function verbFromList() {
    let listIndex = sortNumber();
    const { verb: verbValue, simple_past: simplePastValue, past_perfect: pastPerfectValue } = irregularVerbsList[listIndex];
    verb.value = verbValue;
    index.value = listIndex;
    return { verb: verbValue, simple_past: simplePastValue, past_perfect: pastPerfectValue };
}

function convertToLowerCase(verb, simple_past, past_perfect) {
    let converted = {
        verb: String(verb).toLowerCase(),
        simple_past: String(simple_past).toLowerCase(),
        past_perfect: String(past_perfect).toLowerCase()
    };
    return converted;
}

function changeClass(simple_past, past_perfect, converted_simple_past, converted_past_perfect) {
    item_simple_class.value = simple_past === converted_simple_past ? 'green' : 'red';
    item_perfect_class.value = past_perfect === converted_past_perfect ? 'green' : 'red';
}

function correct(verb, simple_past, past_perfect) {
    cleanArrays();
    let item = irregularVerbsList[index.value]; // {verb: 'beat', simple_past: 'beat', past_perfect: 'beaten'}
    let convertedToLower = convertToLowerCase(verb, simple_past, past_perfect);

    verbCorrection.push(item);
    verbs_responded.value.push(item);
    answer.push(convertedToLower);
    verbs_selected.value.push(convertedToLower);

    changeClass(item.simple_past, item.past_perfect, convertedToLower.simple_past, convertedToLower.past_perfect);
    verbFromList();
    verb_simple_input.value.focus();
}

</script>

<template>
    <Title title="Irregular Verbs" />

    <div class="flex justify-center items-center pt-8 w-full text-3xl">
        <div class="mx-10">
            <span>{{ porcentagem }}%</span>
        </div>
        <div class="mx-10">
            <span>{{ pontuacao }} / {{ irregularVerbsList.length }}</span>
        </div>
    </div>

    <div @keyup.enter="correct(verb, simple_past, past_perfect)" class="py-10 flex flex-wrap justify-center items-center">
        <input type="text" v-model="verb" readonly class="border border-slate-400 rounded p-4 m-2 text-2xl">
        <input type="text" v-model.trim="simple_past" autofocus ref="verb_simple_input"
            class="border border-slate-400 rounded p-4 m-2 text-2xl">
        <input type="text" v-model.trim="past_perfect" class="border border-slate-400 rounded p-4 m-2 text-2xl">
    </div>

    <div class="border border-slate-300 m-2 flex flex-col justify-center items-center">

        <div class="flex">
            <table v-for="item in verbCorrection">
                <tr>
                    <th>Answer</th>
                </tr>
                <tr>
                    <td>{{ item.verb }}</td>
                </tr>
                <tr>
                    <td>{{ item.simple_past }}</td>
                </tr>
                <tr>
                    <td>{{ item.past_perfect }}</td>
                </tr>
            </table>
            <table v-for="item in answer">
                <tr>
                    <th>Your Answer</th>
                </tr>
                <tr>
                    <td>{{ item.verb }}</td>
                </tr>
                <tr>
                    <td>{{ item.simple_past || "-" }}</td>
                </tr>
                <tr>
                    <td>{{ item.past_perfect || "-" }}</td>
                </tr>
            </table>
        </div>

        <div class="grid grid-rows-1 grid-cols-2 justify-items-center items-center w-full p-6 grid-flow-row">
            <table v-if="verbs_responded.length" class="border border-slate-300 text-xl w-1/2">
                <caption>Correct Answer</caption>
                <tr v-for="item in verbs_responded">
                    <td class="border border-slate-300 p-2">{{ item.verb }}</td>
                    <td class="border border-slate-300 p-2">{{ item.simple_past }}</td>
                    <td class="border border-slate-300 p-2">{{ item.past_perfect }}</td>
                </tr>
            </table>

            <table v-if="verbs_selected.length" class="border border-slate-300 text-xl w-1/2">
                <caption>Your Answer</caption>
                <tr v-for="item in verbs_selected">
                    <td class="border border-slate-300 p-2">{{ item.verb }}</td>
                    <td class="border border-slate-300 p-2">{{ item.simple_past }}</td>
                    <td class="border border-slate-300 p-2">{{ item.past_perfect }}</td>
                </tr>
            </table>
        </div>


    </div>
</template>

<style></style>
