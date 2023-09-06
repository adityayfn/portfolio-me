<template>
  <nav
    class="nav-container p-3 bg-white flex justify-between items-center border-b-2 border-primary xl:justify-around dark:bg-base-100"
  >
    <h1
      class="text-4xl text-primary font-bold cursor-default hover:text-base-100 dark:hover:text-white"
    >
      {{ aditya }}
    </h1>
    <button class="mx-3" @click="toggleDarkMode()">
      <svg-icon
        type="mdi"
        :path="darkMode ? mdiWeatherSunny : mdiMoonWaxingCrescent"
        class="hover:text-primary dark:hover:text-white"
        :class="darkMode ? 'text-primary' : 'text-base-100'"
      ></svg-icon>
    </button>
  </nav>
</template>
<script setup>
import { mdiWeatherSunny, mdiMoonWaxingCrescent } from "@mdi/js"
import { ref, onMounted } from "vue"

const darkMode = ref(false)
const aditya = "<Aditya/>"

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value

  if (darkMode.value) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("darkOn", "true")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("darkOn", "false")
  }
}
onMounted(() => {
  const darkOnStorage = localStorage.getItem("darkOn")
  if (darkOnStorage == "true") {
    darkMode.value = true
    document.documentElement.classList.add("dark")
  } else {
    darkMode.value = false
    document.documentElement.classList.remove("dark")
  }
})
</script>
<style></style>
