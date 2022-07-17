import { createWebHistory, createRouter } from "vue-router"
import Home from "@/components/HomePage.vue"
import About from "@/components/AboutPage.vue";
import Services from "@/views/ServicesPage.vue";
import Feedback from "@/views/FeedbackPage"
import Contact from "@/views/ContactPage";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/services', name: 'Services', component: Services},
    {path: '/feedback', name: 'Feedback', component: Feedback},
    {path: '/contact', name: 'Contact', component: Contact},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router