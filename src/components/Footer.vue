<template>
  <footer class="mt-10 py-5 flex flex-col gap-5">
    <div>
      <h1 class="text-3xl text-base-100 dark:text-white font-bold text-center">
        Follow Me
      </h1>
    </div>
    <div class="flex justify-center">
      <div>
        <a href="https://github.com/adityayfn"
          ><svg-icon
            type="mdi"
            :path="mdiGithub"
            class="text-base-100 dark:text-white hover:text-primary dark:hover:text-primary"
            width="40"
            height="40"
          ></svg-icon
        ></a>
      </div>
      <div>
        <a href="https://www.instagram.com/adit_oi098/"
          ><svg-icon
            type="mdi"
            :path="mdiInstagram"
            class="text-base-100 dark:text-white hover:text-primary dark:hover:text-primary"
            width="40"
            height="40"
          ></svg-icon
        ></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/aditya-yudha-firstian/">
          <svg-icon
            type="mdi"
            :path="mdiLinkedin"
            class="text-base-100 dark:text-white hover:text-primary dark:hover:text-primary"
            width="40"
            height="40"
          ></svg-icon>
        </a>
      </div>
    </div>
    <div>
      <h1 class="text-gray-400 dark:text-gray-500 font-bold text-center">
        &copy 2023 Developed by ADITYA
      </h1>
    </div>
  </footer>
</template>
<script setup>
import { mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js"
</script>
<style></style>
