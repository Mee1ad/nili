<template>
  <PageHeader title="Bazar" meta="PORTFOLIO"/>
  <div class="masonry animated fadeInUp col-lg-12 col-xs-12 col-md-12">
    <img v-for="image in images" :key="image" class="image animated fadeInUp"
         :src="require(`@/assets/gallery/bazar/${image.name}.jpg`)"
         :alt="image.alt"/>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";

const images = [
  {
    'name': 'apple-seller',
    'alt': 'apple seller image'
  }, {
    'name': 'fish-seller',
    'alt': 'fish seller image'
  },
  {
    'name': 'potato-shop',
    'alt': 'potato shop image'
  },
  {
    'name': 'sheep-seller',
    'alt': 'sheep seller image'
  },
  {
    'name': 'sweet seller',
    'alt': 'sweet seller image'
  }
]

export default {
  name: "GalleryPage",
  components: {PageHeader},
  data: () => {
    return {
      images,
    };
  }
}
</script>

<style scoped>

</style>