<!--https://webredox.net/demo/wp/annie/light/-->
<!--http://duruthemes.com/demo/html/annie/light/index.html-->
<template>
  <div class="root">
    <ScrollProgress />
    <SideMenu/>

    <div class="main-content">

      <router-view/>
      <FooterPage msg="test"/>
    </div>

  </div>

</template>

<script>
import SideMenu from './components/SideMenu.vue'
import FooterPage from "@/components/FooterPage.vue";
import ScrollProgress from "@/components/ScrollProgress";



export default {
  name: 'App',
  components: {
    SideMenu,
    FooterPage,
    ScrollProgress
  },

}

</script>
