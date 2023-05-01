<template>
  <PageHeader title="Bazar" meta="PORTFOLIO"/>
  <section class="section">
    <div class="container columns is-12 is-multiline">
      <div class="masonry animated fadeInUp ">
        <div v-for="image in images" :key="image"
             class="image animated fadeInUp img-responsive column is-4-desktop is-6-tablet is-12-mobile">
          <!--  for mobile -->
          <ImageSkeleton :w="`10rem`" :h="`20rem`" v-if="isMobile"
                         :imageSrc="require(`@/assets/gallery/bazar/${image.name}.jpg`)" :alt="image.alt"/>
          <!--  for desktop -->
          <ImageSkeleton :w="`21.8rem`" :h="`20rem`" v-if="!isMobile"
                         :imageSrc="require(`@/assets/gallery/bazar/${image.name}.jpg`)" :alt="image.alt"/>
        </div>
        <!--        <img v-for="image in images" :key="image" class="image animated fadeInUp img-responsive column is-4-desktop is-6-tablet is-12-mobile"-->
        <!--             :src="require(`@/assets/gallery/bazar/${image.name}.jpg`)"-->
        <!--             :alt="image.alt"/>-->
      </div>
    </div>
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ImageSkeleton from "@/components/ImageSkeleton";

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
  components: {PageHeader, ImageSkeleton},
  data: () => {
    return {
      images,
      isMobile: false,
    };
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false
    }
  }
}
</script>

<style scoped>

</style>