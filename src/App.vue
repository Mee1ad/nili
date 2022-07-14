<!--https://webredox.net/demo/wp/annie/light/-->
<!--http://duruthemes.com/demo/html/annie/light/index.html-->
<template>

    <div class="root">
      <SideMenu msg="Welcome to Your Vue.js App"/>
      <div class="main-content">
        <router-view/>
        <FooterPage msg="test"/>
      </div>

    </div>

</template>

<script>
import SideMenu from './components/SideMenu.vue'
import FooterPage from "@/components/FooterPage.vue";


export default {
  name: 'App',
  components: {
    SideMenu,
    FooterPage
  }
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.5em;
}

.main-content {
  flex: 1;
}

.root {
  display: flex;
}

p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5em;
  margin: 0 0 20px;
  color: #777;
  font-weight: 400;
}



.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}


@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}
</style>
