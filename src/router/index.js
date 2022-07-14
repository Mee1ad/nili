import { createWebHistory, createRouter } from "vue-router"
import Home from "@/components/HomePage.vue"
import About from "@/components/AboutPage.vue";
import Services from "@/views/ServicesView.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/services', name: 'Services', component: Services}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router