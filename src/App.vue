<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer floating permanent color="indigo-accent-1">
        <Sidebar></Sidebar>
      </v-navigation-drawer>
      <v-main style="min-height: 100vh">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
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
