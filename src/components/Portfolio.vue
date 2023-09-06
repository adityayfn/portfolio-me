<template>
  <section class="portfolio-container animate__animated animate__fadeInLeft">
    <div
      v-for="data in state"
      class="text-base-100 dark:text-white mx-2 mt-6 p-10 rounded-md flex flex-col items-center md:flex-row md:justify-center md:gap-10 xl:justify-between"
    >
      <div class="img-container md:order-2">
        <img
          :src="data.img"
          alt="portfolio-img"
          class="w-80 md:mt-10 xl:w-[28rem]"
        />
      </div>
      <div
        class="portfolio-item-container flex flex-col gap-3 md:w-80 p-2 xl:w-[30rem]"
      >
        <h1 class="text-3xl font-bold text-center mx-3 mt-5">
          {{ data.title }}
        </h1>
        <hr class="border-b-2 border-primary w-20 my-0 mx-auto" />
        <div class="about-container">
          <h1 class="text-xl font-bold">About</h1>
          <h1 class="break-words">{{ data.about }}</h1>
        </div>
        <div class="flex flex-col">
          <div>
            <h1 class="text-xl font-bold">Tech</h1>
          </div>
          <div class="flex items-center gap-4">
            <div v-for="tech in data.tech">
              <img :src="tech" alt="tech-img" class="w-10" />
            </div>
          </div>
        </div>
        <div class="link-demo-container">
          <h1 class="text-xl font-bold">Repository</h1>
          <a :href="data.repo">
            <svg-icon
              type="mdi"
              :path="mdiGithub"
              class="text-base-100 hover:text-primary dark:text-white dark:hover:text-primary"
              width="40"
              height="40"
            ></svg-icon
          ></a>
        </div>
        <div class="link-demo-container">
          <h1 class="text-xl font-bold">Demo</h1>
          <h1>
            <a :href="data.demo" class="hover:text-primary hover:font-bold">{{
              data.demo
            }}</a>
          </h1>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script setup>
import Footer from "./Footer.vue"
import { mdiGithub } from "@mdi/js"
import { state } from "../../composables/useDatas"
console.log(state)
</script>
<style></style>
