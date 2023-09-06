import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import SvgIcon from "@jamescoyle/vue-icon"

createApp(App).component("svg-icon", SvgIcon).mount("#app")
