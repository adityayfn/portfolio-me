<template>
  <div class="section-content p-3 flex flex-wrap justify-around gap-5">
    <div class="content-1">
      <h1 class="text-base-100 font-bold text-center text-3xl dark:text-white">
        Contact Details
      </h1>
      <hr class="border-b border-primary w-64 my-0 mx-auto" />
      <div class="flex flex-col gap-3 mt-5 md:w-72 xl:w-[26rem]">
        <div class="flex items-center gap-5">
          <div>
            <svg-icon
              type="mdi"
              :path="mdiMapMarker"
              class="text-base-100 dark:text-white"
              width="35"
              height="35"
            ></svg-icon>
          </div>
          <h1 class="text-base-100 xl:text-xl dark:text-white">
            Jl.Terusan Batu Bara Vb no 38, Blimbing, Malang, Jawa Timur
          </h1>
        </div>
        <div class="flex items-center gap-5">
          <div>
            <svg-icon
              type="mdi"
              :path="mdiEmail"
              class="text-base-100 dark:text-white"
              width="35"
              height="35"
            ></svg-icon>
          </div>
          <h1 class="text-base-100 xl:text-xl dark:text-white">
            adhitya.firstian@gmail.com
          </h1>
        </div>
        <div class="flex items-center gap-5">
          <div>
            <svg-icon
              type="mdi"
              :path="mdiPhone"
              class="text-base-100 dark:text-white"
              width="35"
              height="35"
            ></svg-icon>
          </div>
          <h1 class="text-base-100 xl:text-xl dark:text-white">
            +62 89675601599
          </h1>
        </div>
      </div>
    </div>
    <div class="content-2">
      <h1 class="text-base-100 text-center text-3xl font-bold dark:text-white">
        Contact Form
      </h1>
      <hr class="border-b border-primary w-56 my-0 mx-auto" />
      <div class="card mt-5 border w-72">
        <div class="form-control w-full max-w-xs p-4">
          <label class="label">
            <span class="label-text text-base-100 dark:text-white text-xl"
              >Full Name</span
            >
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            class="input input-bordered w-full max-w-xs bg-white dark:bg-base-100 border-primary text-base-100 dark:text-white"
            v-model="fullName"
          />
          <label class="label">
            <span class="label-text text-base-100 text-xl dark:text-white"
              >Email</span
            >
          </label>
          <input
            type="text"
            placeholder="Enter email"
            class="input input-bordered w-full max-w-xs bg-white dark:bg-base-100 border-primary text-base-100 dark:text-white"
            v-model="email"
          />
          <label class="label">
            <span class="label-text text-base-100 text-xl dark:text-white"
              >Subject</span
            >
          </label>
          <input
            type="text"
            placeholder="Enter subject"
            class="input input-bordered w-full max-w-xs bg-white dark:bg-base-100 border-primary text-base-100 dark:text-white"
            v-model="subject"
          />
          <label class="label">
            <span class="label-text text-base-100 dark:text-white text-xl"
              >Message</span
            >
          </label>
          <textarea
            class="textarea textarea-bordered bg-white border-primary dark:bg-base-100 text-base-100 dark:text-white"
            placeholder="Enter message"
            v-model="message"
          ></textarea>
          <div class="my-3">
            <div
              class="alert mt-2 mb-4 text-white border-none"
              :class="status ? 'bg-red-500' : 'bg-primary'"
              v-if="alertMessage !== ''"
            >
              <span>{{ alertMessage }}</span>
            </div>
            <button class="btn btn-primary" @click="submitForm()">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { mdiMapMarker, mdiEmail, mdiPhone } from "@mdi/js"

import emailjs from "emailjs-com"
import { ref, reactive } from "vue"
const fullName = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")

const EMAILJS_SERVICE_ID = "service_xoaj7ht"
const EMAILJS_TEMPLATE_ID = "template_c28vtrl"
const EMAILJS_USER_ID = "DJY8uWJ6siUPkHEsM"

const alertMessage = ref("")
const isAlert = ref(false)
const status = ref(false)

emailjs.init(EMAILJS_USER_ID)
const submitForm = () => {
  const template = reactive({
    to_name: "Aditya Yudha",
    from_name: fullName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  })

  if (
    template.from_name &&
    template.email &&
    template.subject &&
    template.message
  ) {
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, template)
      .then((res) => {
        console.log("success", res)
      })
      .catch((error) => {
        console.log("error", error)
      })
    isAlert.value = true
    alertMessage.value = "The contact form has been sent successfully"
    setTimeout(() => {
      alertMessage.value = ""
    }, 1500)
    status.value = false
  } else {
    isAlert.value = true
    alertMessage.value = "Please fill out all column"
    setTimeout(() => {
      alertMessage.value = ""
    }, 1500)
    status.value = true
  }
  fullName.value = ""
  email.value = ""
  subject.value = ""
  message.value = ""
}
</script>
<style></style>
