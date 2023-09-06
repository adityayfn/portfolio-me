<template>
  <div class="index-container mt-5">
    <div
      class="tabs tabs-boxed bg-white dark:bg-base-100 my-2 flex justify-center w-48 md:w-80 mx-auto"
    >
      <div
        class="tab text-base-100 dark:text-white"
        :class="home ? 'tab-active' : ''"
        @click=";(home = true), (portfolio = false)"
      >
        <h1 class="md:text-2xl">Home</h1>
      </div>

      <div
        class="tab text-base-100 dark:text-white"
        :class="portfolio ? 'tab-active' : ''"
        @click=";(portfolio = true), (home = false)"
      >
        <h1 class="md:text-2xl">Portfolio</h1>
      </div>
    </div>

    <div class="tab-item">
      <Home v-if="home == true" />
      <Portfolio v-if="portfolio == true" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import Home from "./Home.vue"
import Portfolio from "./Portfolio.vue"

const home = ref(true)
const portfolio = ref(false)
</script>
<style></style>
