<template>
  <div id="app">
    <header class="app-header">
      <div class="header-wrapper">
        <img src="./styles/Logo.jpg" alt="" class="head-logo">
        <div class="group-button">
          <button class="group-button__home" @click="isHome = true">
            HOME
          </button>
          <button class="group-button__about-us" @click="isHome = false">
            ABOUT US
          </button>
        </div>
      </div>
    </header>
    <MainContent v-if="isHome"/>
    <AboutUs v-else/>
  </div>
</template>

<script>
import MainContent from './components/Main-Content.vue';
import AboutUs from './components/About-Us.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    AboutUs
  },
  data() {
    return {
      isHome: true
    }
  }
}
</script>
