<script setup>
import { ref } from 'vue';
import Sidebar from './components/global_component/Sidebar.vue'
import Footer from './components/global_component/Footer.vue'
import ToTopButton from './components/global_component/ToTopButton.vue'

let drawer = ref(null);
</script>

<template>
  <v-card class="v-card_mobile">
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary>
        <Sidebar></Sidebar>
      </v-navigation-drawer>
      <div>
        <Sidebar class="browser_btn"></Sidebar>
      </div>
      <v-main class="h-full min-h-screen">
        <v-btn color="transparent" border="true" @click.stop="drawer = !drawer" class="mobile_btn">
          <span  class="material-symbols-outlined">menu</span>
        </v-btn>
        <router-view></router-view>
        <ToTopButton></ToTopButton>
      </v-main>
    </v-layout>
    <Footer></Footer>
  </v-card>
</template>

<style scoped>

.mobile_btn {
  position: fixed;
}

@media (min-width: 600px) {
  .mobile_btn {
    display: none;
  }
}

@media (max-width: 600px) {
  .browser_btn {
    display: none;
  }
} 
</style>
