<template>
  <section
    class="hero-container p-4 mt-10 animate__animated animate__fadeInLeft"
  >
    <div class="flex flex-wrap justify-center my-5 md:items-center md:gap-10">
      <div class="text-base-100 text-center dark:text-white">
        <h1 class="text-3xl md:text-4xl xl:text-5xl my-2">
          HI, I AM <span class="text-primary font-bold">ADITYA</span>
        </h1>
        <h1 class="text-md md:text-xl xl:text-2xl">
          Junior Frontend Developer
        </h1>
      </div>
      <div class="my-10">
        <img
          src="/public/programming.svg"
          alt="hero"
          class="md:w-80 xl:w-[500px]"
        />
      </div>
    </div>
  </section>

  <section
    class="about-container p-4 mt-10 animate__animated animate__fadeInRight"
  >
    <About />
  </section>
  <section
    class="contact-container p-4 mt-10 animate__animated animate__fadeInLeft"
  >
    <Contact />
  </section>
  <Footer />
</template>
<script setup>
import About from "../components/section/About.vue"
import Contact from "../components/section/Contact.vue"
import Footer from "./Footer.vue"
</script>
<style></style>
