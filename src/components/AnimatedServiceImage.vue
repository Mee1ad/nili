<template>
  <div class="image-holder animated fadeInUp glassBox" style="position: relative">
    <router-link :to="`/${serviceUrl}`">
      <div v-if="!(imageLoaded2 && imageLoaded)">
        <PlaceHolder :w="`362px`" :h="`469px`" :width="`100%`" :height="`100%`"></PlaceHolder>
      </div>
      <div class="transition" :style="{opacity:imageLoaded2 && imageLoaded ? '1' : '0' }">
        <div class="bg" :style="{'background-image': 'url(' + require(`@/assets/${imagePath}.webp`) + ')'}"></div>
        <div class="border"></div>
        <div class="glassBox__imgBox" :style="{ display: imageLoaded2 && imageLoaded ? 'block' : 'none' }">
          <img @load="imageLoaded2 = true" :src="require(`@/assets/${imagePath}.png`)" :alt=alt class="obj">
        </div>
        <div class="caption">
          <i class="fa fa-camera"></i>
          <h3>{{ caption }}</h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import PlaceHolder from "@/components/PlaceHolder";

export default {
  components: {PlaceHolder},
  data() {
    return {
      imageUrl: require(`../assets/${this.imagePath}.webp`),
      imageLoaded: false,
      imageLoaded2: false
    }
  },
  mounted() {
    this.checkImageLoaded()
  },
  methods: {
    checkImageLoaded() {
      const img = new Image()
      img.src = this.imageUrl
      img.onload = () => {
        this.imageLoaded = true
      }
    }
  },
  name: "AnimatedServiceImage",
  props: {
    imagePath: {required: true, type: String},
    alt: {required: true, type: String},
    caption: {required: true, type: String},
    serviceUrl: {required: true, type: String}
  },
}
</script>

<style scoped>
.image-holder {
  position: relative;
}

.image-holder {
  width: 100%;
  /*margin: 10px;*/
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