<template>
  <div class="placeholder" :style="{ '--placeholder-width': width, '--placeholder-height': height, width: w, height: h  }">
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
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    w: {
      type: String,
      required: true
    },
    h: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

:root {
  --placeholder-width: 100px;
  --placeholder-height: 100px;
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

.placeholder::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: var(--placeholder-width);
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