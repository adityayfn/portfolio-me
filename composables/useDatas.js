import { reactive } from "vue"
import nuxt from "../public/icons/nuxt.png"
import vue from "../public/icons/vue.png"
import vuetify from "../public/icons/vuetify.png"
import pinia from "../public/icons/pinia.png"
import firebase from "../public/icons/fire.png"
import tailwind from "../public/icons/tailwind.png"
import daisyui from "../public/icons/daisy2.svg"

import sukaNonton from "../public/portfolio/suka-nonton.png"
import store from "../public/portfolio/store.png"
import muvie from "../public/portfolio/muvie.png"
import lpVintage from "../public/portfolio/lp-vintage.png"
import alquran from "../public/portfolio/alquran.png"

export const state = reactive([
  {
    id: 1,
    title: "Suka Nonton ",
    tech: [nuxt, vuetify],
    about:
      "This is a movie streaming platform. In this project, I am using API from another streaming platform. ",
    img: sukaNonton,
    repo: "https://github.com/adityayfn/suka-nonton",
    demo: "https://suka-nonton.netlify.app/",
  },
  {
    id: 2,
    title: "Fake Dr Martens Store",
    tech: [nuxt, vuetify, pinia, firebase],
    about:
      "Fake Dr Martens Store using Vue Js 3 with vite. In this project I use firebase database.",

    img: store,
    repo: "https://github.com/adityayfn/nuxt-boots-store",
    demo: "https://fake-drmartens-store.netlify.app/",
  },
  {
    id: 3,
    title: "The Muvie Search",
    tech: [vue, vuetify],
    about:
      "This is a movie search project.In this project, I am using API from TMDB",

    img: muvie,
    repo: "https://github.com/adityayfn/muvie",
    demo: "https://the-muvie-search.netlify.app/",
  },
  {
    id: 4,
    title: "LP Tshirt Band Vintage",
    tech: [vue, tailwind, daisyui],
    about: "This is a fake project, I got it from https://goodbrief.io/.",

    img: lpVintage,
    repo: "https://github.com/adityayfn/landing-page-vintage",
    demo: "https://tshirt-band-vintage-lp.netlify.app/",
  },
  {
    id: 5,
    title: "Al-Qur'an Online",
    tech: [vue, tailwind, daisyui],
    about:
      "This is my first project during learn vue js. In this project I use API from https://api.quran.gading.dev/surah  ",

    img: alquran,
    repo: "https://github.com/adityayfn/alquran-online-v2",
    demo: "https://alquran-online-v2.netlify.app/",
  },
])
