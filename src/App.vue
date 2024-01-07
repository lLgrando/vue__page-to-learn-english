<script setup>
import HelloWorld from './components/Header.vue'
import IrregularVerbs from './components/IrregularVerbs.vue';
</script>

<template>
  <header>
    <HelloWorld></HelloWorld>
  </header>

  <main>
    <IrregularVerbs />
  </main>
</template>

<style scoped>

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
