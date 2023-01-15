<template>
  <div class="image-holder animated fadeInUp glassBox">
    <router-link :to="`/${serviceUrl}`">
<!--            <img class="image bg" :src="require(`@/assets/${imagePath}`)">-->
      <div class="bg" :style="{'background-image': 'url(' + require(`@/assets/${imagePath}.webp`) + ')'}"></div>
      <div class="border"></div>
      <div class="glassBox__imgBox">
        <img :src="require(`@/assets/${imagePath}.png`)" alt="" class="obj">
      </div>
            <div class="caption">
              <i class="fa fa-camera"></i>
              <h3>{{ caption }}</h3>
            </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AnimatedServiceImage",
  props: {
    imagePath: {required: true, type: String},
    caption: {required: true, type: String},
    serviceUrl: {required: true, type: String}
  }
}
</script>

<style scoped>
.image-holder {
  position: relative;
}

.image-holder {
  width: 100%;
  margin: 10px;
}

.caption {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: var(--normal-text-color);
  font-weight: 900;
}

.caption > i {
  font-size: 20px;
}

.caption > h3 {
  backdrop-filter: blur(2px) saturate(100%);
  color: var(--normal-text-color);
  font-size: 20px;
  margin-top: 10px;
}

.border {
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: -10px;
  left: 10px;
  border: 2px solid white;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 1s linear;
}

.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(204, 204, 204, 0);
  /*background-image: url("../assets/services/birthday/cover.jpg");*/
  background-size: cover;
}

.glassBox:hover .bg {
  /*filter: grayscale(100%);*/
  filter: blur(2px);
}

.glassBox:hover .border {
  visibility: visible;
  opacity: 1;
}

/* * Start */
.glassBox {
  border: #FFFFFF;
  /*height: 400px;*/
  border-radius: 1px;
  /*padding: 15px;*/
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  /*box-shadow: inset 0px 0px 0px 10px black;*/
  /*border: 10px solid blue;*/
}


.glassBox:hover {
  transform: translateY(0px);
}

.obj {
  width: 100%;
}

.glassBox, .glassBox * {
  box-sizing: border-box;
  transition: 800ms;
}

.glassBox__imgBox img {
  display: block;
  width: 100%;
  height: auto;
}

.glassBox__title {
  text-align: center;
  margin-top: 15px;
  color: var(--normal-text-color);
  font-size: 20px;
  font-weight: 400;
  font-family: "Lato";
}

.glassBox__content {
  position: absolute;
  right: 15px;
  bottom: 15px;
  left: 15px;
  text-align: center;
  color: var(--normal-text-color);
  font-size: 14px;
  font-family: "Lato";
  letter-spacing: 0.1em;
  opacity: 0;
}

.glassBox__imgBox {
  transform: translateY(0px);
}

.glassBox:hover .glassBox__imgBox {
  transform: translateY(0px);
}

.glassBox:hover .glassBox__imgBox img {
  transform: translate(0px, 0px) rotate(0deg) scale(1.3);
  -webkit-transition: transform 17s ease-in-out;
}

</style>