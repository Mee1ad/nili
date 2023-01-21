<template>
  <section class="section">
    <img class="avatar" :src="require(`@/assets/${image_path}`)">
    <h3 class="avatar-title">{{ name }}</h3>
    <div v-if="instagram">
      <a :href="`https://instagram.com/${instagram}`" class="meta">@{{ instagram }}</a>
    </div>
    <div v-else>
      <br>
    </div>
    <p class="description">{{ description }}</p>
  </section>
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
  width: 100px !important;
  max-width: 100px !important;
  border-radius: 100%;
  position: absolute;
  margin-top: -10px;
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
  margin-left: 130px;
}

.description {
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.5em;
  color: var(--heading-meta);
  margin-left: 130px;
}

@media screen and (max-width: 768px) {
  .avatar-title, .meta, .description {
    margin-left: 0;
  }
}

@media screen and (min-width: 1024px) {
  .section {
    padding: 1rem 1rem;
  }
}

@media screen and (max-width: 768px) {
  .section {
    padding: 1rem 1rem;
  }
  .avatar{
    position: inherit;
    display: block;
    margin-bottom: 15px

  }
  .section {
    text-align: -webkit-center;
  }
}


</style>