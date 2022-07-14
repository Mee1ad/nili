<template>
  <div class="container animated fadeIn">
    <ul class="home-slider">
      <li class="slider"></li>
    </ul>
    <div class="about">
      <p class="about-me">While there is perhaps a province in which the photograph can tell us nothing more than what we see with our
        own
        eyes, there is another in which it proves to us how little our eyes permit us to see.</p>
      <img class="sign" src="../assets/home/sign.png">
    </div>

    <ul class="album">
      <li class="album-image" v-for="index in images" :key="index">
        <img :src="index" alt="selectedDog">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data:()=>{
    const images = []

    for (let i =0;i<18;i++){
      images.push(require(`../assets/home/album/${i+1}.jpg`))
    }

    return {
      images
    };
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
  animation-duration: 10s;
  animation-iteration-count: infinite;
}


@keyframes example {
  0% {
    background-image: url("../assets/home/slider/01.jpg");
  }
  20% {
    background-image: url("../assets/home/slider/01.jpg");
  }
  50% {
    background-image: url("../assets/home/slider/02.jpg");
  }
  70% {
    background-image: url("../assets/home/slider/02.jpg");
  }
  100% {
    background-image: url("../assets/home/slider/01.jpg");
  }
}

.about-me {
  font-size: 20px;
  padding: 70px 220px 10px 200px;
  text-align: center;
  line-height: 1.5;
  color: #777;
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
  padding: 0 0 0 15px;
}

.album-image {
  width: 30%;
  margin: 15px 15px;
}

.album-image img {
  width: 100%;
}
</style>