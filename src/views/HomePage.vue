<template>
  <div class="mobile-navbar-margin" v-if="isMobile"></div>
  <!--  for mobile -->
  <PlaceHolder v-if="!imageLoaded && isMobile" :width="`100%`" :height="`80vw`"/>
  <!--  for desktop -->
  <PlaceHolder v-if="!imageLoaded && !isMobile" :width="`100%`" :height="`100vh`"/>
  <ul class="home-slider transition" :style="{opacity:imageLoaded ? '1' : '0' }">
    <li class="slider"></li>
  </ul>
  <section class="section container">
    <div class="columns is-desktop">
      <div class="column is-12">
        <section class="section">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-10-desktop is-12-tablet">
                <p class="about-me">
                  While there is perhaps a province in which the photograph can tell us nothing more
                  than what
                  we see with our
                  own
                  eyes, there is another in which it proves to us how little our eyes permit us to see.</p>
<!--                <img class="sign" src="../assets/home/sign.png">-->
                <ImageSkeleton class="sign" :imageSrc="require(`@/assets/home/sign.png`)" :alt="'Image'" :h="`65px`"/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="columns is-multiline">
              <ul class="album">
                <li class="column animated fadeInUp is-4-desktop is-6-tablet is-12-mobile" v-for="index in images"
                    :key="index">
                  <ImageSkeleton :imageSrc="index" :alt="'Image'"
                                 class="img-responsive animated fadeInUp"></ImageSkeleton>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSkeleton from "@/components/ImageSkeleton";
import PlaceHolder from "@/components/PlaceHolder.vue";

export default {
  name: "HomePage",
  components: {ImageSkeleton, PlaceHolder},
  data: () => {
    const images = []

    for (let i = 0; i < 14; i++) {
      images.push(require(`../assets/home/album/${i}.webp`))
    }

    return {
      images,
      isMobile: false,
      imageLoaded: false,
    };
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false
    }
    this.checkImageLoaded()
  },
  methods: {
    checkImageLoaded() {
      const img = new Image()
      const img2 = new Image()
      img.src = require(`../assets/home/slider/01.webp`)
      img2.src = require(`../assets/home/slider/02.webp`)
      img.onload = () => {
        this.imageLoaded = true
      }
      img2.onload
    }
  }
}
</script>

<style scoped>


.container {
  width: 100%;
}

.home-slider {
  list-style: none;
  margin: 0;
  padding: 0;
}

.slider {
  background-size: cover;
  height: 100vh;
  animation-name: example;
  animation-duration: 20s;
  animation-iteration-count: infinite;
}

@media screen and (max-width: 768px) {
  .slider {
    height: 67vw;
  }
}


@keyframes example {
  0% {
    background-image: url("../assets/home/slider/01.webp");
  }
  20% {
    background-image: url("../assets/home/slider/01.webp");
  }
  50% {
    background-image: url("../assets/home/slider/02.webp");
  }
  70% {
    background-image: url("../assets/home/slider/02.webp");
  }
  100% {
    background-image: url("../assets/home/slider/01.webp");
  }
}

.about-me {
  font-size: 20px;
  /*padding: 0px 110px 10px 110px;*/
  text-align: center;
  line-height: 1.5;
  color: var(--heading-meta);
}

.sign {
  width: 240px;
  margin: 0 auto;
  display: block;
}

.album {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  transition: opacity 0.5s ease-in-out;
}

.album-image {
  width: 30%;
  margin: 15px 15px;
}

.album-image img {
  width: 100%;
}

.album > li:nth-child(1) > img {
  animation-delay: 0.2s;
}

.album > li:nth-child(2) > img {
  animation-delay: 0.4s;
}

.album > li:nth-child(3) > img {
  animation-delay: 0.6s;
}

.album > li:nth-child(4) > img {
  animation-delay: 0.8s;
}

.album > li:nth-child(5) > img {
  animation-delay: 1s;
}

.album > li:nth-child(6) > img {
  animation-delay: 1.2s;
}

.album > li:nth-child(7) > img {
  animation-delay: 1.4s;
}

.album > li:nth-child(8) > img {
  animation-delay: 1.6s;
}

.album > li:nth-child(9) > img {
  animation-delay: 1.8s;
}

.album > li:nth-child(10) > img {
  animation-delay: 2s;
}

.album > li:nth-child(11) > img {
  animation-delay: 2.2s;
}

.album > li:nth-child(12) > img {
  animation-delay: 2.4s;
}

.album > li:nth-child(13) > img {
  animation-delay: 2.6s;
}

.album > li:nth-child(14) > img {
  animation-delay: 2.8s;
}

</style>