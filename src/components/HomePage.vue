<template>
  <div class="mobile-navbar-margin" v-if="isMobile"></div>
  <ul class="home-slider">
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
                <img class="sign" src="../assets/home/sign.png">
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="columns is-multiline">
              <ul class="album">
                <li class="column animated fadeInUp is-4-desktop is-6-tablet is-12-mobile" v-for="index in images" :key="index">
                  <img :src="index" alt="" class="img-responsive">
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
export default {
  name: "HomePage",
  data: () => {
    const images = []

    for (let i = 0; i < 14; i++) {
      images.push(require(`../assets/home/album/${i}.webp`))
    }

    return {
      images,
      isMobile: false,
    };
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false
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
</style>