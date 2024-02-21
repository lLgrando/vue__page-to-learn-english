<script setup>
</script>

<template>
  <v-list density="compact" nav class="h-full bg-indigo w-60" 
  v-if="!['/contact'].includes($route.path)"
  >
    <div class="flex justify-center items-center w-full">
      <a href="/">
        <img src="../../../public/image/logo.svg" alt="logo" class="w-20 p-2 m-4" width="80px" height="80px">
      </a>
    </div>
    <v-list-item value="home" to="/">Home</v-list-item>
    <v-list-item value="irregularverbs" to="/irregularverbs">Irregular Verbs</v-list-item>
    <v-list-item value="time" to="/time">Time</v-list-item>
    <v-list-item value="numbers" to="/numbers">Numbers</v-list-item>
    <v-list-item value="atinon" to="/atinon">At In On</v-list-item>
    <v-list-item value="weekday" to="/weekday">Weekday</v-list-item>
    <v-list-item value="past" to="/past">Past</v-list-item>
    <v-list-item value="alphabet" to="/alphabet">Alphabet</v-list-item>
    <v-list-item value="others" to="/others">Others</v-list-item>
  </v-list>
</template>
