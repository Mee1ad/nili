import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router"
import '@/assets/css/flexboxgrid.css'
import '@/assets/css/style.css'

createApp(App).use(router).mount('#app')