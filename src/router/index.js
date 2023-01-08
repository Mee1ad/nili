import { createWebHistory, createRouter } from "vue-router"
import Home from "@/components/HomePage.vue"
import About from "@/components/AboutPage.vue";
import Services from "@/views/ServicesPage.vue";
import Birthday from "@/views/ServicePage.vue"
import Feedback from "@/views/FeedbackPage"
import Contact from "@/views/ContactPage";
import Gallery from "@/views/GalleryPage";

const routes = [
    {path: '/', name: 'Home', component: Home, meta: { title: 'Nili Razaghi' }},
    {path: '/about', name: 'About', component: About, meta: { title: 'About Nili' }},
    {path: '/services', name: 'Services', component: Services, meta: { title: 'Nili Services' }},
    {path: '/services/:serviceName', name: 'Birthday', component: Birthday, meta: { title: 'Nili Razaghi' }},
    {path: '/gallery', name: 'Gallery', component: Gallery, meta: { title: 'Nili Gallery' }},
    {path: '/feedback', name: 'Feedback', component: Feedback, meta: { title: 'Nili Feedback' }},
    {path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Nili Contact' }},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = to.meta.title;
    next();
});

export default router