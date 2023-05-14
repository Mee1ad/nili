<template>
  <div :class="!isMobile? 'parent': 'mobileParent'">
    <PageHeader
        :title="this.$route.params.serviceName.charAt(0).toUpperCase() + this.$route.params.serviceName.slice(1)"
        meta="SERVICES"/>

    <ImageSkeleton v-if="isMobile" :imageSrc="require(`@/assets/services/${this.$route.params.serviceName}/landscape.jpg`)"
                   :alt="'Image'" w="auto" h="161px" class="header-image animated fadeInUp"/>

    <ImageSkeleton v-if="!isMobile" :imageSrc="require(`@/assets/services/${this.$route.params.serviceName}/landscape.jpg`)"
                   :alt="'Image'" w="auto" h="573px" class="header-image animated fadeInUp"/>
    <p>Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer
      turpeutionyer masin libero sempe. Fusceler mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis
      lacus. Fusce mollis augue sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus. Yuroin non lorem ac erat
      suscipit bibendum nulla facilisi.</p>

    <p class="description">Quisque gravida eros ut turpis interdum ornare. Interdum et malesu they adamale fames ac ante
      ipsum primis in
      faucibus. Curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Maecenas nisl est, conselur
      rhoncus loremir consequat et, finibus nec purus. Yuroin non lorem ac erat suscipit bibendum. Nulla facilisi.
      Sedeuter nunc volutpat, mollis sapien vel, conseyer turpeutionyer massa in libero semper. Fusceler mollis augue
      sit amet hendrerit vestibulum. Duisteyerionyer venenatis lacus. Fusce mollis augue sit amet hendrerit
      vestibulum.</p>
    <!--  for mobile -->
    <div class="is-4-desktop is-6-tablet is-12-mobile" v-if="isMobile">
      <ImageSkeleton  v-for="image in images[this.$route.params.serviceName]" :key="image" w="316px" h="474px"
                     :imageSrc="require(`@/assets/services/${this.$route.params.serviceName}/${image.name}.jpg`)"
                     :alt="image.alt" class="image animated fadeInUp" />
    </div>
    <!--  for desktop -->
    <div class="masonry" v-if="!isMobile">
      <ImageSkeleton v-for="image in images[this.$route.params.serviceName]" :key="image" w="361px" h="542px"
                     :imageSrc="require(`@/assets/services/${this.$route.params.serviceName}/${image.name}.jpg`)"
                     :alt="image.alt" class="image animated fadeInUp" />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ImageSkeleton from "@/components/ImageSkeleton";
// const serviceName = this.$route.params.serviceName
const images = {
  'birthday': [
    {
      'name': '1',
      'alt': 'birthday image'
    }, {
      'name': '7',
      'alt': 'birthday image'
    },
    {
      'name': '3',
      'alt': 'birthday image'
    },
    {
      'name': '4',
      'alt': 'birthday image'
    },
    {
      'name': '5',
      'alt': 'birthday image'
    },
    {
      'name': '2',
      'alt': 'birthday image'
    },
    {
      'name': '8',
      'alt': 'birthday image'
    },
    {
      'name': '6',
      'alt': 'birthday image'
    }
  ],
  'couple': [
    {
      'name': '1',
      'alt': 'couple image'
    }, {
      'name': '2',
      'alt': 'couple image'
    },
    {
      'name': '3',
      'alt': 'couple image'
    },
    {
      'name': '7',
      'alt': 'couple image'
    },
    {
      'name': '5',
      'alt': 'couple image'
    },
    {
      'name': '6',
      'alt': 'couple image'
    },
    {
      'name': '4',
      'alt': 'couple image'
    },
    {
      'name': '11',
      'alt': 'couple image'
    },
    {
      'name': '8',
      'alt': 'couple image'
    },

    {
      'name': '9',
      'alt': 'couple image'
    },

    {
      'name': '10',
      'alt': 'couple image'
    },

  ],
  'portrait': [
    {
      'name': '1',
      'alt': 'portrait image'
    }, {
      'name': '2',
      'alt': 'portrait image'
    },
    {
      'name': '3',
      'alt': 'portrait image'
    },
    {
      'name': '7',
      'alt': 'portrait image'
    },
    {
      'name': '5',
      'alt': 'portrait image'
    },
    {
      'name': '6',
      'alt': 'portrait image'
    },
    {
      'name': '4',
      'alt': 'portrait image'
    },
    {
      'name': '8',
      'alt': 'portrait image'
    },
    {
      'name': '9',
      'alt': 'portrait image'
    },
    {
      'name': '10',
      'alt': 'portrait image'
    },
    {
      'name': '11',
      'alt': 'portrait image'
    },
    {
      'name': '12',
      'alt': 'portrait image'
    },
    {
      'name': '13',
      'alt': 'portrait image'
    },
    {
      'name': '14',
      'alt': 'portrait image'
    }
  ],
  'kids': [
    {
      'name': '1',
      'alt': 'kids image'
    }, {
      'name': '2',
      'alt': 'kids image'
    },
    {
      'name': '3',
      'alt': 'kids image'
    },
    {
      'name': '7',
      'alt': 'kids image'
    },
    {
      'name': '5',
      'alt': 'kids image'
    },
    {
      'name': '6',
      'alt': 'kids image'
    },
    {
      'name': '4',
      'alt': 'kids image'
    },
    {
      'name': '8',
      'alt': 'kids image'
    },
    {
      'name': '9',
      'alt': 'kids image'
    },
    {
      'name': '10',
      'alt': 'kids image'
    },
    {
      'name': '11',
      'alt': 'kids image'
    }
  ]
}

const items = [
  {
    title: 'First',
    description: 'The first item.'
  }
]

export default {
  name: "ServicePage",
  components: {PageHeader, ImageSkeleton},
  // props: {
  //   images: {required: true, type: Array},
  // },
  data: () => {
    return {
      images,
      items,
      isMobile: false,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
  },
}
</script>

<style scoped>

.parent {
  margin: 0 2rem 0 6rem;
}

.mobileParent {
  margin: 1rem;
}

.header-image {
  width: 100%;
  margin-bottom: 30px;
}

.description {
  margin-bottom: 100px;
}

.image {
  display: inline-block;
}
</style>