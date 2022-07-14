<template>
  <div class="image-holder animated fadeInUp">
    <img class="image" :src="require(`@/assets/${image_path}`)">
    <div class="caption">
      <i class="fa fa-camera"></i>
      <h3>{{ caption }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceImage",
  props: {
    image_path: {required: true, type: String},
    caption: {required: true, type: String}
  }
}
</script>

<style scoped>
.image-holder {
  position: relative;
}

.image {
  width: 100%;
  margin: 10px;
}

.caption {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  font-weight: 900;
}

.caption > i {
  font-size: 20px;
}

.caption > h3 {
  color: white;
  font-size: 20px;
  margin-top: 10px;
}

</style>