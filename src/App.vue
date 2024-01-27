<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue'

let drawer = ref(null);

</script>

<template>
  <v-card class="v-card_mobile">
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-divider></v-divider>
        <Sidebar></Sidebar>
      </v-navigation-drawer>
      <v-main style="min-height: 100vh">
        <div class="absolute">
          <v-btn color="transparent" size="40px" @click.stop="drawer = !drawer">
            <span class="material-symbols-outlined">menu</span>
          </v-btn>
        </div>
        <div class="pt-14">
          <router-view></router-view>
        </div>
      </v-main>
    </v-layout>
  </v-card>
  <v-card class="v-card_browser">
    <v-layout>
      <v-navigation-drawer permanent>
        <Sidebar></Sidebar>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <div class="pt-14">
          <router-view></router-view>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
@media (min-width: 600px) {
  .v-card_mobile {
    display: none;
  }
}

@media (max-width: 600px) {
  .v-card_browser {
    display: none;
  }
}
</style>
