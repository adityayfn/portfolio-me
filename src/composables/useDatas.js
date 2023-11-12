import { reactive } from "vue"
import nuxt from "/public/icons/nuxt.png"
import vue from "/public/icons/vue.png"
import react from "/public/icons/react.svg"
import vuetify from "/public/icons/vuetify.png"
import pinia from "/public/icons/pinia.png"
import firebase from "/public/icons/fire.png"
import tailwind from "/public/icons/tailwind.png"
import nextjs from "/public/icons/nextjs.png"
import daisyui from "/public/icons/daisy2.svg"
import antd from "/public/icons/antd.svg"
import sukaNonton from "/public/portfolio/suka-nonton.png"
import store from "/public/portfolio/store.png"
import muvie from "/public/portfolio/muvie.png"
import lpVintage from "/public/portfolio/lp-vintage.png"
import alquran from "/public/portfolio/alquran.png"
import pictHunt from "/public/portfolio/pict-hunt.png"
import islamApp from "/public/portfolio/islam-app.png"
import animeDex from "/public/portfolio/anime-dex.png"

export const state = reactive([
  {
    id: 1,
    title: "Fake Dr Martens Store",
    tech: [nuxt, vuetify, pinia, firebase],
    about:
      "Fake Dr Martens Store using Vue Js 3 with vite. In this project I use firebase database.",

    img: store,
    repo: "https://github.com/adityayfn/nuxt-boots-store",
    demo: "https://fake-drmartens-store.netlify.app/",
  },
  {
    id: 2,
    title: "Anime Dex",
    tech: [nextjs, tailwind, daisyui],
    about:
      "Anime Dex is an anime streaming platform and this was my first project while learning Next JS. I am using the API from https://docs.consumet.org/",

    img: animeDex,
    repo: "https://github.com/adityayfn/anime-dex",
    demo: "https://animes-dex.vercel.app/",
  },
  {
    id: 3,
    title: "Pict Hunt",
    tech: [react, antd],
    about:
      "Pict Hunt is an image explorer website, there are a lot of images for free on it. In this project, I used React JS and the API from Pixabay.",

    img: pictHunt,
    repo: "https://github.com/adityayfn/pict-hunt",
    demo: "https://pict-hunt.vercel.app/",
  },
  {
    id: 4,
    title: "The Muvie Search",
    tech: [vue, vuetify],
    about:
      "This is a movie search project.In this project, I am using API from TMDB",

    img: muvie,
    repo: "https://github.com/adityayfn/muvie",
    demo: "https://the-muvie-search.netlify.app/",
  },
  {
    id: 5,
    title: "LP Tshirt Band Vintage",
    tech: [vue, tailwind, daisyui],
    about: "This is a fake project, I got it from https://goodbrief.io/.",

    img: lpVintage,
    repo: "https://github.com/adityayfn/landing-page-vintage",
    demo: "https://tshirt-band-vintage-lp.netlify.app/",
  },
  {
    id: 6,
    title: "Islam App",
    tech: [vue, tailwind, daisyui],
    about:
      "This is my first project during learn vue js. In this project I use API from https://api.quran.gading.dev/surah  ",

    img: islamApp,
    repo: "https://github.com/adityayfn/islam-app",
    demo: "https://islam-apps.netlify.app",
  },
])
