<template>
  <div class="container">
    <img class="avatar" :src="require(`@/assets/${image_path}`)">
    <h3 class="avatar-title">{{ name }}</h3>
    <div v-if="instagram">
      <a :href="`https://instagram.com/${instagram}`" class="meta">@{{ instagram }}</a>
    </div>
    <div v-else>
      <br>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "FeedbackItem",
  props: {
    image_path: {required: true, type: String},
    name: {required: true, type: String},
    instagram: {required: true, type: String},
    description: {required: true, type: String},
  }
}
</script>

<style scoped>
.container {
  display: inline;

}

.avatar {
  width: 100px;
  border-radius: 100%;
  position: absolute;
}

.avatar-title {
  display: inline-block;
  color: var(--text-color);
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5em;
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 130px;
}



.meta {
  color: var(--heading-meta);
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 400;
  display: block;
  margin-left: 145px;
}

.description {
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.5em;
  color: var(--heading-meta);
  margin-left: 145px;
}
</style>