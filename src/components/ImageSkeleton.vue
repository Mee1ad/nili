<template>
  <div class="image-skeleton"
       :class="{ 'image-loaded': imageLoaded }"
       :style="{ '--placeholder-height': h, 'min-width': `${w}`, 'min-height': `${h}` }">
    <img class="transition" :src="imageSrc" @load="imageLoaded = true" :alt="alt"
         :style="{opacity:imageLoaded ? '1' : '0' }">
    <div v-if="!imageLoaded" class="loading-spinner"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageLoaded: false,
    }
  },
  methods: {
    onImageLoad() {
      const ali = this
      setTimeout(function () {
        ali.imageLoaded = true
      }, 1000)
    }
  },
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    w: {
      type: String,
      required: true,
    },
    h: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
:root {
  --placeholder-height: 100px;
}

.image-skeleton {
  position: relative;
  width: 350px;
  /*height: 520px;*/
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.image-loaded {
  filter: grayscale(0);
}

.image-skeleton:not(.image-loaded)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /*height: 100%;*/
  /*width: var(--placeholder-width);*/
  height: var(--placeholder-height);
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 400%;
  animation: loading 1.4s ease infinite;
}

@keyframes loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>