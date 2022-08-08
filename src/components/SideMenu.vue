<template>
  <link href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css" rel="stylesheet">
  <div class="side-menu">
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
        <li class="menu-item" v-for="menuItem in menuItems" :key="menuItem">
          <router-link :to="menuItem.to" :active="$route.fullPath === menuItem.to?'':undefined">{{
              menuItem.name
            }}
          </router-link>
        </li>
      </ul>
      <ul class="footer">
        <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
        <li><a href="https://instagram.com/nilirazaghi" target="_blank"><i class="fa fa-instagram"></i></a></li>
        <li><a href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
      </ul>
    </div>
  </div>
  <div class="side-menu-placeholder"/>
</template>

<script>
const menuItems = [
  {
    name: 'Home',
    to: '/'
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
  props: {
    msg: String
  },
  data: () => {
    return {
      menuItems
    };
  }
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
  color: #777;
  letter-spacing: 2px;
  line-height: 1.5em;
}


.side-menu {
  position: fixed;
  max-width: var(--side-menu-width);
  height: 100vh;
  box-shadow: 1px 1px 20px 0 #99999924;
  z-index: 99;
  background-color: #fff;
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
  border-bottom: 1px solid #ececec;
  margin: 15px 0 0 0;
  padding: 0 0 10px 0;
  line-height: 1.5em;
  transition: 0.5s;
}

.menu-item > a {
  color: #888;
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
  color: #888;
  padding: 30px;
}

.footer > li {
  display: inline-block;
  margin: 5px;
  background-color: #ececec;
  width: 40px;
  height: 40px;
  line-height: 47px;
  text-align: center;
  border-radius: 50%;
}

.footer > li > a {
  color: black;
}

.footer > li > a > i {
  font-size: 18px;
}

a:hover {
  transition: 0.5s;
  color: black;

}

.menu-items > li > a[active] {
  color: black;
}

</style>
