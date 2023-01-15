<template>
  <div class="image-holder animated fadeInUp">
    <router-link :to="`/${serviceUrl}`">
      <img class="image" :src="require(`@/assets/${imagePath}`)">
      <div class="caption">
        <i class="fa fa-camera"></i>
        <h3>{{ caption }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ServiceImage",
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

.image {
  width: 100%;
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
  color: var(--normal-text-color);
  font-size: 20px;
  margin-top: 10px;
}

</style>