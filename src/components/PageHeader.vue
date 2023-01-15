<template>
  <div class="header animated fadeInUp">
    <span class="heading-meta">{{ meta }}</span>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {required: true, type: String},
    meta: {required: true, type: String}
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  margin-top: 100px;
}



.title {
  color: var(--text-color);
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px 0 30px 0;
  font-weight: 700;
  font-size: 30px;
}
</style>