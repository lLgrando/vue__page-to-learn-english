<script setup>
import { computed, onMounted, ref } from 'vue';
import irregularVerbsList from '../../public/irregularVerbsList';

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
    <main>
        <div class="title_div">
            <h1>IRREGULAR VERBS EXERCISES</h1>
            <span>Write, press tab, write, press enter, start again...</span>
        </div>
        <div class="input-user" @keyup.enter="correct(verb, simple_past, past_perfect)">
            <input type="text" v-model="verb" readonly>
            <input type="text" v-model.trim="simple_past" autofocus ref="verb_simple_input">
            <input type="text" v-model.trim="past_perfect">
            <input type="button" @click="correct(verb, simple_past, past_perfect)" value="Check">
        </div>
        <div class="answer_div">
            <div class="correct-answer" v-for="item in verbCorrection">
                <span>Answer:</span>
                <span type="text">{{ item.verb }} </span>
                <span type="text">{{ item.simple_past }}</span>
                <span type="text">{{ item.past_perfect }}</span>
            </div>
            <div class="client-answer" v-for="item in answer">
                <span>Your answer:</span>
                <span>{{ item.verb }}</span>
                <span v-if="item.simple_past != ''" :class="item_simple_class">{{ item.simple_past }}</span>
                <span v-else> - </span>
                <span v-if="item.past_perfect != ''" :class="item_perfect_class">{{ item.past_perfect }}</span>
                <span v-else> - </span>
            </div>
            <div class="percent">
                <div>
                    <span>{{ porcentagem }}%</span>
                </div>
                <div>
                    <span>{{ pontuacao }} / {{ irregularVerbsList.length }}</span>
                </div>
            </div>
            <div class="listRespondedItens">
                <table v-if="verbs_selected.length">
                    <caption>Your Answer</caption>
                    <tr v-for="item in verbs_selected">
                        <td>{{ item.verb }}</td>
                        <td>{{ item.simple_past }}</td>
                        <td>{{ item.past_perfect }}</td>
                    </tr>
                </table>
                <table v-if="verbs_responded.length">
                    <caption>Correct Answer</caption>
                    <tr v-for="item in verbs_responded">
                        <td>{{ item.verb }}</td>
                        <td>{{ item.simple_past }}</td>
                        <td>{{ item.past_perfect }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </main>
</template>


<style scoped>
.title_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.title_div span {
    color: gray;
    font-size: 18px;
    margin: 20px;
}

.input-user {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.input-user input {
    height: 50px;
    width: 300px;
    border: 1px solid gray;
    border-radius: 20px;
    margin: 80px 15px;
    padding-left: 10px;
    font-size: 20px;
}

.green {
    color: rgb(110, 187, 110);
}

.red {
    color: red;
}

main {
    position: relative;
    width: 80%;
    min-height: calc(100vh - 40px);
    height: 100%;
    left: 10%;
}

.correct-answer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.correct-answer span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 10px 15px;
    font-size: 20px;
}

.client-answer {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.client-answer span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 10px 15px;
    font-size: 20px;
}

.percent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    padding: 30px;
    font-size: 30px;
    background-color: rgb(231, 231, 231);
}

.percent div {
    text-align: center; /* Center the text horizontally */
}

.listRespondedItens {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.listRespondedItens table {
    padding: 30px;
    font-size: 22px;
    border: 1px solid gray;
    border-collapse: collapse;
}

.listRespondedItens table caption {
    padding: 14px;
    font-size: 24px;
    border: 1px solid gray;
    border-collapse: collapse;
}

.listRespondedItens table tr td {
    padding: 6px 30px;
    border-bottom: 1px solid gray;
}


@media only screen and (max-width: 960px) {
    .input-user {
        flex-direction: column;
        align-items: center;
    }

    .input-user input {
        height: 40px;
        width: 260px;
        margin: 10px 15px;
    }

    .input-user input[type='button'] {
        height: 40px;
        width: 100px;
        padding: 0;
        border: 1px solid gray;
        border-radius: 20px;
        font-size: 16px;
    }

    .correct-answer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(234, 234, 255);
    }

    .correct-answer span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: 4px 15px;
        font-size: 20px;
    }

    .client-answer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: none;
    }

    .client-answer span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: 4px 15px;
        font-size: 20px;
    }

    .listRespondedItens {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .listRespondedItens table {
        padding: 30px;
        margin-top: 10px;
        font-size: 18px;
        border: 1px solid gray;
        border-collapse: collapse;
    }

    .listRespondedItens table caption {
        padding: 14px;
        font-size: 20px;
        border: 1px solid gray;
        border-collapse: collapse;
    }

    .listRespondedItens table tr td {
        padding: 6px 30px;
        border-bottom: 1px solid gray;
    }
}</style>
