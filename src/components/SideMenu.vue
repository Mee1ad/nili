<template>
  <div class="burger-background">
    <BurgerMenu class="burger-button" v-if="isMobile" @click="isOpen = !isOpen"></BurgerMenu>
  </div>
    <div :class="{ 'open': isOpen || !isMobile, 'side-menu': true }">
      <CrossCloseBTN class="delete" v-if="isMobile && isOpen" @click="isOpen = !isOpen"></CrossCloseBTN>
      <div class="side-menu-content">
        <router-link class="logo" to="/">
          <img class="logo-image" src="../assets/logo.png">
        </router-link>
        <font-awesome-icon icon="fa-solid fa-user-secret"/>
        <a class="typo">
          Nili Razaghi
          <span>PHOTOGRAPHER</span>
        </a>
        <ul class="menu-items">
          <li class="menu-item" v-for="menuItem in menuItems" :key="menuItem" @click="isOpen = !isOpen">
            <router-link :to="menuItem.to" :active="$route.fullPath === menuItem.to?'':undefined">{{
                menuItem.name
              }}
            </router-link>
          </li>
        </ul>
        <ul class="footer">
          <li><a href="https://t.me/Nilucheh" target="_blank"><i class="fa fa-telegram"></i></a></li>
          <li><a href="https://instagram.com/nilirazaghi" target="_blank"><i class="fa fa-instagram"></i></a></li>
          <li><a href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
        </ul>
      </div>
    </div>
  <div class="side-menu-placeholder is-hidden-mobile"/>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu";
import CrossCloseBTN from "@/components/CrossCloseBTN";

const menuItems = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Services',
    to: '/services'
  },
  {
    name: 'Gallery',
    to: '/gallery'
  },
  {
    name: 'Feedback',
    to: '/feedback'
  },
  {
    name: 'Contact',
    to: '/contact'
  },
]
export default {
  name: 'HelloWorld',
  components: {
    CrossCloseBTN,
    BurgerMenu
  },
  props: {
    msg: String
  },
  data: () => {
    return {
      menuItems,
      isMobile: window.innerWidth < 768,
      isOpen: false
    };
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isOpen = true
    }
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.isMobile = true;
        this.isOpen = false;
      } else {
        this.isMobile = false
      }
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo {
  display: inline-block;
  text-align: center;
}

.logo-image {
  width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.typo {
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5em;
  display: block;
  margin-bottom: 65px;
}

.typo > span {
  font-size: 12px;
  font-weight: 400;
  display: block;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
  color: var(--p);
  letter-spacing: 2px;
  line-height: 1.5em;
}


.side-menu {
  position: fixed;
  max-width: var(--side-menu-width);
  height: 100vh;
  box-shadow: 1px 1px 20px 0 #99999924;
  z-index: 99;
  background-color: var(--background-color);
}

.side-menu-placeholder {
  height: 100vh;
  width: var(--side-menu-width);
}

.side-menu-content {
  padding: 30px 30px;
}


.menu-items {
  list-style: none;
  padding-left: 0;
  margin-bottom: 50px;
}

.menu-item {
  border-bottom: 1px solid var(--border);
  margin: 15px 0 0 0;
  padding: 0 0 10px 0;
  line-height: 1.5em;
  transition: 0.5s;
}

.menu-item > a {
  color: var(--caption-color);
  transition: 0.5s;
}

.footer {
  position: relative;
  bottom: 30px;
  right: 0;
  left: 0;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  color: var(--caption-color);
  padding: 30px;
}

.footer > li {
  display: inline-block;
  margin: 5px;
  background-color: var(--footer-li);
  width: 40px;
  height: 40px;
  line-height: 47px;
  text-align: center;
  border-radius: 50%;
}

.footer > li > a {
  color: var(--a);
}

.footer > li > a > i {
  font-size: 18px;
}

a:hover {
  transition: 0.5s;
  color: var(--a);

}

.menu-items > li > a[active] {
  color: var(--a);
}

@media screen and (max-width: 767px) {
  .side-menu {
    width: 100%;
    max-width: 100%;
    transition: all 200ms linear;
  }
}

.side-menu:not(.open) {
  transform: translateX(-100%);
}

.side-menu.open {
  transform: translateX(0);
}

.delete {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  background-color: unset;
  max-width: unset;
  max-height: unset;
  width: 30px;
  height: unset;
}

.burger-background {
  background: #49494973;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
  backdrop-filter: blur(10px);
}

.navbar-burger {
  margin: 0;
}

.burger-button {
  margin-left: 10px;
  opacity: 0.7;
}
</style>
