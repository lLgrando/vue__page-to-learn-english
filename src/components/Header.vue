<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

</script>

<template>

  <header>
    <button @click="toggleMobileMenu" class="mobile-menu-toggle">&#9776;</button>

    <ul :class="{ 'mobile-menu-open' : isMobileMenuOpen }">
      <li><a>Irregular Verbs</a></li>
      <li><a>Verbs tenses</a></li>
      <li><a>Numbers</a></li>
      <li><a>Time</a></li>
    </ul>
  </header>

</template>

<style scoped>
  header {
    width: 100%;
  }

  .mobile-menu-toggle {
    display: none;
  }

  header ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid gray;
  }

  header ul li {
    cursor: pointer;
  }

.mobile-menu-toogle {
  display: none;
}

@media only screen and (max-width: 600px) {

  header ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 40px; /* Ajuste conforme necessário */
    left: 0;
    width: 100%;
    border-bottom: none;
  }

  header ul.mobile-menu-open {
    display: flex; /* Exibe a lista quando o menu está aberto */
  }

  .mobile-menu-toggle {
    display: block; /* Exibe o botão em telas menores */
    color: white;
    padding: 6px;
    border: none;
    cursor: pointer;
  }
}

</style>
